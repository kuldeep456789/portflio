import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProfessionalBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const mouse = { x: -1000, y: -1000 };
        const particles: Particle[] = [];
        const particleCount = 40;
        const connectionDistance = 180;

        const colors = ['#818cf8', '#c084fc', '#6366f1']; // Indigo/Violet palette

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 1.5 + 0.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const angle = Math.atan2(dy, dx);
                    const force = (120 - dist) / 120;
                    this.x -= Math.cos(angle) * force * 1.5;
                    this.y -= Math.sin(angle) * force * 1.5;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.5;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, i) => {
                p.update();
                p.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = (1 - dist / connectionDistance) * 0.15;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#030303] overflow-hidden">
            {/* Mesh Gradient */}
            <div className="absolute inset-0 bg-mesh opacity-70" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Aurora Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 aurora-blob" style={{ animationDelay: '0s', animationDuration: '25s' }} />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 aurora-blob" style={{ animationDelay: '-7s', animationDuration: '30s' }} />
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/5 aurora-blob" style={{ animationDelay: '-15s', animationDuration: '35s' }} />

            {/* Large soft glow in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/5 blur-[150px] pointer-events-none" />

            {/* Canvas for refined particles */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-40"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-[0.03]" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.6)_100%)]" />
        </div>
    );
};

export default ProfessionalBackground;
