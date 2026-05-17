"use client";

import { useEffect, useState } from "react";

export default function SucessoPage() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count <= 0) {
      window.location.href = "https://rei-do-bafo.vercel.app/";
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <main className="relative min-h-screen text-white flex items-center justify-center px-4">
      <div className="relative z-10 max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mb-6">
          <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl uppercase text-stroke mb-4">
          Tudo certo, apelão.
        </h1>
        <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6">
          Seu acesso ao Rei do Bafo está liberado. Em segundos você é redirecionado para a área de membros.
        </p>
        <p className="text-brasa font-display text-3xl animate-glow">
          {count}
        </p>
        <p className="text-white/50 text-xs mt-6">
          Se a página não carregar sozinha,{" "}
          <a className="underline" href="https://rei-do-bafo.vercel.app/">clique aqui</a>.
        </p>
      </div>
    </main>
  );
}
