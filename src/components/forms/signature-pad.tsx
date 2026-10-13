"use client";

import React, { useRef, useState, useEffect } from "react";
import { Eraser, Check, Type, PenTool } from "lucide-react";

interface SignaturePadProps {
  onSignatureChange: (dataUrl: string | null) => void;
  signerName: string;
}

export function SignaturePad({ onSignatureChange, signerName }: SignaturePadProps) {
  const [mode, setMode] = useState<"draw" | "type">("draw");
  const [typedName, setTypedName] = useState(signerName || "");
  const [hasDrawn, setHasDrawn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Sync typed name when parent signerName updates
  useEffect(() => {
    if (signerName && !typedName) {
      setTypedName(signerName);
    }
  }, [signerName]);

  // Synchronize internal canvas width/height with physical CSS display size
  const syncCanvasDimensions = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 1;

    // Check if already correctly sized
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      // Temporarily store existing drawing if any
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext("2d");
      const hadContent = canvas.width > 0 && canvas.height > 0 && hasDrawn;

      if (hadContent && tempCtx) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#003057"; // Enterprise brand navy

        if (hadContent && tempCtx) {
          ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
        }
      }
    }
  };

  useEffect(() => {
    if (mode === "draw") {
      const canvas = canvasRef.current;
      if (!canvas) return;

      syncCanvasDimensions();

      const observer = new ResizeObserver(() => {
        syncCanvasDimensions();
      });

      observer.observe(canvas);

      return () => {
        observer.disconnect();
      };
    }
  }, [mode]);

  // Accurate mouse and touch coordinate extractor with dynamic scaling
  const getCoordinates = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ): { x: number; y: number } | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;

    let clientX: number;
    let clientY: number;

    if ("touches" in e) {
      if (!e.touches || e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const dpr = window.devicePixelRatio || 1;
    // Mathematical scale guarantee: exactly maps screen cursor to canvas user space
    const scaleX = (canvas.width / dpr) / rect.width;
    const scaleY = (canvas.height / dpr) / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  // Handle draw events
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Prevent scrolling on mobile touch
    if ("touches" in e) {
      e.stopPropagation();
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    isDrawingRef.current = true;
    lastPointRef.current = coords;

    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#003057";

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    // Draw an initial point in case of single click/tap
    ctx.lineTo(coords.x + 0.1, coords.y + 0.1);
    ctx.stroke();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    if ("touches" in e) {
      e.stopPropagation();
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const last = lastPointRef.current || coords;
    // Midpoint quadratic curve for ultra smooth ink flow exactly under the pen
    const midX = (last.x + coords.x) / 2;
    const midY = (last.y + coords.y) / 2;

    ctx.quadraticCurveTo(last.x, last.y, midX, midY);
    ctx.stroke();

    lastPointRef.current = coords;
    setHasDrawn(true);
  };

  const stopDrawing = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      lastPointRef.current = null;
      const canvas = canvasRef.current;
      if (canvas) {
        onSignatureChange(canvas.toDataURL("image/png"));
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    // 1. Wipe all physical pixels on the canvas with 1:1 identity transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Set transform directly to dpr (absolute, never multiplies or compounds!)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.beginPath(); // reset any path

    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#003057";

    isDrawingRef.current = false;
    setHasDrawn(false);
    lastPointRef.current = null;
    onSignatureChange(null);
  };

  // Convert typed name to canvas signature image
  const generateTypedSignature = (text: string) => {
    setTypedName(text);
    if (!text.trim()) {
      onSignatureChange(null);
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 120;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#003057";
    ctx.font = "italic 36px 'Brush Script MT', 'Dancing Script', cursive, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.trim(), canvas.width / 2, canvas.height / 2);

    onSignatureChange(canvas.toDataURL("image/png"));
  };

  useEffect(() => {
    if (mode === "type" && typedName.trim()) {
      generateTypedSignature(typedName);
    }
  }, [mode]);

  return (
    <div className="space-y-3">
      {/* Mode Switcher */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Legally Binding Electronic Signature
        </span>
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => {
              setMode("draw");
              clearCanvas();
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition-all ${
              mode === "draw"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <PenTool className="w-3 h-3" />
            <span>Draw</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("type");
              generateTypedSignature(typedName || signerName);
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition-all ${
              mode === "type"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Type className="w-3 h-3" />
            <span>Type</span>
          </button>
        </div>
      </div>

      {/* Signature Box */}
      {mode === "draw" ? (
        <div className="relative border-2 border-dashed border-slate-300 rounded-2xl bg-white p-2 overflow-hidden shadow-inner focus-within:border-[#003B7A]">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-32 touch-none cursor-crosshair block"
          />

          {/* Helper line inside canvas */}
          <div className="absolute bottom-6 left-4 right-4 border-b border-slate-200 pointer-events-none flex items-center justify-between text-[10px] text-slate-300">
            <span>Sign on the line</span>
            <span>X</span>
          </div>

          {/* Action buttons */}
          <div className="absolute top-2 right-2 flex items-center gap-2">
            {hasDrawn && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <Check className="w-3 h-3" /> Signed
              </span>
            )}
            <button
              type="button"
              onClick={clearCanvas}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 bg-slate-50 hover:bg-red-50 px-2.5 py-1 rounded-md border border-slate-200 transition-colors"
            >
              <Eraser className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={typedName}
            onChange={(e) => generateTypedSignature(e.target.value)}
            placeholder="Type your legal full name here..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003B7A] text-slate-900 font-medium text-sm"
          />
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <span className="text-xs text-slate-400 block mb-1">Generated Signature Preview:</span>
            <div
              className="text-3xl text-[#003057] italic tracking-wide select-none"
              style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif" }}
            >
              {typedName.trim() || "(Enter Name Above)"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
