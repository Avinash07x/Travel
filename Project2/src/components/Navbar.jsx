import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import CursorSVG from "../components/CursorSVG";

const Navbar = () => {
  const navRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  // ✅ Nav items with correct links
  const navItems = [
    { name: "Home", link: "/"},
    { name: "About", link: "#about" },
    { name: "Events", link: "#Events" },
    { name: "Directions", link: "#Features" },
    { name: "Book a Visit ✦", link: "/contact" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll("a");
    const cursor = document.querySelector(".curzr"); // ✅ SVG cursor
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

    // ✅ HOVER + CURSOR SCALE EFFECT
    const handleEnter = (item) => () => {
      moveToItem(item);
      cursor?.classList.add("nav-hover");
    };

    const handleLeave = () => {
      moveToItem(items[activeItem]);
      cursor?.classList.remove("nav-hover");
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter(item));
      item.addEventListener("mouseleave", handleLeave);
    });

    moveToItem(items[activeItem]);

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
      {/* ✅ CUSTOM CURSOR */}
      <CursorSVG />

      <nav className="glass-nav">
        <ul ref={navRef}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link} // ✅ FIXED HREF
                className={activeItem === i ? "active" : ""}
                onClick={() => setActiveItem(i)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ SVG Filter */}
      <svg style={{ display: "none" }}>
        {/* your feTurbulence filter here */}
      </svg>
    </>
  );
};

export default Navbar;
