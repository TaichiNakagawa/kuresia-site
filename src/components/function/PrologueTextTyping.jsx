import { useEffect, useState } from "react";

export default function PrologueTextTyping({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-lg max-w-2xl md:text-xl text-gray-200 text-center whitespace-pre-line">
      {displayed}
    </p>
  );
}