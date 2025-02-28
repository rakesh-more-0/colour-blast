
import { useState, useEffect, useRef, RefObject } from 'react';

interface GlowOptions {
  maxDistance?: number;
  intensity?: number;
  colors?: string[];
  defaultColor?: string;
  scaleEffect?: boolean;
  translateEffect?: boolean;
}

export function useMouseGlow<T extends HTMLElement>(options: GlowOptions = {}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementsRef = useRef<(T | null)[]>([]);
  
  const {
    maxDistance = 300,
    intensity = 1,
    colors = ['rgba(171, 32, 253, 0.5)', 'rgba(255, 119, 71, 0.5)', 'rgba(0, 212, 245, 0.5)'],
    defaultColor = 'rgba(171, 32, 253, 0.3)',
    scaleEffect = true,
    translateEffect = true
  } = options;

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Apply glow effect
  useEffect(() => {
    elementsRef.current.forEach((element, index) => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to element center
      const distanceX = mousePosition.x - elementCenterX;
      const distanceY = mousePosition.y - elementCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < maxDistance) {
        // Calculate intensity based on distance (closer = stronger)
        const effectIntensity = intensity * (1 - distance / maxDistance);
        
        // Use color from array or default
        const color = colors[index % colors.length] || defaultColor;
        
        // Apply the glow effect
        element.style.boxShadow = `0 10px 50px -5px ${color}`;
        
        // Optional scale and translate effects
        if (scaleEffect && translateEffect) {
          element.style.transform = `scale(${1 + effectIntensity * 0.05}) translateY(${-effectIntensity * 5}px)`;
        } else if (scaleEffect) {
          element.style.transform = `scale(${1 + effectIntensity * 0.05})`;
        } else if (translateEffect) {
          element.style.transform = `translateY(${-effectIntensity * 5}px)`;
        }
      } else {
        // Reset when mouse is far away
        element.style.boxShadow = '';
        element.style.transform = '';
      }
    });
  }, [mousePosition, maxDistance, intensity, colors, defaultColor, scaleEffect, translateEffect]);

  // Function to register an element reference
  const registerElement = (index: number) => (el: T | null) => {
    elementsRef.current[index] = el;
  };

  return { registerElement };
}
