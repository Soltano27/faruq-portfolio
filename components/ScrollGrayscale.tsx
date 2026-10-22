"use client";

import { useEffect } from "react";

/** Adds "has-scrolled" to <html> once the visitor scrolls, and removes it back at the top. */
export default function ScrollGrayscale() {
  useEffect(() => {
    const root = document.documentElement;
    const update = () =>
      root.classList.toggle("has-scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      root.classList.remove("has-scrolled");
    };
  }, []);
  return null;
}
