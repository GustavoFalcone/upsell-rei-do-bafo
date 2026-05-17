import Link from "next/link";

export const metadata = { title: "Espera... | Rei do Bafo" };

export default function DownsellPage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden flex items-center">
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Aviso piscando */}
        <div className="text-center mb-6">
          <span className="inline-block bg-dourado text-black font-bold text-xs uppercase tracking-widest px-3 py-1 rounded animate-pulse">
            Última chance nesta janela
          </span>
        </div>

        {/* HEADLINE */}
        <header className="text-center mb-8 animate-slide-up">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95] uppercase text-stroke">
            Espera.
            <span className="block text-brasa animate-glow mt-2">
              Você vai deixar passar isso mesmo?
            </span>
          </h1>
          <p className="text-white/85 text-base sm:text-lg mt-5 leading-relaxed">
            Antes de você fechar essa página, segura um segundo. Eu sei o que você pensou: &quot;já gastei R$ 19,90, deixa pra outro mês&quot;. Mas a verdade é que sem o Modo Predador, a roda vai parar de te chamar depois das primeiras vitórias.
          </p>
        </header>

        {/* CARD DA OFERTA REDUZIDA */}
        <section className="bg-gradient-to-b from-fumaca to-black border-2 border-dourado rounded-2xl p-6 sm:p-9 mb-8 shadow-[0_0_60px_rgba(245,197,24,0.25)] relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dourado text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap">
            R$ 10 de desconto único
          </div>

          <div className="text-center mt-4 mb-6">
            <p className="text-white/70 uppercase text-xs tracking-widest mb-2">
              Mesmo método, mesmo acesso, mesmo bônus
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-brasa uppercase animate-glow leading-none">
              Modo Predador
            </h2>
            <p className="text-white/80 mt-3 text-sm sm:text-base italic">
              Como fazer o oponente apostar mais contra você, repetidamente.
            </p>
          </div>

          <div className="space-y-4 text-white/90 text-base leading-relaxed mb-6">
            <p>
              Se o preço foi o motivo, resolvi. Só nesta tela, o Modo Predador sai por <strong className="text-brasa">R$ 19,90</strong>. Mesmo conteúdo, mesmo acesso vitalício, mesmo suporte 24h da compra original.
            </p>
            <p>
              Pensa rápido: a sua próxima roda é onde? Quarta? Sexta? Você quer chegar lá sabendo só virar figurinha, ou sabendo virar e ainda fazer o cara apostar a coleção dele toda?
            </p>
            <p className="text-white font-bold">
              Toda figurinha rara que o seu oponente segurar amanhã é figurinha que você poderia ter levado.
            </p>
          </div>

          {/* LISTA RESUMIDA */}
          <div className="bg-black/60 border border-dourado/30 rounded-xl p-5 mb-6">
            <p className="font-bold text-dourado uppercase text-xs tracking-widest mb-3">
              Continua tudo incluso:
            </p>
            <ul className="space-y-2 text-white/85 text-sm">
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> As 4 frases que fazem o oponente dobrar a aposta</li>
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> A leitura de mão (medo, blefe, desistência)</li>
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> A jogada da figurinha-isca</li>
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> Como prender o oponente na roda</li>
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> Linguagem corporal de domínio</li>
              <li className="flex gap-2"><span className="text-brasa">&#9656;</span> O gatilho da revanche</li>
            </ul>
          </div>

          {/* PREÇO */}
          <div className="text-center my-7">
            <p className="text-white/40 line-through text-base">R$ 29,90</p>
            <p className="text-white/80 text-sm mb-1">Agora, só nesta tela:</p>
            <p className="font-display text-6xl sm:text-7xl text-dourado leading-none animate-glow">
              R$ 19,90
            </p>
            <p className="text-white/60 text-xs mt-2">à vista &middot; mesmo cartão</p>
          </div>

          {/* BOTÕES */}
          <div className="space-y-3">
            <Link
              href="/sucesso"
              className="block w-full text-center bg-gradient-to-b from-dourado to-yellow-600 hover:from-yellow-400 hover:to-dourado text-black font-display text-xl sm:text-2xl uppercase py-5 rounded-xl btn-primary-3d animate-pulse-strong transition-all"
            >
              OK, ME DÁ POR R$ 19,90
              <span className="block text-xs sm:text-sm font-body normal-case font-normal opacity-80 mt-1">
                Adicionar e liberar acesso ao Rei do Bafo
              </span>
            </Link>

            <Link
              href="/sucesso"
              className="block w-full text-center text-white/45 hover:text-white/70 underline underline-offset-4 text-sm py-3 transition-colors"
            >
              Recuso e vou jogar sem essa vantagem
            </Link>
          </div>
        </section>

        {/* P.S. */}
        <div className="bg-black/40 border-l-4 border-brasa pl-5 py-4 mb-6">
          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            <strong className="text-brasa">P.S.</strong> Se você fechar essa página, o Modo Predador volta para R$ 97,00 no nosso site e não entra mais no seu pedido. Não é estratégia de pressão, é só como o sistema foi configurado.
          </p>
        </div>

        <p className="text-center text-white/50 text-xs">
          Pagamento seguro &middot; 7 dias de garantia incondicional
        </p>
      </div>
    </main>
  );
}
