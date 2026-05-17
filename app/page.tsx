import LoadingBar from "@/components/LoadingBar";
import CountdownStrip from "@/components/CountdownStrip";
import Link from "next/link";

export default function UpsellPage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <LoadingBar durationSeconds={90} />
      <CountdownStrip />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-16">

        {/* Confirmação da compra */}
        <div className="flex items-center justify-center gap-2 text-emerald-400 mb-4 animate-slide-up">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm sm:text-base font-semibold uppercase tracking-wider">
            Compra do Rei do Bafo aprovada!
          </span>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <header className="text-center mb-6 animate-slide-up px-2">
          <p className="text-brasa text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
            ATENÇÃO: Não feche ou atualize esta página!
          </p>
          <h1 className="font-display text-[6.2vw] sm:text-4xl md:text-5xl lg:text-6xl leading-none uppercase text-stroke whitespace-nowrap">
            SEU ACESSO ESTÁ QUASE PRONTO.
          </h1>
          <h2 className="font-display text-[5.5vw] sm:text-3xl md:text-4xl lg:text-5xl leading-none uppercase text-brasa animate-glow mt-2 whitespace-nowrap">
            VEJA ISTO ANTES DE COMEÇAR:
          </h2>
        </header>

        {/* CARD DA OFERTA */}
        <section className="bg-gradient-to-b from-fumaca to-black border-2 border-sangue rounded-2xl p-6 sm:p-8 mb-6 shadow-[0_0_60px_rgba(179,0,0,0.35)] relative overflow-hidden">

          {/* Selo "exclusivo" */}
          <div className="absolute -top-3 -right-3 sm:-right-4 bg-dourado text-black stamp text-xs sm:text-sm font-bold">
            Oportunidade Única
          </div>

          <div className="text-center mb-6">
            <p className="text-dourado font-bold uppercase text-xs tracking-widest mb-2">
              Item Adicional &middot; Aceleração de Resultados
            </p>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-tight">
              O técnico vira figurinha,
              <span className="block text-brasa mt-1"> MAS O PREDADOR RAPELA A RODA INTEIRA.</span>
            </h2>
          </div>

          {/* O argumento central curto e matador */}
          <div className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 space-y-3">
            <p>
              Você comprou a técnica definitiva para virar figurinhas. <strong className="text-white">Mas tem um problema:</strong> se você ganhar todas as rodadas em 2 minutos, <strong className="text-white">ninguém mais vai querer bater contra você</strong>. Aí você deixa de ganhar muito mais figurinhas
            </p>
            <p className="text-brasa font-bold">
              Você precisa dominar a mente do seu oponente.
            </p>
          </div>

          {/* NOME DO PRODUTO */}
          <div className="text-center mb-6 border-y border-sangue/20 py-4">
            <p className="text-white/60 uppercase text-xs tracking-widest mb-1">
              MÉTODO COMPLEMENTAR EXCLUSIVO
            </p>
            <h3 className="font-display text-4xl sm:text-6xl text-brasa uppercase animate-glow leading-none">
              MODO PREDADOR
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base italic">
              Faça eles apostarem a coleção inteira contra você com um sorriso no rosto.
            </p>
          </div>

          {/* O QUE VEM DENTRO (3 BULLETS CURTOS) */}
          <div className="bg-black/60 border border-sangue/40 rounded-xl p-4 sm:p-5 mb-6">
            <ul className="space-y-3 text-white/90 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-brasa font-display text-lg leading-none">&#9656;</span>
                <span>O que dizer antes de jogar a primeira rodada para o oponente apostar o dobro na próxima</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brasa font-display text-lg leading-none">&#9656;</span>
                <span>Quando você deve &quot;perder&quot; uma de propósito para alimentar o ego dele</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brasa font-display text-lg leading-none">&#9656;</span>
                <span>Deixe-o viciado em apostar, sem ele perceber</span>
              </li>
            </ul>
          </div>

          {/* COMPARATIVO DE VALOR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="bg-black/50 border border-white/10 rounded-lg p-3">
              <p className="text-xs uppercase text-white/50 mb-1">Sem o Modo Predador</p>
              <p className="text-white/80 text-xs sm:text-sm">
                Você vira figurinhas, vence 3 rodadas e o cara desiste. Você sai com o suficiente, mas sabendo que poderia ganhar mais.
              </p>
            </div>
            <div className="bg-sangue/25 border border-brasa rounded-lg p-3">
              <p className="text-xs uppercase text-brasa font-bold mb-1">Com o Modo Predador</p>
              <p className="text-white text-xs sm:text-sm">
                Eles imploram por revanche. Você limpa todas as raras e sai com a coleção inteira deles.
              </p>
            </div>
          </div>

          {/* PREÇO */}
          <div className="text-center my-6">
            <p className="text-white/40 line-through text-sm">De R$ 97,00</p>
            <p className="text-white/80 text-xs sm:text-sm mb-1 font-semibold">
              Aproveite AGORA por apenas:
            </p>
            <p className="font-display text-5xl sm:text-6xl text-brasa leading-none animate-glow">
              R$ 29,90
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs mt-2">
              Cobrança única e imediata no mesmo cartão.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="space-y-3">
            <Link
              href="/sucesso"
              className="block w-full text-center bg-gradient-to-b from-brasa to-sangue hover:from-sangue hover:to-sangueDark text-white font-display text-xl sm:text-2xl uppercase py-4 rounded-xl btn-primary-3d animate-pulse-strong transition-all"
            >
              SIM, QUERO O MODO PREDADOR
              <span className="block text-xs font-body normal-case font-normal opacity-90 mt-0.5">
                Adicionar ao meu pedido por apenas R$ 29,90
              </span>
            </Link>

            <Link
              href="/downsell"
              className="block w-full text-center bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
            >
              Não, prefiro abrir mão dessa vantagem e ir sem o Modo Predador
            </Link>
          </div>

          {/* SELOS DE SEGURANÇA */}
          <div className="flex items-center justify-center gap-3 mt-6 text-white/50 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-dourado" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              Acesso imediato
            </span>
            <span>&middot;</span>
            <span>7 dias de garantia</span>
            <span>&middot;</span>
            <span>Pagamento 100% seguro</span>
          </div>
        </section>

        {/* AVISO FINAL */}
        <div className="text-center text-white/40 text-xs leading-relaxed px-2">
          <p>
            Esta oportunidade exclusiva expira assim que você sair desta página. Se recusar agora, o Modo Predador só poderá ser adquirido separadamente pelo preço oficial de R$ 97,00.
          </p>
        </div>
      </div>
    </main>
  );
}
