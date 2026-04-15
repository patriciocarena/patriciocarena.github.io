import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "square" | "triangle" | "cross";
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  rotation: number;
}

const colors = [
  "var(--neo-pink-rgb, 350 90% 65%)",
  "var(--neo-blue-rgb, 210 100% 56%)",
  "var(--neo-yellow-rgb, 48 100% 60%)",
  "var(--neo-green-rgb, 145 65% 45%)",
  "var(--neo-orange-rgb, 25 95% 58%)",
  "var(--neo-purple-rgb, 270 70% 58%)",
];

const colorClasses = [
  "text-neo-pink",
  "text-neo-blue",
  "text-neo-yellow",
  "text-neo-green",
  "text-neo-orange",
  "text-neo-purple",
];

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      type: (["circle", "square", "triangle", "cross"] as const)[i % 4],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 28,
      color: colorClasses[i % colorClasses.length],
      duration: 20 + Math.random() * 30,
      delay: Math.random() * -30,
      rotation: Math.random() * 360,
    }));
    setShapes(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((s) => (
        <div
          key={s.id}
          className={`absolute opacity-[0.07] dark:opacity-[0.05] ${s.color}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `float-drift ${s.duration}s ease-in-out ${s.delay}s infinite`,
            transform: `rotate(${s.rotation}deg)`,
          }}
        >
          {s.type === "circle" && (
            <div className="w-full h-full rounded-full border-[3px] border-current" />
          )}
          {s.type === "square" && (
            <div className="w-full h-full border-[3px] border-current" />
          )}
          {s.type === "triangle" && (
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <polygon
                points="20,4 36,36 4,36"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          )}
          {s.type === "cross" && (
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="3" />
              <line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="3" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
