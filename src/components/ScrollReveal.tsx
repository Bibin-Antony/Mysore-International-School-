"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject, createElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../app/globals.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement> | null;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  as?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef = null,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  as: Component = 'div'
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    // Extract text content from children
    let textContent = '';
    
    if (typeof children === 'string') {
      textContent = children;
    } else if (React.isValidElement(children)) {
      // Extract text from React element
      const extractText = (element: ReactNode): string => {
        if (typeof element === 'string') return element;
        if (typeof element === 'number') return String(element);
        if (Array.isArray(element)) return element.map(extractText).join('');
        if (React.isValidElement(element)) {
          const props = element.props as { children?: ReactNode };
          if (props.children) {
            return extractText(props.children);
          }
        }
        return '';
      };
      textContent = extractText(children);
    }

    // Split text into words for animation
    if (textContent) {
      return textContent.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="word" key={index}>
            {word}
          </span>
        );
      });
    }
    
    return children;
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const wordElements = el.querySelectorAll('.word');

    // Animate container rotation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    // Animate word opacity
    if (wordElements.length > 0) {
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        {
          ease: 'power2.out',
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: 1.5
          }
        }
      );

      // Animate word blur
      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'power2.out',
            filter: 'blur(0px)',
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: 1.5
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, children]);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `scroll-reveal ${containerClassName}`
    },
    createElement('div', { className: `scroll-reveal-text ${textClassName}` }, splitText)
  );
};

export default ScrollReveal;
