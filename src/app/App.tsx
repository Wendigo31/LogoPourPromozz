type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

function BrandMark({ inverse = false, compact = false, className = "" }: BrandMarkProps) {
  const blue = inverse ? "#ffffff" : "#1859b7";

  if (compact) {
    return (
      <svg className={className} viewBox="0 0 190 190" role="img" aria-label="Symbole promozz">
        <rect width="190" height="190" rx="60" fill={inverse ? "#ffffff" : "#ffd541"} />
        <path
          d="M32 151V88c0-27.6 22.4-50 50-50h26c27.6 0 50 22.4 50 50v63H32Z"
          fill={inverse ? "#1859b7" : "#1859b7"}
        />
        <path
          d="M52 151v-44c0-12.7 10.3-23 23-23s23 10.3 23 23v44H52Zm56 0v-44c0-12.7 10.3-23 23-23s23 10.3 23 23v44h-46Z"
          fill="#ffffff"
        />
        <path d="M31 151h128" stroke="#1859b7" strokeWidth="10" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 900 240" role="img" aria-label="Logo promozz">
      <g transform="translate(20 25)">
        <rect width="190" height="190" rx="60" fill="#ffd541" />
        <path d="M32 151V88c0-27.6 22.4-50 50-50h26c27.6 0 50 22.4 50 50v63H32Z" fill={blue} />
        <path
          d="M52 151v-44c0-12.7 10.3-23 23-23s23 10.3 23 23v44H52Zm56 0v-44c0-12.7 10.3-23 23-23s23 10.3 23 23v44h-46Z"
          fill={inverse ? "#1859b7" : "#ffffff"}
        />
        <path d="M31 151h128" stroke={blue} strokeWidth="10" strokeLinecap="round" />
      </g>
      <text
        x="245"
        y="163"
        fill={blue}
        fontFamily="'Nunito Sans', Arial, sans-serif"
        fontSize="118"
        fontWeight="900"
        letterSpacing="-7"
      >
        promozz
      </text>
    </svg>
  );
}

function SectionHeading({
  number,
  eyebrow,
  children,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

const colors = [
  { name: "Bleu confiance", hex: "#1859B7", className: "swatch-blue" },
  { name: "Jaune promo", hex: "#FFD541", className: "swatch-yellow" },
  { name: "Crème accueil", hex: "#FFFDF6", className: "swatch-cream" },
  { name: "Encre", hex: "#17304F", className: "swatch-ink" },
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="mini-brand" aria-label="Retour en haut">
          <BrandMark compact />
          <span>promozz</span>
        </a>
        <nav aria-label="Sommaire">
          <a href="#logo">Logo</a>
          <a href="#couleurs">Couleurs</a>
          <a href="#systeme">Système</a>
          <a href="#applications">Applications</a>
        </nav>
        <span className="version">Identité 01.0</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Identité visuelle · 2025</p>
          <h1>
            Les bons plans,
            <br />
            <span>à portée de main.</span>
          </h1>
          <p className="hero-intro">
            Une marque populaire, positive et rassurante qui rend les promotions plus simples à
            trouver pour tous les Français.
          </p>
        </div>
        <div className="hero-mark">
          <BrandMark />
          <div className="hero-arches" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-principles">
          <div>
            <span>01</span>
            <strong>Accessible</strong>
            <p>Compris en un regard, par tout le monde.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Optimiste</strong>
            <p>Une économie est toujours une bonne nouvelle.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Utile</strong>
            <p>Chaque élément aide à mieux choisir.</p>
          </div>
        </div>
      </section>

      <section className="brand-section" id="logo">
        <SectionHeading number="01" eyebrow="Notre signature">
          Un repère familier.
        </SectionHeading>
        <div className="logo-showcase">
          <div className="logo-primary">
            <span className="card-label">Logo principal</span>
            <BrandMark />
          </div>
          <div className="logo-tile logo-tile-blue">
            <span className="card-label">Version inversée</span>
            <BrandMark inverse />
          </div>
          <div className="logo-tile logo-tile-yellow">
            <span className="card-label">Icône d’application</span>
            <BrandMark compact />
          </div>
        </div>
        <div className="logo-rationale">
          <p>
            <strong>La galerie</strong>
            Les arches évoquent une entrée de centre commercial : un lieu où l’on trouve tout,
            simplement.
          </p>
          <p>
            <strong>Le carré jaune</strong>
            Une enseigne visible et chaleureuse, conçue pour être reconnue à la taille d’une icône.
          </p>
          <p>
            <strong>Le mot-symbole</strong>
            Des lettres rondes et généreuses qui rendent la technologie plus humaine.
          </p>
        </div>
      </section>

      <section className="brand-section color-section" id="couleurs">
        <SectionHeading number="02" eyebrow="Palette">
          Visible, chaleureuse,
          <br />
          jamais agressive.
        </SectionHeading>
        <div className="color-grid">
          {colors.map((color) => (
            <div className={`color-card ${color.className}`} key={color.hex}>
              <span>{color.name}</span>
              <strong>{color.hex}</strong>
            </div>
          ))}
        </div>
        <p className="usage-note">
          Le bleu porte la confiance et l’information. Le jaune signale les opportunités. Le crème
          garde l’expérience calme et accueillante.
        </p>
      </section>

      <section className="brand-section type-section">
        <SectionHeading number="03" eyebrow="Typographie">
          Ronde dans la forme.
          <br />
          Directe dans le fond.
        </SectionHeading>
        <div className="type-specimen">
          <div className="type-name">
            <p>Police principale</p>
            <strong>Nunito Sans</strong>
            <span>Regular · Semibold · Black</span>
          </div>
          <div className="type-display">
            <span>Aa</span>
            <p>Des promos qui font vraiment la différence.</p>
          </div>
          <div className="type-details">
            <p>0123456789 € %</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>
      </section>

      <section className="brand-section system-section" id="systeme">
        <SectionHeading number="04" eyebrow="Système graphique">
          Les portes des
          <br />
          bonnes affaires.
        </SectionHeading>
        <div className="system-grid">
          <div className="pattern-card" aria-label="Motif d’arches promozz">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="message-card">
            <p>AUJOURD’HUI</p>
            <strong>
              30%
              <br />
              moins cher
            </strong>
            <span>près de chez vous</span>
          </div>
          <div className="icon-card">
            <div className="icon-row" aria-label="Exemples d’icônes">
              <span className="line-icon tag-icon" />
              <span className="line-icon pin-icon" />
              <span className="line-icon heart-icon">♥</span>
            </div>
            <p>
              Des icônes épaisses, rondes et immédiatement lisibles, toujours dessinées dans la même
              logique que le logo.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section application-section" id="applications">
        <SectionHeading number="05" eyebrow="Mise en situation">
          Une identité faite
          <br />
          pour le quotidien.
        </SectionHeading>
        <div className="application-grid">
          <div className="phone-stage">
            <div className="phone">
              <div className="phone-top">
                <BrandMark compact />
                <span>Pour vous</span>
                <b>3 nouvelles offres</b>
              </div>
              <div className="deal-card">
                <span className="deal-category">Courses</span>
                <strong>-30%</strong>
                <p>sur une sélection du quotidien</p>
                <small>À 1,2 km</small>
              </div>
              <div className="deal-row">
                <span>-20%</span>
                <p>
                  <b>Maison</b>
                  Jusqu’à dimanche
                </p>
              </div>
            </div>
          </div>
          <div className="social-card">
            <BrandMark compact />
            <p>LE BON PLAN DU JOUR</p>
            <strong>
              Votre panier
              <br />
              respire enfin.
            </strong>
            <span>promozz.fr</span>
          </div>
          <div className="bag-stage">
            <div className="bag-handle" />
            <div className="shopping-bag">
              <BrandMark compact />
              <p>les bons plans sont dans le sac</p>
            </div>
          </div>
        </div>
      </section>

      <section className="voice-section">
        <p className="eyebrow">Voix de marque</p>
        <h2>On parle comme les gens. Pas comme une publicité.</h2>
        <div className="voice-grid">
          <p>
            <span>Clair</span>« 20 % de moins sur vos courses »
          </p>
          <p>
            <span>Proche</span>« Une bonne affaire juste à côté »
          </p>
          <p>
            <span>Positif</span>« Votre budget vous dit merci »
          </p>
        </div>
      </section>

      <footer>
        <BrandMark />
        <p>Les bons plans, tous les jours.</p>
        <span>Identité visuelle · promozz 2025</span>
      </footer>
    </main>
  );
}
