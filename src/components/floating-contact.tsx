"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Phone, X } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-4 w-[280px] sm:w-80 border border-blue-100 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003B7A] to-[#E31837]" />
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-start gap-3 mb-4 pt-1">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-blue-50 border-2 border-blue-100 p-1 flex items-center justify-center">
                <Image 
                  src="/images/superman.png" 
                  alt="Superman" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Super Support</h3>
                <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Online
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 rounded-tl-none ml-2">
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                Hello! 👋 I'm here to save the day! How may I help you with your cleaning needs?
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-[#003B7A] hover:bg-[#002b5e] text-white rounded-lg py-2.5 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle size={16} />
                  Contact Us
                </button>
              </Link>
              <a href="tel:+18001234567" className="w-full">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-2.5 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                  <Phone size={16} />
                  Call Us
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center relative cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <span className="text-sm font-semibold text-gray-700">How may I help you? 👋</span>
              {/* Little triangle for speech bubble */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-[68px] h-[68px] rounded-full bg-white shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center border-2 border-blue-100 hover:border-[#003B7A] overflow-visible z-10"
          aria-label="Toggle Contact Menu"
        >
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#003B7A]" />
          <motion.div
            animate={isOpen ? { scale: 0.9, rotate: -10 } : { scale: 1, rotate: 0 }}
            className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-white"
          >
            {isOpen ? (
              <X size={28} className="text-gray-600" />
            ) : (
              <Image 
                src="/images/superman.png" 
                alt="Contact Support" 
                width={100} 
                height={100}
                className="w-[95px] h-[95px] absolute bottom-0 object-contain transition-transform group-hover:scale-110 duration-300 drop-shadow-md pointer-events-none"
              />
            )}
          </motion.div>
          
          {/* Notification badge */}
          {!isOpen && (
             <span className="absolute -top-1 -right-1 flex h-[18px] w-[18px]">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-[18px] w-[18px] bg-red-500 border-2 border-white"></span>
             </span>
          )}
        </button>
      </div>
    </div>
  );
}
