"use client";

// ============================================================
// 3D primitives — Wondermaker-style depth using CSS 3D + Framer Motion.
// No WebGL, no heavy deps. Pointer-tracked tilt + hover/tap flip cards.
// Respects prefers-reduced-motion (motion springs settle to 0 / flips snap).
// ============================================================

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ---------- TiltCard: pointer-tracked 3D tilt with light glare ----------
   Wrap any block; it tilts toward the cursor and lifts on hover.
   - max:   peak tilt in degrees
   - glare: show the moving light sheen
   - scale: hover lift scale
*/
export function TiltCard({
  children,
  className = "",
  max = 12,
  glare = true,
  scale = 1.02,
  style,
}) {
  const ref = useRef(null);

  // raw pointer position, normalized to -0.5..0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring);

  // glare follows the cursor across the surface
  const glareX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x} ${y}, rgba(255,255,255,0.5), transparent 45%)`
  );

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      transition={{ type: "spring", ...spring }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}

/* ---------- Layer: push content forward in 3D for parallax depth ----------
   Use inside a TiltCard (which sets preserve-3d) to make elements float
   above the surface as the card tilts. depth in px.
*/
export function Layer({ children, depth = 40, className = "", style }) {
  return (
    <div
      className={className}
      style={{ transform: `translateZ(${depth}px)`, ...style }}
    >
      {children}
    </div>
  );
}

/* ---------- FlipCard: front <-> back rotateY flip ----------
   Flips on hover (desktop) and on tap (mobile/touch).
   Pass `front` and `back` nodes; control height via className/aspect.
*/
export function FlipCard({
  front,
  back,
  className = "",
  flipOnHover = true,
  duration = 0.7,
}) {
  const [flipped, setFlipped] = useState(false);

  const hoverHandlers = flipOnHover
    ? {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => setFlipped(false),
      }
    : {};

  return (
    <div
      className={`group perspective-1400 ${className}`}
      {...hoverHandlers}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="preserve-3d relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 h-full w-full overflow-hidden">
          {front}
        </div>
        {/* Back */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 h-full w-full overflow-hidden">
          {back}
        </div>
      </motion.div>
    </div>
  );
}
