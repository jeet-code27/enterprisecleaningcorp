'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSwiperProps {
  images: string;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
  autoPlayInterval?: number;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  cardWidth = 320,
  cardHeight = 240,
  className = '',
  autoPlayInterval = 5000
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const imageList = images.split(',').map(img => img.trim()).filter(img => img);
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: imageList.length }, (_, i) => i)
  );

  const getDurationFromCSS = useCallback((
    variableName: string,
    element?: HTMLElement | null
  ): number => {
    const targetElement = element || document.documentElement;
    const value = getComputedStyle(targetElement)
      ?.getPropertyValue(variableName)
      ?.trim();
    if (!value) return 0;
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 0;
  }, []);

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return [];
    return [...cardStackRef.current.querySelectorAll('.image-card')] as HTMLElement[];
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null => {
    const cards = getCards();
    return cards[0] || null;
  }, [getCards]);

  const updatePositions = useCallback(() => {
    const cards = getCards();
    cards.forEach((card, i) => {
      card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      card.style.setProperty('--i', (i + 1).toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
    });
  }, [getCards]);

  const applySwipeStyles = useCallback((deltaX: number) => {
    const card = getActiveCard();
    if (!card) return;
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.2}deg`);
    card.style.opacity = (1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75).toString();
  }, [getActiveCard]);

  const swipeNext = useCallback(() => {
    if (isSwiping.current) return;
    const card = getActiveCard();
    if (!card) return;
    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current) || 300;
    
    card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
    card.style.setProperty('--swipe-x', `300px`);
    card.style.setProperty('--swipe-rotate', `20deg`);
    card.style.opacity = '0';

    setTimeout(() => {
      setCardOrder(prev => {
        if (prev.length === 0) return [];
        return [...prev.slice(1), prev[0]];
      });
    }, duration);
  }, [getActiveCard, getDurationFromCSS]);

  const swipePrev = useCallback(() => {
    if (isSwiping.current) return;
    // Just pop the last item to the front. The updatePositions transition will make it slide in.
    setCardOrder(prev => {
      if (prev.length === 0) return [];
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  }, []);

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    const card = getActiveCard();
    if (card) card.style.transition = 'none';
  }, [getActiveCard]);

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const deltaX = currentX.current - startX.current;
    const threshold = 50;
    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current) || 300;
    const card = getActiveCard();

    if (card) {
      card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;

      if (Math.abs(deltaX) > threshold) {
        const direction = Math.sign(deltaX);
        card.style.setProperty('--swipe-x', `${direction * 300}px`);
        card.style.setProperty('--swipe-rotate', `${direction * 20}deg`);
        card.style.opacity = '0';

        setTimeout(() => {
          setCardOrder(prev => {
            if (prev.length === 0) return [];
            return [...prev.slice(1), prev[0]];
          });
        }, duration);
      } else {
        applySwipeStyles(0);
      }
    }

    isSwiping.current = false;
    startX.current = 0;
    currentX.current = 0;
  }, [getDurationFromCSS, getActiveCard, applySwipeStyles]);

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      currentX.current = clientX;
      const deltaX = currentX.current - startX.current;
      applySwipeStyles(deltaX);

      if (Math.abs(deltaX) > 50) {
        handleEnd();
      }
    });
  }, [applySwipeStyles, handleEnd]);

  useEffect(() => {
    const cardStackElement = cardStackRef.current;
    if (!cardStackElement) return;

    const handlePointerDown = (e: PointerEvent) => {
      handleStart(e.clientX);
    };
    const handlePointerMove = (e: PointerEvent) => {
      handleMove(e.clientX);
    };
    const handlePointerUp = (e: PointerEvent) => {
      handleEnd();
    };

    cardStackElement.addEventListener('pointerdown', handlePointerDown);
    cardStackElement.addEventListener('pointermove', handlePointerMove);
    cardStackElement.addEventListener('pointerup', handlePointerUp);

    return () => {
      cardStackElement.removeEventListener('pointerdown', handlePointerDown);
      cardStackElement.removeEventListener('pointermove', handlePointerMove);
      cardStackElement.removeEventListener('pointerup', handlePointerUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleStart, handleMove, handleEnd]);

  useEffect(() => {
    updatePositions();
  }, [cardOrder, updatePositions]);

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwiping.current) {
        swipeNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [swipeNext, autoPlayInterval]);

  return (
    <div className="relative flex items-center justify-center w-full group">
      <section
        className={`relative grid place-content-center select-none ${className}`}
        ref={cardStackRef}
        style={{
          width: cardWidth + 32,
          height: cardHeight + 32,
          touchAction: 'none',
          transformStyle: 'preserve-3d',
          '--card-perspective': '700px',
          '--card-z-offset': '12px',
          '--card-y-offset': '7px',
          '--card-max-z-index': imageList.length.toString(),
          '--card-swap-duration': '0.6s',
        } as React.CSSProperties}
      >
        {cardOrder.map((originalIndex, displayIndex) => (
          <article
            key={`${imageList[originalIndex]}-${originalIndex}`}
            className="image-card absolute cursor-grab active:cursor-grabbing
                       place-self-center border-[4px] border-white rounded-2xl
                       shadow-2xl overflow-hidden will-change-transform bg-white"
            style={{
              '--i': (displayIndex + 1).toString(),
              zIndex: imageList.length - displayIndex,
              width: cardWidth,
              height: cardHeight,
              transform: `perspective(var(--card-perspective))
                         translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                         translateY(calc(var(--card-y-offset) * var(--i)))
                         translateX(var(--swipe-x, 0px))
                         rotateY(var(--swipe-rotate, 0deg))`
            } as React.CSSProperties}
          >
            <img
              src={imageList[originalIndex]}
              alt={`Swiper image ${originalIndex + 1}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </article>
        ))}
      </section>
    </div>
  );
};
