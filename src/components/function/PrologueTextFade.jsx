import { useEffect, useState } from "react";

export default function PrologueTextFade({ lines }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);

    const interval = setInterval(() => {
      setVisibleCount((v) => {
        if (v >= lines.length) {
          clearInterval(interval);
          return v;
        }
        return v + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className="space-y-4">
      {lines.map((line, i) => (
        <p
          key={i}
          className={`text-2xl md:text-3xl transition-opacity duration-1000 ${
            i < visibleCount ? "opacity-100" : "opacity-0"
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
