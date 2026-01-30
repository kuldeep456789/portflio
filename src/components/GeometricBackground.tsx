import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GeometricBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);

        // Camera Setup - Orthographic for Isometric look
        const aspect = window.innerWidth / window.innerHeight;
        const d = 15;
        const camera = new THREE.OrthographicCamera(
            -d * aspect, d * aspect, d, -d, 1, 1000
        );
        camera.position.set(20, 20, 20);
        camera.lookAt(0, 0, 0);

        // Renderer Setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Fog for depth
        scene.fog = new THREE.FogExp2(0x050505, 0.035);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const mainLight = new THREE.PointLight(0x6366f1, 2, 50); // Indigo
        mainLight.position.set(10, 15, 10);
        scene.add(mainLight);

        const fillLight = new THREE.PointLight(0x06b6d4, 1.5, 50); // Cyan
        fillLight.position.set(-15, 5, -10);
        scene.add(fillLight);

        const rimLight = new THREE.PointLight(0xffffff, 0.8, 30);
        rimLight.position.set(0, 20, 0);
        scene.add(rimLight);

        // Materials
        const platformMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.3,
            metalness: 0.8,
        });

        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.4,
            metalness: 0.6,
        });

        const highlightMaterial = new THREE.MeshStandardMaterial({
            color: 0x4f46e5,
            emissive: 0x4f46e5,
            emissiveIntensity: 0.5,
        });

        // Central Platform Group
        const platformGroup = new THREE.Group();

        // Main block
        const platformGeometry = new THREE.BoxGeometry(12, 12, 12);
        const platform = new THREE.Mesh(platformGeometry, platformMaterial);
        platform.position.y = -10;
        platformGroup.add(platform);

        // Concentric frames like in the image
        for (let i = 1; i <= 6; i++) {
            const size = 12 + (i * 0.4);
            const thickness = 0.05;
            const frameGeo = new THREE.BoxGeometry(size, thickness, size);
            const frame = new THREE.Mesh(frameGeo, i % 2 === 0 ? highlightMaterial : cubeMaterial);
            frame.position.y = -4 + (i * 0.08);
            platformGroup.add(frame);
        }

        // Small cubes on the platform like in the image
        const smallCubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const sc1 = new THREE.Mesh(smallCubeGeo, cubeMaterial);
        sc1.position.set(4, -3, 4);
        platformGroup.add(sc1);

        const sc2 = new THREE.Mesh(smallCubeGeo, highlightMaterial);
        sc2.position.set(-3, -3, 5);
        platformGroup.add(sc2);

        scene.add(platformGroup);

        // Floating Cubes
        const cubes: THREE.Mesh[] = [];
        const cubeData: { speed: number; yOffset: number; range: number; rotX: number; rotY: number }[] = [];

        const createCube = (size: number, x: number, y: number, z: number) => {
            const geo = new THREE.BoxGeometry(size, size, size);
            const mesh = new THREE.Mesh(geo, cubeMaterial);
            mesh.position.set(x, y, z);
            scene.add(mesh);
            cubes.push(mesh);
            cubeData.push({
                speed: 0.2 + Math.random() * 0.5,
                yOffset: y,
                range: 1 + Math.random() * 2,
                rotX: (Math.random() - 0.5) * 0.01,
                rotY: (Math.random() - 0.5) * 0.01
            });
        };

        // Generate random cubes
        for (let i = 0; i < 35; i++) {
            const size = 0.4 + Math.random() * 2.5;
            const x = (Math.random() - 0.5) * 40;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 40;

            // Avoid center tight area
            if (Math.abs(x) < 8 && Math.abs(z) < 8) continue;

            const isGlowing = Math.random() > 0.8;
            createCube(size, x, y, isGlowing ? 0 : z); // Flatten some to look like the image

            if (isGlowing) {
                cubes[cubes.length - 1].material = highlightMaterial;
            }
        }

        // Animation Loop
        let frame = 0;
        const animate = () => {
            frame += 0.01;

            cubes.forEach((cube, i) => {
                const data = cubeData[i];
                cube.position.y = data.yOffset + Math.sin(frame * data.speed) * data.range;
                cube.rotation.x += data.rotX;
                cube.rotation.y += data.rotY;
            });

            // Slowly rotate the entire scene for dynamic effect
            scene.rotation.y += 0.001;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Handle Resize
        const handleResize = () => {
            const aspect = window.innerWidth / window.innerHeight;
            camera.left = -d * aspect;
            camera.right = d * aspect;
            camera.top = d;
            camera.bottom = -d;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            scene.clear();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #0a0a0a, #000000)' }}
        />
    );
};

export default GeometricBackground;
