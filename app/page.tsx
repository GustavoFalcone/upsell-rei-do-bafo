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
            Compra do Rei do Bafo aprovada
          </span>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <header className="text-center mb-8 animate-slide-up">
          <p className="text-brasa text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Espera. Não feche essa página.
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95] uppercase text-stroke">
            Sua entrega está sendo liberada.
            <span className="block text-brasa animate-glow mt-3">
              Enquanto isso, leia isto.
            </span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Você acabou de comprar a técnica para virar figurinha. Beleza. Mas tem um detalhe que ninguém te conta na roda...
          </p>
        </header>

        {/* CARD DA OFERTA */}
        <section className="bg-gradient-to-b from-fumaca to-black border-2 border-sangue rounded-2xl p-6 sm:p-10 mb-8 shadow-[0_0_60px_rgba(179,0,0,0.35)] relative overflow-hidden">

          {/* Selo "exclusivo" */}
          <div className="absolute -top-3 -right-3 sm:-right-4 bg-dourado text-black stamp text-xs sm:text-sm">
            Só nesta tela
          </div>

          <div className="text-center mb-6">
            <p className="text-dourado font-bold uppercase text-xs tracking-widest mb-2">
              Aceleração de Resultado &middot; Item Adicional
            </p>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-tight">
              O técnico que vira figurinha ganha.
              <span className="block text-brasa mt-2">O técnico que faz o outro APOSTAR... rapela.</span>
            </h2>
          </div>

          {/* O argumento central */}
          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed mb-8">
            <p>
              Pensa comigo. O cara que sai de toda roda com o bolso cheio não é só quem bate melhor. É quem faz o outro <strong className="text-white">apostar a figurinha boa</strong> achando que vai vencer fácil.
            </p>
            <p>
              Você pode virar 100 figurinhas num tapa. Mas se o cara da roda só te aposta repetida e some quando você puxa a lateral rara, sua técnica não rendeu nada. Você ganhou o tapa e perdeu a noite.
            </p>
            <p className="text-brasa font-bold text-lg sm:text-xl">
              É aí que entra o lado que o álbum não te conta: a cabeça do oponente.
            </p>
          </div>

          {/* DIVISOR */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-sangue/40" />
            <span className="text-dourado font-display text-xl uppercase">A oferta</span>
            <div className="flex-1 h-px bg-sangue/40" />
          </div>

          {/* NOME DO PRODUTO */}
          <div className="text-center mb-6">
            <p className="text-white/60 uppercase text-xs tracking-widest mb-2">
              Método complementar do Rei do Bafo
            </p>
            <h3 className="font-display text-5xl sm:text-7xl text-brasa uppercase animate-glow leading-none">
              Modo Predador
            </h3>
            <p className="text-white/80 mt-3 text-sm sm:text-base italic">
              Como fazer o outro apostar contra você, repetidamente, achando que está te dominando.
            </p>
          </div>

          {/* O QUE VEM DENTRO */}
          <div className="bg-black/60 border border-sangue/40 rounded-xl p-5 sm:p-6 mb-6">
            <p className="font-bold text-dourado uppercase text-sm tracking-wider mb-4">
              O que você descobre aqui dentro:
            </p>
            <ul className="space-y-3 text-white/90 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>As 4 frases curtas que você solta ANTES do tapa que fazem o cara dobrar a aposta sem perceber. Funciona inclusive com quem se acha o apelão da rua.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>A leitura de mão que mostra se o oponente está com medo, blefando ou prestes a desistir. Você vê isso em 2 segundos, antes de bater.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>A jogada da figurinha-isca. Você &quot;perde&quot; uma de propósito, e nas próximas 3 rodadas o cara aposta a coleção inteira contra você.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>Como evitar a fuga. Aquele momento em que o cara percebe que está perdendo e tenta sair da roda &mdash; você vai aprender a prendê-lo até o último pacote.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>Linguagem corporal que intimida sem agredir. A diferença entre o cara que &quot;todo mundo respeita&quot; e o cara que sempre é desafiado.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brasa font-display text-xl leading-none">&#9656;</span>
                <span>O gatilho do ego masculino: a brecha psicológica que faz qualquer competidor querer revanche, mesmo já tendo perdido a figurinha rara.</span>
              </li>
            </ul>
          </div>

          {/* DEIXAR DE GANHAR */}
          <div className="bg-sangue/10 border-l-4 border-brasa pl-5 py-4 mb-6">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              <strong className="text-brasa">Pensa direito.</strong> Você comprou a técnica de virar figurinha. Vai sair ganhando, beleza. Mas todo cara que aprende a técnica chega na roda e vence 1, 2, 3 partidas, e depois ninguém quer mais bater contra ele. A roda fecha. O lucro trava.
            </p>
            <p className="text-white mt-3 font-bold text-sm sm:text-base">
              O Modo Predador resolve isso. Faz o oponente continuar apostando contra você por horas, com sorriso no rosto, achando que a próxima rodada é dele.
            </p>
          </div>

          {/* COMPARATIVO DE VALOR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/50 border border-white/10 rounded-lg p-4">
              <p className="text-xs uppercase text-white/50 mb-1">Sem o Modo Predador</p>
              <p className="text-white/90 text-sm">
                Você vira figurinha. O cara some na 3ª rodada. Sai com 10 figurinhas no bolso. A roda esquece de te chamar amanhã.
              </p>
            </div>
            <div className="bg-sangue/20 border border-brasa rounded-lg p-4">
              <p className="text-xs uppercase text-brasa font-bold mb-1">Com o Modo Predador</p>
              <p className="text-white text-sm">
                Você vira figurinha E faz o cara apostar de novo, e de novo. Sai com a coleção. Volta amanhã porque ele vai querer revanche.
              </p>
            </div>
          </div>

          {/* PREÇO */}
          <div className="text-center my-8">
            <p className="text-white/60 line-through text-base">De R$ 97,00</p>
            <p className="text-white/80 text-sm sm:text-base mb-1">
              Acréscimo único no seu pedido:
            </p>
            <p className="font-display text-6xl sm:text-7xl text-brasa leading-none animate-glow">
              R$ 29,90
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              à vista &middot; cobrado no mesmo cartão da compra anterior
            </p>
          </div>

          {/* BOTÕES */}
          <div className="space-y-4">
            <Link
              href="/sucesso"
              className="block w-full text-center bg-gradient-to-b from-brasa to-sangue hover:from-sangue hover:to-sangueDark text-white font-display text-2xl sm:text-3xl uppercase py-5 sm:py-6 rounded-xl btn-primary-3d animate-pulse-strong transition-all"
            >
              SIM, QUERO O MODO PREDADOR
              <span className="block text-sm sm:text-base font-body normal-case font-normal opacity-90 mt-1">
                Adicionar por R$ 29,90 e continuar
              </span>
            </Link>

            <Link
              href="/downsell"
              className="block w-full text-center text-white/50 hover:text-white/80 underline underline-offset-4 text-sm sm:text-base py-3 transition-colors"
            >
              Não, prefiro ir direto para o Rei do Bafo sem essa vantagem
            </Link>
          </div>

          {/* SELOS DE SEGURANÇA */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-white/60 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1l3 6 6 .9-4.5 4.4 1 6.7L10 16l-5.5 3 1-6.7L1 7.9 7 7l3-6z" clipRule="evenodd" /></svg>
              Pagamento seguro
            </span>
            <span>&middot;</span>
            <span>7 dias de garantia</span>
            <span>&middot;</span>
            <span>Acesso vitalício</span>
          </div>
        </section>

        {/* PROVA SOCIAL CURTA */}
        <section className="mb-8">
          <p className="text-center text-white/60 uppercase text-xs tracking-widest mb-4">
            Quem já levou o Modo Predador
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-fumaca border border-white/10 rounded-lg p-4">
              <p className="text-white/90 text-sm italic mb-2">
                &quot;Achei que era papo de coach. Comprei porque tava barato. Primeira roda no domingo, o cara que sempre me zoava apostou 12 figurinhas de uma vez. Saí com 9 raras.&quot;
              </p>
              <p className="text-brasa text-xs font-bold">— Matheus, 24</p>
            </div>
            <div className="bg-fumaca border border-white/10 rounded-lg p-4">
              <p className="text-white/90 text-sm italic mb-2">
                &quot;A parte da figurinha-isca é cirúrgica. O cara perde uma, acha que tá comendo solto, e quando vê tá sem pacote nenhum. Já apliquei 3 vezes.&quot;
              </p>
              <p className="text-brasa text-xs font-bold">— Renan, 28</p>
            </div>
          </div>
        </section>

        {/* AVISO FINAL */}
        <div className="text-center text-white/50 text-xs sm:text-sm leading-relaxed px-2">
          <p>
            Esta oferta aparece uma única vez, agora, na liberação do seu acesso. Se você fechar essa página ou recusar, o Modo Predador volta para o valor cheio e some do seu pedido.
          </p>
        </div>
      </div>
    </main>
  );
}
