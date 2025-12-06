import { useEffect, useRef } from "react";

export default function BlackHole() {
  const containerRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const hover = hoverRef.current;

    const h = container.offsetHeight;
    const w = container.offsetWidth;

    const cw = w;
    const ch = h;
    const maxorbit = 255;
    const centerx = cw / 2;
    const centery = ch / 2;

    let collapse = false;
    let expanse = false;
    let returning = false;

    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "multiply";

    const stars = [];
    const startTime = Date.now();
    let currentTime = 0;

    function rotate(cx, cy, x, y, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        cos * (x - cx) + sin * (y - cy) + cx,
        cos * (y - cy) - sin * (x - cx) + cy,
      ];
    }

    class Star {
      constructor() {
        const rands = [];
        rands.push(Math.random() * (maxorbit / 2));
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);
        this.orbital = rands.reduce((a, b) => a + b) / rands.length;

        this.x = centerx;
        this.y = centery + this.orbital;
        this.originY = this.y;
        this.originalY = this.y;

        this.speed = (Math.random() * 2 + 1.5) * Math.PI / 180;
        this.rotation = Math.random() * 360 * Math.PI / 180;

        this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;

        this.hoverPos = centery + maxorbit / 2;
        this.expansePos = centery - Math.random() * ch;

        this.prevX = this.x;
        this.prevY = this.y;
        this.prevR = this.rotation;
      }

      draw() {
        this.rotation += this.speed;

        if (!expanse && !returning) {
          if (!collapse) {
            this.y += (this.originY - this.y) / 20;
          } else {
            this.y += (this.hoverPos - this.y) / 20;
          }
        }

        if (expanse) {
          this.y += (this.expansePos - this.y) / 40;
        }

        if (returning) {
          this.y += (this.originalY - this.y) / 60;
        }

        ctx.beginPath();
        const old = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        ctx.moveTo(old[0], old[1]);

        ctx.translate(centerx, centery);
        ctx.rotate(this.rotation);
        ctx.translate(-centerx, -centery);

        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }

    for (let i = 0; i < 2000; i++) {
      stars.push(new Star());
    }

    function animate() {
      currentTime = (Date.now() - startTime) / 50;

      ctx.fillStyle = "rgba(25,25,25,0.2)";
      ctx.fillRect(0, 0, cw, ch);

      stars.forEach((s) => s.draw());
      requestAnimationFrame(animate);
    }

    animate();

    // ✅ EVENTS
    hover.addEventListener("mouseenter", () => {
      if (!expanse) collapse = true;
    });

    hover.addEventListener("mouseleave", () => {
      if (!expanse) collapse = false;
    });

    hover.addEventListener("click", () => {
      expanse = true;
      collapse = false;
      returning = false;
      hover.classList.add("open");

      setTimeout(() => {
        expanse = false;
        returning = true;
      }, 20000);

      setTimeout(() => {
        returning = false;
        hover.classList.remove("open");
      }, 28000);
    });

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <div id="blackhole" ref={containerRef}>
      <div className="centerHover" ref={hoverRef}>
        <span>ENTER</span>
      </div>
    </div>
  );
}
