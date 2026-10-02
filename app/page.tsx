const included = [
  {
    icon: "⚡",
    title: "100 Hooks",
    text: "Ideas listas para adaptar y captar atención desde los primeros segundos.",
    tag: "ATENCIÓN",
  },
  {
    icon: "🎬",
    title: "20 Guiones",
    text: "Estructuras para videos cortos de 10, 15, 20 y 30 segundos.",
    tag: "VIDEO",
  },
  {
    icon: "🧠",
    title: "30 Estructuras",
    text: "Fórmulas publicitarias para dejar de empezar cada anuncio desde cero.",
    tag: "COPY",
  },
  {
    icon: "🤖",
    title: "Prompts para IA",
    text: "Prompts preparados para generar ángulos, hooks y variantes en minutos.",
    tag: "IA",
  },
  {
    icon: "🎯",
    title: "Método A.V.C.",
    text: "Atención → Valor → Conversión. Un marco simple para ordenar cada pieza.",
    tag: "MÉTODO",
  },
  {
    icon: "🔍",
    title: "Investigación",
    text: "Cómo detectar ideas y patrones de competidores sin copiar anuncios.",
    tag: "RESEARCH",
  },
  {
    icon: "📊",
    title: "Diagnóstico",
    text: "Qué revisar cuando hay vistas, clics o interés, pero no llegan las ventas.",
    tag: "OPTIMIZACIÓN",
  },
  {
    icon: "✅",
    title: "Checklist",
    text: "Una revisión final para publicar con criterio y evitar errores básicos.",
    tag: "LANZAMIENTO",
  },
];

const audiences = [
  ["🛍️", "Productos físicos"],
  ["💼", "Servicios"],
  ["📍", "Negocios locales"],
  ["💻", "Productos digitales"],
  ["🧑‍💼", "Profesionales"],
];

const faqs = [
  [
    "¿Necesito saber de publicidad?",
    "No. El material está diseñado para empezar desde cero y avanzar con estructuras concretas, ejemplos y checklists.",
  ],
  [
    "¿Sirve si vendo servicios?",
    "Sí. El sistema contempla productos físicos, servicios, negocios locales, profesionales y productos digitales.",
  ],
  [
    "¿Es un curso con videos?",
    "No. Es un playbook práctico + kit de recursos digitales pensado para consultar mientras creás tus anuncios.",
  ],
  [
    "¿Funciona sólo para TikTok?",
    "No. Las estructuras se pueden adaptar a TikTok, Reels, Facebook e Instagram. La idea central es aprender a construir mejores piezas, no depender de una sola plataforma.",
  ],
  [
    "¿Se paga una suscripción?",
    "No. El precio de lanzamiento es un pago único de $14.900.",
  ],
  [
    "¿El material garantiza ventas?",
    "No existe una plantilla que pueda garantizar resultados. El objetivo del sistema es darte un proceso mucho más claro para crear, evaluar y mejorar anuncios.",
  ],
];

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#oferta";

  return (
    <main>
      <div className="announcement">
        <span className="pulse" />
        PRECIO DE LANZAMIENTO · ACCESO DIGITAL
      </div>

      <section className="hero section-shell">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span>PLAYBOOK + KIT DE ANUNCIOS</span>
            <strong>Edición 2026</strong>
          </div>

          <h1>
            Dejá de adivinar
            <span> qué poner en tus anuncios.</span>
          </h1>

          <p className="hero-subtitle">
            Un sistema práctico con <strong>hooks, guiones, estructuras, prompts de IA y checklists</strong> para pasar de una pantalla en blanco a anuncios listos para producir.
          </p>

          <div className="hero-points">
            <span>✓ Aplicable a productos y servicios</span>
            <span>✓ Sin empezar desde cero</span>
            <span>✓ Acceso inmediato</span>
          </div>

          <div className="hero-buy">
            <div className="price-block">
              <span className="price-kicker">Precio de lanzamiento</span>
              <div className="price-row">
                <span className="old-price">$29.900</span>
                <strong>$14.900</strong>
              </div>
              <small>ARS · pago único</small>
            </div>

            <a className="button button-primary" href={checkoutUrl} data-cta="hero">
              QUIERO EL KIT COMPLETO
              <span>→</span>
            </a>
          </div>

          <div className="microtrust">
            <span>🔒 Pago seguro</span>
            <span>⚡ Acceso digital</span>
            <span>📱 Celular + PC</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista previa del producto">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="value-badge">
            <span>INCLUYE</span>
            <strong>8 recursos</strong>
          </div>

          <div className="product-scene">
            <div className="book">
              <div className="book-spine" />
              <div className="book-cover">
                <span className="book-mini">PLAYBOOK 2026</span>
                <div className="book-mark">AV</div>
                <h2>ANUNCIOS<br />QUE <em>VENDEN</em></h2>
                <p>El sistema práctico para crear anuncios con intención.</p>
                <div className="book-line" />
                <small>HOOKS · GUIONES · IA · CHECKLISTS</small>
              </div>
            </div>

            <div className="resource-card card-hooks">
              <span>01</span>
              <strong>100 HOOKS</strong>
              <small>para detener el scroll</small>
            </div>
            <div className="resource-card card-ai">
              <span>AI</span>
              <strong>PROMPTS</strong>
              <small>listos para adaptar</small>
            </div>
            <div className="resource-card card-script">
              <span>▶</span>
              <strong>20 GUIONES</strong>
              <small>10 · 15 · 20 · 30s</small>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="proof-marquee">
          <span>100 HOOKS</span><i>◆</i>
          <span>30 ESTRUCTURAS</span><i>◆</i>
          <span>20 GUIONES</span><i>◆</i>
          <span>PROMPTS IA</span><i>◆</i>
          <span>CHECKLISTS</span><i>◆</i>
          <span>SWIPE FILE</span>
        </div>
      </section>

      <section className="section section-shell problem-section">
        <div className="section-heading centered">
          <span className="section-kicker">NO ES MÁS TEORÍA</span>
          <h2>No necesitás otro PDF que te explique qué es el marketing.</h2>
          <p>Necesitás abrirlo, elegir qué vendés y saber qué hacer después.</p>
        </div>

        <div className="before-after">
          <div className="state-card state-before">
            <span className="state-label">ANTES</span>
            <div className="blank-window">
              <div className="window-dots"><i/><i/><i/></div>
              <p>|</p>
            </div>
            <h3>“¿Qué pongo en el anuncio?”</h3>
            <p>Ideas sueltas, horas mirando la pantalla y cambios sin un criterio claro.</p>
          </div>

          <div className="transform-arrow">→</div>

          <div className="state-card state-after">
            <span className="state-label">CON EL PLAYBOOK</span>
            <div className="formula">
              <span>HOOK</span><b>+</b><span>VALOR</span><b>+</b><span>CTA</span>
            </div>
            <h3>Una estructura para empezar.</h3>
            <p>Elegís un ángulo, adaptás una fórmula y construís una pieza con intención.</p>
          </div>
        </div>
      </section>

      <section className="section section-shell audience-section">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">ELEGÍ TU CAMINO</span>
            <h2>¿Qué vendés?</h2>
          </div>
          <p>El sistema está pensado para que no tengas que traducir teoría genérica a tu realidad.</p>
        </div>

        <div className="audience-grid">
          {audiences.map(([icon, label]) => (
            <div className="audience-card" key={label}>
              <span>{icon}</span>
              <strong>{label}</strong>
              <small>→ estructuras aplicables</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-shell stack-section">
        <div className="section-heading centered narrow">
          <span className="section-kicker">TODO EN UN SOLO SISTEMA</span>
          <h2>Esto es lo que te llevás por <em>$14.900</em></h2>
          <p>No son “capítulos”. Son recursos para usar mientras pensás, escribís y producís anuncios.</p>
        </div>

        <div className="stack-grid">
          {included.map((item, index) => (
            <article className="stack-card" key={item.title}>
              <div className="stack-top">
                <span className="stack-icon">{item.icon}</span>
                <small>{item.tag}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="stack-number">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>

        <div className="stack-cta">
          <span>Valor percibido: mucho más que un “ebook”</span>
          <a className="text-link" href={checkoutUrl}>Obtener el kit →</a>
        </div>
      </section>

      <section className="section preview-section">
        <div className="section-shell preview-layout">
          <div className="preview-copy">
            <span className="section-kicker">MIRÁ ANTES DE COMPRAR</span>
            <h2>No te pedimos que imagines el contenido.</h2>
            <p>
              El playbook está construido para ser visual, escaneable y accionable. Abrís una sección y encontrás una decisión concreta para tomar.
            </p>
            <ul>
              <li><span>01</span> Elegí un hook.</li>
              <li><span>02</span> Completá una estructura.</li>
              <li><span>03</span> Generá variantes con IA.</li>
              <li><span>04</span> Revisá antes de publicar.</li>
            </ul>
          </div>

          <div className="pages-fan">
            <div className="page-sheet page-one">
              <div className="sheet-head"><span>100 HOOKS</span><b>01</b></div>
              <h4>“Si vendés ___,<br/>probá esto.”</h4>
              <div className="sheet-lines"><i/><i/><i/><i/></div>
              <small>HOOK DE CURIOSIDAD</small>
            </div>
            <div className="page-sheet page-two">
              <div className="sheet-head"><span>ESTRUCTURA</span><b>07</b></div>
              <h4>Problema → Cambio<br/>→ Solución</h4>
              <div className="flow-row"><span>P</span><i>→</i><span>C</span><i>→</i><span>S</span></div>
              <small>PLANTILLA EDITABLE</small>
            </div>
            <div className="page-sheet page-three">
              <div className="sheet-head"><span>PROMPT IA</span><b>12</b></div>
              <h4>Generá 5 ángulos<br/>para tu oferta.</h4>
              <div className="prompt-box">Mi producto es ___ y ayuda a ___...</div>
              <small>COPIÁ · PEGÁ · ADAPTÁ</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell method-section">
        <div className="method-card">
          <div className="method-intro">
            <span className="section-kicker light">EL MÉTODO A.V.C.</span>
            <h2>Tres preguntas antes de tocar “publicar”.</h2>
            <p>Una forma simple de darle orden al anuncio antes de gastar un peso en pauta.</p>
          </div>
          <div className="method-steps">
            <div>
              <span>A</span>
              <strong>ATENCIÓN</strong>
              <p>¿Qué hace que alguien deje de deslizar?</p>
            </div>
            <div>
              <span>V</span>
              <strong>VALOR</strong>
              <p>¿Por qué debería importarle lo que ofrecés?</p>
            </div>
            <div>
              <span>C</span>
              <strong>CONVERSIÓN</strong>
              <p>¿Qué querés que haga después?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell steps-section">
        <div className="section-heading centered">
          <span className="section-kicker">SIN COMPLICARLO</span>
          <h2>De la idea al anuncio en 3 pasos.</h2>
        </div>

        <div className="steps-grid">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon">◉</div>
            <h3>Elegí qué vendés</h3>
            <p>Ubicá tu tipo de negocio, producto o servicio y elegí el enfoque.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon">✦</div>
            <h3>Armá la pieza</h3>
            <p>Hook + estructura + demostración + CTA. Sin improvisar todo desde cero.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon">↗</div>
            <h3>Adaptá y publicá</h3>
            <p>Creá variantes, pasá el checklist y prepará el anuncio para testear.</p>
          </article>
        </div>
      </section>

      <section className="section section-shell clarity-section">
        <div className="clarity-grid">
          <div className="clarity-copy">
            <span className="section-kicker">CUANDO ALGO NO FUNCIONA</span>
            <h2>Dejá de cambiar todo al mismo tiempo.</h2>
            <p>Una parte del kit te ayuda a pensar dónde puede estar el cuello de botella.</p>
          </div>
          <div className="diagnostic">
            <div><span>👀</span><p><strong>No miran</strong><small>Revisá hook y creativo</small></p></div>
            <div><span>🖱️</span><p><strong>Miran, no hacen clic</strong><small>Revisá propuesta y CTA</small></p></div>
            <div><span>🛒</span><p><strong>Hacen clic, no compran</strong><small>Revisá oferta y landing</small></p></div>
          </div>
        </div>
      </section>

      <section className="section section-shell offer-section" id="oferta">
        <div className="offer-card">
          <div className="offer-left">
            <span className="section-kicker light">PRECIO DE LANZAMIENTO</span>
            <h2>Tu próxima idea no tiene que empezar en blanco.</h2>
            <p>Accedé al Playbook + Kit completo y usalo como sistema de consulta cada vez que tengas que crear un anuncio.</p>

            <div className="offer-list">
              <span>✓ Playbook completo</span>
              <span>✓ 100 Hooks</span>
              <span>✓ 30 Estructuras</span>
              <span>✓ 20 Guiones</span>
              <span>✓ Prompts IA</span>
              <span>✓ Checklists</span>
              <span>✓ Diagnóstico</span>
              <span>✓ Swipe File</span>
            </div>
          </div>

          <div className="checkout-card">
            <span className="checkout-label">HOY</span>
            <div className="checkout-old">$29.900</div>
            <div className="checkout-price">$14.900</div>
            <div className="checkout-currency">ARS · PAGO ÚNICO</div>
            <a className="button button-dark" href={checkoutUrl} data-cta="offer">
              OBTENER ACCESO AHORA
              <span>→</span>
            </a>
            <div className="checkout-notes">
              <span>⚡ Entrega digital</span>
              <span>🔒 Compra segura</span>
              <span>∞ Sin suscripción</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell faq-section">
        <div className="section-heading centered narrow">
          <span className="section-kicker">PREGUNTAS FRECUENTES</span>
          <h2>Antes de comprar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                <span>{question}</span>
                <i>+</i>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-glow" />
        <div className="section-shell final-inner">
          <span className="section-kicker light">ANUNCIOS QUE VENDEN</span>
          <h2>Menos “¿qué publico?”<br/><em>Más claridad para crear.</em></h2>
          <p>Playbook + kit completo · $14.900 ARS · pago único.</p>
          <a className="button button-primary final-button" href={checkoutUrl} data-cta="final">
            QUIERO EL KIT COMPLETO
            <span>→</span>
          </a>
          <small>Producto educativo digital. Los resultados dependen de la oferta, mercado, ejecución y otros factores.</small>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <strong>ANUNCIOS QUE VENDEN™</strong>
          <p>Un producto digital de Viralio.</p>
          <span>© 2026 · Todos los derechos reservados.</span>
        </div>
      </footer>

      <div className="mobile-sticky">
        <div>
          <span>PRECIO LANZAMIENTO</span>
          <strong>$14.900</strong>
        </div>
        <a href={checkoutUrl} data-cta="sticky">OBTENER →</a>
      </div>
    </main>
  );
}
