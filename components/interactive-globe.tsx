"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, MapPin, Radio, Compass, Sparkles } from "lucide-react";

interface CityNode {
  name: string;
  country: string;
  lat: number;
  lon: number;
  isHome?: boolean;
}

const CITIES: CityNode[] = [
  { name: "Nairobi", country: "Kenya (Base Hub)", lat: -1.29, lon: 36.82, isHome: true },
  { name: "London", country: "United Kingdom", lat: 51.5, lon: -0.12 },
  { name: "San Francisco", country: "United States", lat: 37.77, lon: -122.41 },
  { name: "New York", country: "United States", lat: 40.71, lon: -74.0 },
  { name: "Berlin", country: "Germany", lat: 52.52, lon: 13.4 },
  { name: "Tokyo", country: "Japan", lat: 35.67, lon: 139.65 },
  { name: "Singapore", country: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Sydney", country: "Australia", lat: -33.86, lon: 151.2 }
];

// Coastline/Continent sample points (lat, lon) approximating global landmasses
const LAND_POINTS: [number, number][] = [
  // Africa
  [-1.29, 36.82], [0.34, 32.58], [-4.04, 39.66], [9.02, 38.74], [-15.38, 28.32],
  [-26.2, 28.04], [-33.92, 18.42], [6.52, 3.37], [5.6, -0.18], [14.71, -17.46],
  [12.63, -8.0], [30.04, 31.23], [36.75, 3.05], [33.57, -7.58], [15.32, 38.92],
  [-18.91, 47.53], [4.05, 9.7], [-1.94, 29.87], [-8.83, 13.23], [24.77, 46.73],
  // Europe
  [51.5, -0.12], [48.85, 2.35], [52.52, 13.4], [40.41, -3.7], [41.9, 12.49],
  [59.32, 18.06], [60.16, 24.93], [52.36, 4.9], [50.85, 4.35], [55.67, 12.56],
  [47.37, 8.54], [48.2, 16.37], [50.07, 14.43], [52.22, 21.01], [37.98, 23.72],
  // North America
  [37.77, -122.41], [34.05, -118.24], [47.6, -122.33], [40.71, -74.0],
  [42.36, -71.05], [41.87, -87.62], [29.76, -95.36], [25.76, -80.19],
  [45.5, -73.56], [43.65, -79.38], [49.28, -123.12], [19.43, -99.13],
  [32.77, -96.79], [39.73, -104.99], [61.21, -149.9], [21.3, -157.85],
  // South America
  [-23.55, -46.63], [-22.9, -43.17], [-34.6, -58.38], [-33.44, -70.66],
  [-12.04, -77.04], [4.71, -74.07], [10.48, -66.9], [-0.18, -78.46],
  [-16.5, -68.15], [-25.26, -57.57], [-3.11, -60.02], [-15.79, -47.88],
  // Asia
  [35.67, 139.65], [37.56, 126.97], [39.9, 116.4], [31.23, 121.47],
  [22.31, 114.16], [1.35, 103.82], [13.75, 100.5], [10.82, 106.62],
  [19.07, 72.87], [28.61, 77.2], [12.97, 77.59], [25.2, 55.27],
  [24.71, 46.67], [32.08, 34.78], [41.0, 28.97], [14.59, 120.98],
  [-6.2, 106.84], [3.13, 101.68], [55.75, 37.61], [43.11, 131.87],
  // Australia & Pacific
  [-33.86, 151.2], [-37.81, 144.96], [-27.47, 153.02], [-31.95, 115.86],
  [-36.84, 174.76], [-41.28, 174.77]
];

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredCity, setHoveredCity] = useState<CityNode | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Rotation angles (radians)
  const anglesRef = useRef({ alpha: -0.6, beta: 0.15 });
  const velocityRef = useRef({ alpha: 0.003, beta: 0 });
  const dragStartRef = useRef({ x: 0, y: 0, alpha: 0, beta: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = Math.min(width, 360));
    let radius = Math.min(width, height) * 0.38;
    const distance = radius * 3.2;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 400;
      height = canvas.height = Math.min(width, 360);
      radius = Math.min(width, height) * 0.38;
    };
    window.addEventListener("resize", handleResize);

    const project3D = (latDeg: number, lonDeg: number, alpha: number, beta: number) => {
      const lat = (latDeg * Math.PI) / 180;
      const lon = (lonDeg * Math.PI) / 180;

      // 3D Cartesian coordinates
      const x0 = radius * Math.cos(lat) * Math.sin(lon);
      const y0 = radius * Math.sin(lat);
      const z0 = radius * Math.cos(lat) * Math.cos(lon);

      // Rotate around Y axis (alpha)
      const x1 = x0 * Math.cos(alpha) + z0 * Math.sin(alpha);
      const z1 = -x0 * Math.sin(alpha) + z0 * Math.cos(alpha);

      // Rotate around X axis (beta)
      const y2 = y0 * Math.cos(beta) - z1 * Math.sin(beta);
      const z2 = y0 * Math.sin(beta) + z1 * Math.cos(beta);

      // Perspective projection
      const scale = distance / (distance + z2);
      const cx = width / 2;
      const cy = height / 2;
      const x = cx + x1 * scale;
      const y = cy - y2 * scale;

      return { x, y, z: z2, scale, visible: z2 > -radius * 0.25 };
    };

    let tick = 0;

    const render = () => {
      tick++;
      // Auto-rotation when not dragging
      if (!isDragging) {
        anglesRef.current.alpha += velocityRef.current.alpha;
        anglesRef.current.beta += velocityRef.current.beta;
        velocityRef.current.beta *= 0.95; // damp pitch
      }

      const { alpha, beta } = anglesRef.current;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere Glow & Outer Rim
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.25);
      glowGrad.addColorStop(0, "rgba(99, 102, 241, 0.12)");
      glowGrad.addColorStop(0.6, "rgba(6, 182, 212, 0.08)");
      glowGrad.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Globe sphere background
      const sphereGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      sphereGrad.addColorStop(0, "rgba(30, 41, 59, 0.7)");
      sphereGrad.addColorStop(0.8, "rgba(15, 23, 42, 0.85)");
      sphereGrad.addColorStop(1, "rgba(2, 6, 23, 0.95)");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Rim edge stroke
      ctx.strokeStyle = "rgba(99, 102, 241, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 2. Latitude and Longitude Wireframe Rings
      ctx.lineWidth = 0.75;
      [-40, -20, 0, 20, 40].forEach((lat) => {
        ctx.strokeStyle = lat === 0 ? "rgba(6, 182, 212, 0.25)" : "rgba(148, 163, 184, 0.1)";
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 10) {
          const p = project3D(lat, lon, alpha, beta);
          if (p.visible) {
            if (first) {
              ctx.moveTo(p.x, p.y);
              first = false;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      });

      // 3. Render Landmass Points
      LAND_POINTS.forEach(([lat, lon]) => {
        const p = project3D(lat, lon, alpha, beta);
        if (p.visible) {
          const depthAlpha = Math.max(0.15, (p.z + radius) / (radius * 2));
          ctx.fillStyle = `rgba(148, 163, 184, ${depthAlpha * 0.7})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8 * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Render Connection Arcs from Nairobi to Global Hubs
      const nairobiNode = CITIES.find((c) => c.isHome)!;
      const nairobiP = project3D(nairobiNode.lat, nairobiNode.lon, alpha, beta);

      CITIES.filter((c) => !c.isHome).forEach((hub) => {
        const hubP = project3D(hub.lat, hub.lon, alpha, beta);
        if (nairobiP.visible || hubP.visible) {
          // Compute bezier arc control point elevated above the sphere
          const midLat = (nairobiNode.lat + hub.lat) / 2;
          const midLon = (nairobiNode.lon + hub.lon) / 2;
          const arcP = project3D(midLat, midLon, alpha, beta);

          const depthRatio = Math.max(0.15, ((nairobiP.z + hubP.z) / 2 + radius) / (radius * 2));
          ctx.strokeStyle = `rgba(99, 102, 241, ${depthRatio * 0.6})`;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([3, 4]);

          ctx.beginPath();
          ctx.moveTo(nairobiP.x, nairobiP.y);
          // Curve elevation
          const ctrlX = arcP.x + (arcP.x - cx) * 0.3;
          const ctrlY = arcP.y + (arcP.y - cy) * 0.3;
          ctx.quadraticCurveTo(ctrlX, ctrlY, hubP.x, hubP.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 5. Render Cities & Beacons
      CITIES.forEach((city) => {
        const p = project3D(city.lat, city.lon, alpha, beta);
        if (p.visible) {
          const depthRatio = Math.max(0.2, (p.z + radius) / (radius * 2));

          if (city.isHome) {
            // Nairobi (Home Base) Pulsing Beacon
            const pulse = (Math.sin(tick * 0.08) + 1) / 2;
            ctx.fillStyle = "rgba(6, 182, 212, 0.3)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, (8 + pulse * 6) * p.scale, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#22d3ee";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4.5 * p.scale, 0, Math.PI * 2);
            ctx.fill();

            // Label for Nairobi
            ctx.font = "bold 11px system-ui, sans-serif";
            ctx.fillStyle = "#38bdf8";
            ctx.fillText("Nairobi (Hub)", p.x + 8, p.y - 6);
          } else {
            // Global Hubs
            ctx.fillStyle = `rgba(168, 85, 247, ${depthRatio})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
            ctx.fill();

            if (p.z > radius * 0.15) {
              ctx.font = "10px system-ui, sans-serif";
              ctx.fillStyle = `rgba(203, 213, 225, ${depthRatio * 0.9})`;
              ctx.fillText(city.name, p.x + 6, p.y + 3);
            }
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isDragging]);

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      alpha: anglesRef.current.alpha,
      beta: anglesRef.current.beta
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    anglesRef.current.alpha = dragStartRef.current.alpha + dx * 0.008;
    anglesRef.current.beta = Math.max(-0.8, Math.min(0.8, dragStartRef.current.beta - dy * 0.008));
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {/* 3D Canvas */}
      <div
        className="relative w-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <canvas ref={canvasRef} className="max-w-full block" />

        {/* Interaction Hint Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 text-[10px] font-mono text-cyan-400 pointer-events-none">
          <Compass className="h-3 w-3 animate-spin" />
          <span>Drag 3D World to Rotate</span>
        </div>
      </div>

      {/* Global Connectivity Banner */}
      <div className="w-full border-t border-border-subtle bg-slate-900/40 px-4 py-2.5 flex flex-wrap items-center justify-between text-[11px] text-foreground-muted gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">Base: Nairobi, Kenya</span>
          <span className="text-foreground-muted/60">• EAT (UTC+3)</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-primary">
          <Radio className="h-3 w-3 text-cyan-400" />
          <span>Global Remote Availability</span>
        </div>
      </div>
    </div>
  );
}
