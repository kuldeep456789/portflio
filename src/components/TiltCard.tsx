import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;   // max tilt angle in degrees
  glare?: boolean;      // moving glare highlight
  scale?: number;       // hover scale
  accent?: string;      // accent color for glow
}

const TiltCard = ({
  children,
  className = "",
  intensity = 14,
  glare = true,
  scale = 1.03,
  accent = "rgba(99,102,241,0.35)",
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0→1 left→right
    const py = (e.clientY - rect.top) / rect.height;    // 0→1 top→bottom

    setTilt({
      rotateX: (0.5 - py) * intensity,    // tilt up when cursor is at top
      rotateY: (px - 0.5) * intensity,    // tilt right when cursor is at right
      glareX: px * 100,
      glareY: py * 100,
    });
  };

  const onMouseEnter = () => setHovering(true);

  const onMouseLeave = () => {
    setHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: "900px" }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: hovering ? scale : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="w-full h-full"
      >
        {/* ── Content ── */}
        {children}

        {/* ── Glare layer ── */}
        {glare && (
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden transition-opacity duration-300"
            style={{ opacity: hovering ? 1 : 0 }}
          >
            {/* Moving shine */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.12) 0%, transparent 55%)`,
              }}
            />
            {/* Edge specular */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${135 + tilt.rotateY * 2}deg, rgba(255,255,255,0.06) 0%, transparent 50%)`,
              }}
            />
          </div>
        )}

        {/* ── Bottom depth shadow (3D floor effect) ── */}
        {hovering && (
          <div
            className="absolute -inset-x-4 bottom-0 h-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 100%, ${accent} 0%, transparent 70%)`,
              filter: "blur(12px)",
              transform: "translateZ(-20px) translateY(8px)",
              opacity: 0.6,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;
