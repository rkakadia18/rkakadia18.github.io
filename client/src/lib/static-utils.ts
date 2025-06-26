import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRef, useEffect } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options);
    return () => observerRef.current?.disconnect();
  }, [callback, options]);

  return observerRef.current;
}