
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingProps {
  setIsLoading: (value: boolean) => void;
}

const name = 'FEMI ORIODOFE';

export default function Loading({ setIsLoading }: LoadingProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = nameRef.current?.querySelectorAll('.name-letter');

    if (!loaderRef.current || !letters?.length) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
        },
      });

      timeline.fromTo(
        letters,
        {
          opacity: 0,
          y: 15,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.35,
          stagger: 0.12,
          ease: 'power2.out',
        }
      );

      // Brief pause after the name is completely written
      timeline.to({}, { duration: 0.6 });

      // Fade out the completed loader
      timeline.to(loaderRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [setIsLoading]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div
        ref={nameRef}
        className="flex items-center justify-center px-4"
      >
        <h1 className="flex flex-wrap justify-center text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.12em] text-white">
          {name.split('').map((letter, index) => (
            <span
              key={index}
              className={`name-letter inline-block ${
                letter === ' ' ? 'w-3 sm:w-5 md:w-6' : ''
              }`}
              style={{
                opacity: 0,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
