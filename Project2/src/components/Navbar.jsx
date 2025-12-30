import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import CursorSVG from "../components/CursorSVG";

const Navbar = () => {
  const navRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/", type: "route" },
    { name: "About", link: "#About", type: "hash" },
    { name: "Events", link: "#Events", type: "hash" },
    { name: "Directions", link: "#Features", type: "hash" },
    { name: "Book a Visit ✦", link: "/contact", type: "route" },
  ];

  // Update active link for routes
  useEffect(() => {
    const index = navItems.findIndex(
      (item) => item.type === "route" && item.link === location.pathname
    );
    if (index !== -1) setActiveItem(index);
  }, [location.pathname]);

  // Desktop indicator animation
  useEffect(() => {
    if (window.innerWidth < 768) return;

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
          nav.style.setProperty("--translate-y", "0px");
          nav.style.setProperty("--rotate-x", "0deg");
        }
      }, 16);
    };

    const getX = () =>
      parseFloat(nav.style.getPropertyValue("--translate-x")) || 0;

    const center = (el) =>
      el.getBoundingClientRect().left +
      el.offsetWidth / 2 -
      nav.getBoundingClientRect().left -
      5;

    const move = (el) => animate(getX(), center(el));

    items.forEach((el, i) => {
      el.onmouseenter = () => move(el);
      el.onmouseleave = () => move(items[activeItem]);
    });

    move(items[activeItem]);

    return () => anim && clearInterval(anim);
  }, [activeItem]);

  // Smooth scroll for hash links
  const handleHashClick = (e, link, index) => {
    e.preventDefault();
    const id = link.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveItem(index);
      setOpen(false);
    }
  };

  return (
    <>
      <CursorSVG />

      <nav className="glass-nav">
        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>

        <ul ref={navRef} className={open ? "open" : ""}>
          {navItems.map((item, i) => (
            <li key={item.name}>
              {item.type === "route" ? (
                <Link
                  to={item.link}
                  className={activeItem === i ? "active" : ""}
                  onClick={() => {
                    setActiveItem(i);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.link}
                  className={activeItem === i ? "active" : ""}
                  onClick={(e) => handleHashClick(e, item.link, i)}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
