import Link from "next/link";

export const metadata = { title: "Espera... | Rei do Bafo" };

export default function DownsellPage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden flex items-center">
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Aviso piscando */}
        <div className="text-center mb-6">
          <span className="inline-block bg-dourado text-black font-bold text-xs uppercase tracking-widest px-3 py-1 rounded animate-pulse">
            Última chance de garantir o desconto
          </span>
        </div>

        {/* HEADLINE */}
        <header className="text-center mb-6 animate-slide-up px-2">
          <h1 className="font-display text-[6.5vw] sm:text-4xl md:text-5xl lg:text-6xl leading-none uppercase text-stroke whitespace-nowrap">
            ESPERA.
          </h1>
          <h2 className="font-display text-[5vw] sm:text-3xl md:text-4xl lg:text-5xl leading-none uppercase text-brasa animate-glow mt-2 whitespace-nowrap">
            VOCÊ VAI DEIXAR PASSAR ISSO?
          </h2>
        </header>

        {/* CARD DA OFERTA REDUZIDA */}
        <section className="bg-gradient-to-b from-fumaca to-black border-2 border-dourado rounded-2xl p-6 sm:p-8 mb-6 shadow-[0_0_60px_rgba(245,197,24,0.25)] relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dourado text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap">
            R$ 10 de Desconto Liberado
          </div>

          <div className="text-center mt-4 mb-6">
            <p className="text-white/70 uppercase text-xs tracking-widest mb-1">
              MESMO CONTEÚDO E ACESSO VITALÍCIO
            </p>
            <h3 className="font-display text-4xl sm:text-6xl text-brasa uppercase animate-glow leading-none">
              MODO PREDADOR
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base italic">
              Se o preço era o obstáculo, agora não é mais.
            </p>
          </div>

          <div className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 space-y-3">
            <p>
              Eu sei que você já investiu no método principal. Por isso, apenas nesta tela, liberei um <strong className="text-white">desconto único de R$ 10</strong>. 
            </p>
            <p className="text-dourado font-bold">
              Leve o Modo Predador completo por apenas R$ 19,90.
            </p>
          </div>

          {/* LISTA RESUMIDA (3 BULLETS CURTOS E IGUAIS À PAGE PRINCIPAL) */}
          <div className="bg-black/60 border border-dourado/30 rounded-xl p-4 sm:p-5 mb-6">
            <p className="font-bold text-dourado uppercase text-xs tracking-widest mb-3">
              O que você vai aprender:
            </p>
            <ul className="space-y-3 text-white/85 text-xs sm:text-sm">
              <li className="flex gap-2">
                <span className="text-brasa">&#9656;</span> 
                <span>O que dizer antes de jogar a primeira rodada para o oponente apostar o dobro na próxima</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brasa">&#9656;</span> 
                <span>Quando você deve &quot;perder&quot; uma de propósito para alimentar o ego dele</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brasa">&#9656;</span> 
                <span>Deixe-o viciado em apostar, sem ele perceber</span>
              </li>
            </ul>
          </div>

          {/* PREÇO */}
          <div className="text-center my-6">
            <p className="text-white/40 line-through text-sm">R$ 29,90</p>
            <p className="text-white/80 text-xs sm:text-sm mb-1 font-semibold">Preço final exclusivo:</p>
            <p className="font-display text-5xl sm:text-6xl text-dourado leading-none animate-glow">
              R$ 19,90
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs mt-2">
              Cobrança única e imediata no mesmo cartão.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="space-y-3">
            <Link
              href="https://zuckpay.com.br/checkout/o-rei-do-bafo-modo-predador-c-desconto"
              className="block w-full text-center bg-gradient-to-b from-dourado to-yellow-600 hover:from-yellow-400 hover:to-dourado text-black font-display text-xl sm:text-2xl uppercase py-4 rounded-xl btn-primary-3d animate-pulse-strong transition-all"
            >
              OK, ME DÁ POR R$ 19,90
              <span className="block text-xs font-body normal-case font-normal opacity-85 mt-0.5">
                Adicionar ao meu pedido e continuar
              </span>
            </Link>

            <Link
              href="/sucesso"
              className="block w-full text-center bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
            >
              Não, prefiro abrir mão do desconto e ir sem essa vantagem
            </Link>
          </div>
        </section>

        {/* RODAPÉ DE SEGURANÇA */}
        <p className="text-center text-white/40 text-xs leading-relaxed px-2">
          Garantia incondicional de 7 dias &middot; Compra 100% segura
        </p>
      </div>
    </main>
  );
}
