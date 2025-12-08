import { useEffect, useRef } from "react";

export default function CursorEngine({ type }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const styles = {
    arrow: "w-4 h-4 border border-black rotate-45",
    big: "w-12 h-12 border border-black rounded-full",
    ring: "w-8 h-8 border-2 rounded-full",
    glitch: "w-4 h-4 bg-black animate-pulse",
    blur: "w-6 h-6 bg-black opacity-30 rounded-full blur-md",
  };

  const map = {
    "arrow-pointer": styles.arrow,
    "big-circle": styles.big,
    "ring-dot": styles.ring,
    "circle-and-dot": styles.ring,
    "glitch-effect": styles.glitch,
    "motion-blur": styles.blur,
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ${map[type]}`}
    />
  );
}
