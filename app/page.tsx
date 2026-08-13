const buyLink =
  "mailto:mold@dashaplesen.com?subject=Edible%20Petri%20Dishes%20playbook&body=Hi%20Dasha%2C%20I%20want%20to%20buy%20Edible%20Petri%20Dishes%20for%2055%20EUR.";

const lessons = [
  "Universal agar base",
  "Color bases from juice, puree, tea and powders",
  "Fondant colonies, folded edges and strange skins",
  "Velvet spores, cotton candy fuzz and Turkish floss hair",
  "Cold shock agar drops, edible latex and burnt wafer paper",
  "Final Petri dish assembly and sensory tasting ritual",
];

const audience = [
  "artists and makers who want a weird material experiment",
  "food stylists, pastry people and edible prop lovers",
  "content creators looking for something scroll-stopping",
  "friends, dates and studio nights that need a little harmless chaos",
];

const outcomes = [
  {
    title: "Make it look alive",
    text: "Learn how to build suspicious colonies, folds, slime, fuzz and translucent membranes without growing real mold.",
  },
  {
    title: "Use ordinary ingredients strangely",
    text: "Turn agar, fondant, rice paper, fruit, powders and cotton candy into tiny edible ecosystems.",
  },
  {
    title: "Stop worshipping perfect",
    text: "The playbook is written as an artist notebook: playful, forgiving and built for experiments.",
  },
];

const faqs = [
  {
    q: "Is this real mold?",
    a: "No. The whole point is to recreate the visual language of microbiology with edible ingredients, without real mold, bacteria or living cultures.",
  },
  {
    q: "Do I need professional pastry tools?",
    a: "No. Petri dishes, agar, food coloring, fondant, cups, basic kitchen tools and a few texture ingredients are enough for a first session.",
  },
  {
    q: "What do I receive?",
    a: "A 20-page digital artist playbook in English with recipes, material logic, safety notes, ingredient lists, techniques and visual inspiration.",
  },
  {
    q: "Can I replace ingredients?",
    a: "Yes. The guide gives a base system so you can replace juices, purees, powders, colors and textures according to taste and allergies.",
  },
];

function BuyButton({ children = "Get the playbook - EUR 55" }) {
  return (
    <a className="buy-button" href={buyLink}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">by Dasha Plesen / digital artist playbook</p>
          <h1>EDIBLE PETRI DISHES</h1>
          <p className="subtitle">
            A strange little workshop for recreating microbiological textures
            with edible ingredients.
          </p>
          <p className="hero-text">
            Build agar bases, sculpt colonies, create slime, fuzz, spores,
            strange skins and edible horror-garden compositions that look
            dangerous but taste like dessert.
          </p>
          <div className="hero-actions">
            <BuyButton />
            <a className="ghost-link" href="#inside">
              See what is inside
            </a>
          </div>
          <div className="spec-row" aria-label="Product details">
            <span>20-page PDF</span>
            <span>English</span>
            <span>Digital PDF</span>
            <span>No real mold</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Playbook cover preview">
          <img
            src="/cover.jpg"
            alt="Cover of Edible Petri Dishes by Dasha Plesen"
          />
          <div className="price-note">
            <span>Price</span>
            <strong>EUR 55</strong>
          </div>
        </div>
      </section>

      <section className="paper-band" id="inside">
        <div className="section-heading">
          <p className="eyebrow">inside the playbook</p>
          <h2>Not a recipe. A small edible laboratory.</h2>
        </div>
        <div className="inside-layout">
          <div className="checklist-panel">
            {lessons.map((lesson) => (
              <div className="check-item" key={lesson}>
                <span aria-hidden="true" />
                <p>{lesson}</p>
              </div>
            ))}
          </div>
          <div className="inside-copy">
            <p>
              The guide walks you from preparation to final assembly: how agar
              behaves, how to pour color bases, how to make folded colonies,
              how to create velvet, powder, hair, skin, drops and decay effects.
            </p>
            <p>
              It is intentionally written like a working artist notebook:
              direct, funny, sensory and permissive enough for you to invent
              your own organisms.
            </p>
          </div>
        </div>
      </section>

      <section className="image-strip" aria-label="Mold art examples">
        <img src="/practice-grid.jpg" alt="Mold art Petri dish inspiration" />
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">for whom</p>
          <h2>For people who want food to behave less politely.</h2>
        </div>
        <div className="audience-list">
          {audience.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="outcomes-section">
        <div className="section-heading">
          <p className="eyebrow">after a few hours</p>
          <h2>You will have your own tiny edible ecosystems.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="preview-section">
        <div className="preview-image">
          <img
            src="/tools.jpg"
            alt="A sample materials page from the playbook"
          />
        </div>
        <div className="preview-copy">
          <p className="eyebrow">what you need</p>
          <h2>The basic version is simple. The obsession can grow later.</h2>
          <p>
            Start with agar, juice, food coloring, fondant, a few kitchen tools
            and texture ingredients. The playbook shows how a fork, comb,
            toothbrush, fruit, rice paper or cake powder can become a mold tool.
          </p>
          <BuyButton>Buy the digital playbook - EUR 55</BuyButton>
        </div>
      </section>

      <section className="safety-section">
        <div>
          <p className="eyebrow">common sense</p>
          <h2>Suspicious visually. Safe by design.</h2>
        </div>
        <p>
          This is an edible imitation workshop. You do not add real mold, real
          bacterial cultures or anything scraped from the real world. You work
          with hot agar, sugar and kitchen tools, so allergies, heat and fire
          safety still matter.
        </p>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">questions</p>
          <h2>Before you open the Petri dish.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">life is a strange fairy tale</p>
        <h2>Make something sweet, sticky, disgusting and beautiful.</h2>
        <p>
          Get the 20-page Edible Petri Dishes playbook by Dasha Plesen and
          spend a few hours inside color, texture and harmless sensory chaos.
        </p>
        <BuyButton>Get it now - EUR 55</BuyButton>
      </section>

      <div className="mobile-buy">
        <span>Edible Petri Dishes</span>
        <BuyButton>EUR 55</BuyButton>
      </div>
    </main>
  );
}
