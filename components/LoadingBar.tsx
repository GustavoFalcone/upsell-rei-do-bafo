"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Duração total em segundos até "concluir" o processamento. */
  durationSeconds?: number;
};

const FAKE_STEPS = [
  "Confirmando pagamento na operadora...",
  "Validando seu CPF junto ao gateway...",
  "Gerando seu acesso ao Rei do Bafo...",
  "Liberando módulo 1 - Mão de Vácuo...",
  "Liberando módulo 2 - Ângulo Apelão...",
  "Configurando suporte 24h no seu perfil...",
  "Sincronizando com o servidor de entrega...",
  "Quase lá... preparando seu login...",
];

export default function LoadingBar({ durationSeconds = 90 }: Props) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const totalMs = durationSeconds * 1000;

    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      // curva ease-out: começa rápido, desacelera no final pra dar tempo de ler
      const linear = Math.min(elapsed / totalMs, 1);
      const eased = 1 - Math.pow(1 - linear, 1.8);
      const pct = Math.min(eased * 97, 97); // trava em 97% até decisão
      setProgress(pct);

      const newStep = Math.min(
        FAKE_STEPS.length - 1,
        Math.floor((pct / 97) * FAKE_STEPS.length)
      );
      setStepIndex(newStep);

      if (linear >= 1) clearInterval(tick);
    }, 120);

    return () => clearInterval(tick);
  }, [durationSeconds]);

  return (
    <div className="w-full bg-fumaca/80 backdrop-blur border-b-2 border-sangue/40 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brasa opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brasa"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider">
              Processando seu pedido
            </span>
          </div>
          <span className="text-xs sm:text-sm font-mono font-bold text-brasa">
            {progress.toFixed(0)}%
          </span>
        </div>

        <div className="h-3 w-full bg-black/60 rounded-full overflow-hidden border border-sangue/30">
          <div
            className="h-full bg-gradient-to-r from-sangueDark via-brasa to-sangue transition-all duration-200 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.18)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.18)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-pulse" />
          </div>
        </div>

        <p className="text-[11px] sm:text-xs text-white/60 mt-2 font-mono">
          <span className="text-brasa">&gt;</span> {FAKE_STEPS[stepIndex]}
          <span className="animate-blink">_</span>
        </p>
      </div>
    </div>
  );
}
