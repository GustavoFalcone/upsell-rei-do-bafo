"use client";

import { useEffect, useState } from "react";

export default function CountdownStrip() {
  const [secs, setSecs] = useState(15 * 60); // 15 min

  useEffect(() => {
    const t = setInterval(() => {
      setSecs((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");

  return (
    <div className="bg-sangue text-white text-center py-2 px-4 font-bold text-sm sm:text-base uppercase tracking-wide animate-pulse">
      Oferta única que some quando esta página fechar &middot; {m}:{s}
    </div>
  );
}
