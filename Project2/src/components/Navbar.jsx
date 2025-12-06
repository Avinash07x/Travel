import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll("a");
    let anim = null;

    const animate = (from, to) => {
      if (anim) clearInterval(anim);

      const start = Date.now();
      anim = setInterval(() => {
        const p = Math.min((Date.now() - start) / 500, 1);
        const e = 1 - Math.pow(1 - p, 3);

        const x = from + (to - from) * e;
        const y = -40 * (4 * e * (1 - e));
        const r = 200 * Math.sin(p * Math.PI);

        nav.style.setProperty("--translate-x", `${x}px`);
        nav.style.setProperty("--translate-y", `${y}px`);
        nav.style.setProperty("--rotate-x", `${r}deg`);

        if (p >= 1) {
          clearInterval(anim);
          anim = null;
          nav.style.setProperty("--translate-y", "0px");
          nav.style.setProperty("--rotate-x", "0deg");
        }
      }, 16);
    };

    const getCurrentPosition = () =>
      parseFloat(nav.style.getPropertyValue("--translate-x")) || 0;

    const getItemCenter = (item) =>
      item.getBoundingClientRect().left +
      item.offsetWidth / 2 -
      nav.getBoundingClientRect().left -
      5;

    const moveToItem = (item) => {
      if (!item) return;
      const current = getCurrentPosition();
      const center = getItemCenter(item);
      animate(current, center);
      nav.classList.add("show-indicator");
    };

    // ✅ Hover listeners
    const handleEnter = (item) => () => moveToItem(item);

    const handleLeave = () => {
      moveToItem(items[activeItem]);
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter(item));
      item.addEventListener("mouseleave", handleLeave);
    });

    // ✅ Move indicator on active change
    moveToItem(items[activeItem]);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mouseleave", handleLeave);
      });

      if (anim) clearInterval(anim);
    };
  }, [activeItem]);

  return (
    <>
      <nav className="glass-nav">
        <ul ref={navRef}>
          {["Home", "About", "Events", "Directions", "Houses"].map((item, i) => (
            <li key={i}>
              <a
                href={`#section${i + 1}`}
                className={activeItem === i ? "active" : ""}
                onClick={() => setActiveItem(i)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ SVG Filter */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="wave-distort" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0038 0.0038"
              numOctaves="1"
              seed="2"
              result="roughNoise"
            />
            <feGaussianBlur
              in="roughNoise"
              stdDeviation="8.5"
              result="softNoise"
            />
            <feComposite
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="2"
              k4="0"
              in="softNoise"
              result="mergedMap"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="mergedMap"
              scale="-42"
              xChannelSelector="G"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Navbar;
