import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Circle,
  Feather,
  LockKeyhole,
  Mail,
  Menu,
  Moon,
  Quote,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const checkoutUrl = "https://go.hotmart.com/U107490929E?dp=1";

const themes = [
  {
    number: "01",
    title: "A Bíblia é inerrante?",
    body: "Uma reflexão sobre linguagem, contexto, expectativas e o que realmente afirmamos quando usamos essa palavra.",
  },
  {
    number: "02",
    title: "Quem foram os canalhas da Bíblia?",
    body: "Um convite para olhar personagens complexos sem reduzir narrativas inteiras a rótulos simples.",
  },
  {
    number: "03",
    title: "O que aconteceu na Santa Ceia?",
    body: "Uma releitura que desacelera a narrativa e observa seus elementos, camadas e tradições.",
  },
  {
    number: "04",
    title: "Os três Édens",
    body: "Imagens de origem, paraíso, perda e restauração — e os sentidos que atravessam esses temas.",
  },
  {
    number: "05",
    title: "Jesus era coach?",
    body: "Uma pergunta provocadora sobre liderança, transformação, ensino e os limites das analogias atuais.",
  },
  {
    number: "06",
    title: "A graça é uma pessoa?",
    body: "As camadas de um conceito central, para além das frases que repetimos sem perceber.",
  },
];

const faqs = [
  {
    question: "O que é o produto?",
    answer:
      "É um e-book digital de reflexão sobre temas bíblicos, personagens, conceitos, tradições e interpretações.",
  },
  {
    question: "Preciso ser especialista em Bíblia?",
    answer:
      "Não. A leitura foi desenvolvida para pessoas interessadas em compreender melhor os temas, independentemente de formação teológica.",
  },
  {
    question: "O e-book apresenta uma única interpretação?",
    answer:
      "A proposta é apresentar perguntas e perspectivas para estimular a reflexão. Você é convidado a avaliar o conteúdo com autonomia e respeito.",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "O acesso ocorre conforme a confirmação da compra e as regras da plataforma. Após a aprovação, verifique o e-mail usado no pedido e a área de acesso indicada.",
  },
  {
    question: "Posso ler pelo celular?",
    answer:
      "Sim, desde que o formato disponibilizado seja compatível com seu aparelho ou aplicativo de leitura.",
  },
  {
    question: "A compra é segura?",
    answer:
      "O processamento é realizado pela Hotmart, de acordo com os recursos e condições apresentados no checkout.",
  },
  {
    question: "Como falar com o suporte?",
    answer:
      "Envie sua dúvida para suporte@seudominio.com ou utilize o canal de atendimento informado após a compra.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Consulte o prazo e as condições de garantia apresentados na página de checkout antes de concluir a compra.",
  },
];

function scrollToOffer() {
  document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#topo" className="brand-mark" aria-label="A Bíblia que Você Não Leu - início">
          <span className="brand-symbol"><Circle size={16} strokeWidth={1.5} /></span>
          <span>A Bíblia que<br /><em>Você Não Leu</em></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <a href="#proposta" onClick={() => setMenuOpen(false)}>A proposta</a>
          <a href="#conteudo" onClick={() => setMenuOpen(false)}>O conteúdo</a>
          <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </nav>
        <button className="header-cta" onClick={scrollToOffer}>
          Quero conhecer <ArrowUpRight size={16} />
        </button>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="topo">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner page-width">
          <div className="hero-copy reveal-up">
            <p className="eyebrow light"><span className="eyebrow-line" /> Uma nova perspectiva sobre a Palavra de Deus</p>
            <h1>Talvez você conheça a Bíblia.<br /><em>Mas ainda não a tenha lido assim.</em></h1>
            <p className="hero-lede">Um e-book para quem deseja voltar às Escrituras com curiosidade, atenção e liberdade para refletir.</p>
            <button className="button button-accent" onClick={scrollToOffer}>Quero conhecer o e-book <ArrowUpRight size={17} /></button>
            <p className="micro-note"><LockKeyhole size={13} /> Acesso digital após a confirmação da compra.</p>
          </div>
          <div className="hero-side-note"><span>LEITURA · CONTEXTO · FÉ</span><span>06 / 2026</span></div>
        </div>
        <div className="hero-bottom page-width">
          <span>Role para começar</span><ArrowDownRight size={18} />
          <span className="hero-index">01 <i>/</i> 05</span>
        </div>
      </section>

      <section className="intro section-paper" id="proposta">
        <div className="page-width intro-grid">
          <div className="section-label"><span>02</span><span className="label-rule" /><span>Curiosidade</span></div>
          <div className="intro-main">
            <p className="eyebrow">Você acha que já conhece a Bíblia?</p>
            <h2>Ou conhece apenas as interpretações que recebeu sobre ela?</h2>
            <div className="intro-columns">
              <p>A Bíblia é um dos livros mais lidos, comentados e interpretados da história. Ainda assim, é possível ler suas palavras sem perceber os contextos, os pressupostos e as tradições que influenciam nossa compreensão.</p>
              <p>Isso não é um convite para abandonar sua fé.<br /><strong>É um convite para ler com mais atenção.</strong></p>
            </div>
            <div className="question-strip">
              <Quote size={24} strokeWidth={1.2} />
              <p>Porque uma coisa é saber o que alguém ensinou sobre um texto. Outra é voltar ao texto, fazer perguntas honestas e considerar o que pode ter sido deixado de lado.</p>
            </div>
            <button className="text-link" onClick={scrollToOffer}>Descobrir uma nova perspectiva <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </section>

      <section className="tension section-ink">
        <div className="page-width tension-grid">
          <div className="tension-stamp"><Sparkles size={17} /><span>UMA LEITURA<br />SEM RESPOSTAS<br />AUTOMÁTICAS</span></div>
          <div className="tension-copy">
            <p className="eyebrow light">Você não está sozinho.</p>
            <h2>Muitas pessoas cansaram de repetir os mesmos padrões religiosos.</h2>
            <p>Também é comum sentir frustração ao encontrar ensinamentos diferentes para o mesmo texto, explicações incompletas ou respostas que não conversam com as perguntas reais da vida.</p>
            <div className="thoughts">
              <p>“Por que nunca explicaram isso dessa forma?”</p>
              <p>“Será que eu entendi o texto ou apenas repeti o que ouvi?”</p>
              <p>“Posso questionar sem perder aquilo em que acredito?”</p>
            </div>
            <p>Essas perguntas não fazem de você uma pessoa menos espiritual. Elas mostram que você deseja compreender com mais profundidade.</p>
            <button className="button button-outline-light" onClick={scrollToOffer}>Continue lendo <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </section>

      <section className="discovery section-paper" id="conteudo">
        <div className="page-width">
          <div className="discovery-heading">
            <div className="section-label"><span>03</span><span className="label-rule" /><span>Descoberta</span></div>
            <div>
              <p className="eyebrow">O que você vai descobrir neste e-book</p>
              <h2>Mais do que respostas,<br /><em>novas formas de enxergar.</em></h2>
            </div>
            <p className="discovery-intro">Ao longo da leitura, você será convidado a observar temas conhecidos por ângulos diferentes e a refletir sobre interpretações que muitas vezes são aceitas sem investigação.</p>
          </div>
          <div className="theme-grid">
            {themes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <span className="theme-number">{theme.number}</span>
                <div className="theme-icon"><Feather size={18} strokeWidth={1.4} /></div>
                <h3>{theme.title}</h3>
                <p>{theme.body}</p>
                <span className="theme-arrow"><ArrowUpRight size={16} /></span>
              </article>
            ))}
          </div>
          <div className="discover-bottom">
            <p><strong>Este e-book é para você</strong> que deseja ler com mais atenção, comparar interpretações, questionar tradições com respeito e desenvolver uma fé mais consciente.</p>
            <button className="button button-dark" onClick={scrollToOffer}>Quero conhecer o conteúdo <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </section>

      <section className="difference section-mist">
        <div className="page-width difference-grid">
          <div className="difference-title">
            <p className="eyebrow">Uma leitura diferente</p>
            <h2>Não é apenas mais um resumo da Bíblia.</h2>
            <p className="difference-lede">A proposta é provocar reflexão por meio de perguntas, comparações e novas perspectivas.</p>
          </div>
          <div className="difference-list">
            {[
              ["Não exige formação teológica.", "Linguagem acessível para leitores curiosos, mesmo sem estudo formal."],
              ["Não trata perguntas como ameaças.", "Uma leitura cuidadosa também pode incluir investigação e diálogo."],
              ["Não promete uma resposta única.", "Você lê, avalia os argumentos e forma seu próprio entendimento."],
            ].map(([title, body], index) => (
              <div className="difference-item" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
                <Check size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer section-ink" id="oferta">
        <div className="page-width offer-grid">
          <div className="offer-art">
            <div className="offer-art-label">A Bíblia que<br /><em>Você Não Leu</em></div>
            <img src="/assets/biblia-cover.jpg" alt="Mockup da capa do e-book A Bíblia que Você Não Leu" />
            <div className="offer-art-caption">uma leitura para<br />voltar ao texto</div>
          </div>
          <div className="offer-copy">
            <p className="eyebrow light">Invista em uma nova forma de ler e refletir</p>
            <h2>Sua próxima leitura pode começar com <em>uma pergunta.</em></h2>
            <p className="offer-lede">Mais do que um arquivo digital, este e-book é um convite para voltar ao texto, perceber detalhes, questionar pressupostos e construir uma compreensão mais consciente.</p>
            <div className="included">
              <p className="included-label">Ao adquirir o e-book, você recebe:</p>
              <div className="included-row"><Check size={15} /> O e-book digital <strong>A Bíblia que Você Não Leu</strong></div>
              <div className="included-row"><Check size={15} /> Uma leitura organizada para celular, tablet ou computador</div>
              <div className="included-row"><Check size={15} /> Reflexões sobre temas, personagens e interpretações</div>
            </div>
            <div className="price-card">
              <div><span className="price-label">Investimento</span><strong className="price">R$ 29,90</strong><span className="price-detail">pagamento único · acesso digital</span></div>
              <a className="button button-accent" href={checkoutUrl}>Garantir meu e-book agora <ArrowUpRight size={17} /></a>
            </div>
            <p className="secure-note"><LockKeyhole size={13} /> Compra processada com segurança pela Hotmart.</p>
            <p className="placeholder-note">* Substitua o valor e o link acima pelos dados reais do checkout antes de publicar.</p>
          </div>
        </div>
      </section>

      <section className="closing section-paper">
        <div className="page-width closing-inner">
          <div className="closing-quote-mark">“</div>
          <p className="eyebrow">Talvez você não precise de mais uma resposta pronta.</p>
          <h2>Talvez precise de<br /><em>uma pergunta melhor.</em></h2>
          <p className="closing-lede">A forma como lemos influencia a forma como compreendemos. E a forma como compreendemos influencia a forma como conversamos, ensinamos e vivemos aquilo em que acreditamos.</p>
          <button className="button button-dark" onClick={scrollToOffer}>Ler a Bíblia com outros olhos <ArrowUpRight size={17} /></button>
        </div>
      </section>

      <section className="faq section-mist" id="duvidas">
        <div className="page-width faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">Antes de começar</p>
            <h2>Perguntas<br /><em>frequentes.</em></h2>
            <p>Se ainda ficou alguma dúvida, talvez a resposta esteja aqui. Se não estiver, escreva para o suporte.</p>
            <a href="mailto:suporte@seudominio.com" className="support-link"><Mail size={16} /> suporte@seudominio.com</a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={isOpen ? "faq-item is-open" : "faq-item"} key={faq.question}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{faq.question}</span><ChevronDown size={18} />
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer section-ink">
        <div className="page-width footer-top">
          <a href="#topo" className="brand-mark footer-brand" aria-label="Voltar ao início">
            <span className="brand-symbol"><Circle size={16} strokeWidth={1.5} /></span>
            <span>A Bíblia que<br /><em>Você Não Leu</em></span>
          </a>
          <div className="footer-statement">Volte ao texto.<br /><em>Leia com outros olhos.</em></div>
          <button className="footer-top-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Voltar ao topo <ArrowUpRight size={16} /></button>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2026 · Todos os direitos reservados</span>
          <span>Obra editorial de reflexão</span>
          <span className="footer-moon"><Moon size={14} /> Feito para leitores curiosos</span>
        </div>
      </footer>
    </main>
  );
}
