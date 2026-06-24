"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "In this day and economy, we are extremely focused on making sure that we provide a measurable value to our customers. I can tell you from experience that Enterprise Cleaning Corporation delivers that value to our company through their service, quality, and attention to detail. The team at Enterprise consistently exceeds our expectations. I would never switch to another cleaning company!",
    by: "Bob Macintire, President Mackintire Insurance Agency",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "We are extremely happy with their performance. Many of our tenants have called to express their satisfaction with their level of service and honesty by its workers. Their communication and response time is excellent. Not only does Enterprise Cleaning respond quickly to routine requests, they are extremely efficient in emergency clean-up situations.",
    by: "Katheryn Krock, Property Manager Commerce Associates",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "We are very, very, very happy with the cleaning of their facility. The crew is great and professional and polite and place even smells clean.",
    by: "Chief Jeffrey Lourie Uxbridge Police Department",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "I can't even tell you how happy I am with the job the crew form Enterprise did for me. My attic was filthy with 27 years of dust and dirt from a ro...",
    by: "Paula J 12/17/2018",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "Enterprise Crew, you all were amazing and the homeowners were absolutely astounded by the transformation from a attacking a dust disaster ..",
    by: "D Pierce dpi Denise Pierce I 12/2/2018",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "Outstanding service! They responded to our flood emergency immediately and saved the day.",
    by: "Retail Store Owner",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "Consistent, reliable, and thorough. They truly are the gold standard.",
    by: "Corporate Client",
    imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-6 sm:p-8 transition-all duration-500 ease-in-out shadow-lg flex flex-col",
        isCenter 
          ? "z-10 bg-[#00B8FF] text-white border-[#00B8FF]" 
          : "z-0 bg-card text-card-foreground border-border hover:border-[#00B8FF]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0, 184, 255, 0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#009ad6]" : "bg-border"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-background object-cover object-top shrink-0"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.1)"
        }}
      />
      <div 
        className="flex-1 overflow-y-auto pr-2 mb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <h3 className={cn(
          "text-sm sm:text-base font-medium tracking-tight leading-relaxed",
          isCenter ? "text-white" : "text-foreground"
        )}>
          "{testimonial.testimonial}"
        </h3>
      </div>
      <p className={cn(
        "mt-auto text-xs sm:text-sm italic font-medium shrink-0 truncate",
        isCenter ? "text-white/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
      
      <style dangerouslySetInnerHTML={{__html: `
        .flex-1::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 320);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-20">
        <h5 className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: "#00B8FF" }}>Happy Customers</h5>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
           Don't just take <span style={{ color: "#00B8FF" }}>our word for it</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Join thousands of businesses and homeowners who trust Enterprise Cleaning for their toughest jobs.
        </p>
      </div>

        <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full shadow-md",
              "bg-background border border-border hover:bg-[#00B8FF] hover:text-white text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full shadow-md",
              "bg-background border border-border hover:bg-[#00B8FF] hover:text-white text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
