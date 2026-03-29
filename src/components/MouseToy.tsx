import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Ripple {
  id: number;
  x: number;
  y: number;
}

// ─── Cursor SVG ───────────────────────────────────────────────────────────────
const CursorIcon = ({ clicking }: { clicking: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: "drop-shadow(0 2px 8px rgba(99,102,241,0.8))",
      transform: clicking ? "scale(0.82)" : "scale(1)",
      transition: "transform 0.08s ease",
    }}
  >
    <path
      d="M5 3L19 12.5L12.5 13.5L10 20L5 3Z"
      fill="white"
      stroke="rgba(99,102,241,1)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 5L17 12L12 12.7L9.7 18.5L6.5 5Z"
      fill="rgba(200,210,255,0.4)"
    />
  </svg>
);

// ─── Trail dot ────────────────────────────────────────────────────────────────
const TrailDot = ({ index }: { index: number }) => {
  const opacity = 0.5 - index * 0.12;
  const size = 6 - index;
  return (
    <div
      className="rounded-full absolute"
      style={{
        width: size,
        height: size,
        background: `rgba(99,102,241,${opacity})`,
        boxShadow: `0 0 ${4 - index}px rgba(99,102,241,${opacity})`,
      }}
    />
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const MouseToy = () => {
  // Raw mouse position
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth - 46 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight - 46 : 0);

  // Springy follow — the toy cursor lags a bit behind the real cursor
  const springConfig = { stiffness: 150, damping: 18, mass: 0.8 };
  const toyX = useSpring(mouseX, springConfig);
  const toyY = useSpring(mouseY, springConfig);

  // Trail dots — slower springs for each dot
  const trail1X = useSpring(mouseX, { stiffness: 90, damping: 20, mass: 1 });
  const trail1Y = useSpring(mouseY, { stiffness: 90, damping: 20, mass: 1 });
  const trail2X = useSpring(mouseX, { stiffness: 55, damping: 22, mass: 1.2 });
  const trail2Y = useSpring(mouseY, { stiffness: 55, damping: 22, mass: 1.2 });
  const trail3X = useSpring(mouseX, { stiffness: 35, damping: 24, mass: 1.4 });
  const trail3Y = useSpring(mouseY, { stiffness: 35, damping: 24, mass: 1.4 });

  const [clicking, setClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [visible, setVisible] = useState(false);
  const rippleId = useRef(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  // Handle clicks — press animation + ripple on interactive elements
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        'a, button, [role="button"], .cursor-pointer, input, select, textarea, label'
      );

      // Press animation for any click
      setClicking(true);
      setTimeout(() => setClicking(false), 120);

      // Ripple only on interactive elements
      if (clickable) {
        const id = ++rippleId.current;
        setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 900);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      {/* ── Trail dots ── */}
      <motion.div
        style={{
          position: "fixed",
          left: trail3X,
          top: trail3Y,
          zIndex: 9996,
          pointerEvents: "none",
          opacity: visible ? 1 : 0,
        }}
      >
        <TrailDot index={3} />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          left: trail2X,
          top: trail2Y,
          zIndex: 9997,
          pointerEvents: "none",
          opacity: visible ? 1 : 0,
        }}
      >
        <TrailDot index={2} />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          left: trail1X,
          top: trail1Y,
          zIndex: 9998,
          pointerEvents: "none",
          opacity: visible ? 1 : 0,
        }}
      >
        <TrailDot index={1} />
      </motion.div>

      {/* ── Main toy cursor ── */}
      <motion.div
        style={{
          position: "fixed",
          left: toyX,
          top: toyY,
          zIndex: 9999,
          pointerEvents: "none",
          translateX: "-2px",
          translateY: "-2px",
        }}
        animate={{
          scale: clicking ? 0.7 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 15 },
          opacity: { duration: 0.15 },
        }}
      >
        <div className="relative">
          {/* Glow ring */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute rounded-full"
            style={{
              width: 28,
              height: 28,
              left: -6,
              top: -6,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
            }}
          />
          <CursorIcon clicking={clicking} />
        </div>
      </motion.div>

      {/* ── Click ripples ── */}
      <AnimatePresence>
        {ripples.map((rp) => (
          <motion.div
            key={rp.id}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 2.8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: rp.x - 18,
              top: rp.y - 18,
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid rgba(99,102,241,0.9)",
              background: "rgba(99,102,241,0.15)",
              zIndex: 9998,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── Second outer ripple ── */}
      <AnimatePresence>
        {ripples.map((rp) => (
          <motion.div
            key={`outer-${rp.id}`}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            style={{
              position: "fixed",
              left: rp.x - 18,
              top: rp.y - 18,
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid rgba(139,92,246,0.6)",
              zIndex: 9997,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default MouseToy;
