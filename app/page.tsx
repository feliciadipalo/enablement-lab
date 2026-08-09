import Link from "next/link";
import { projects } from "./work/projects";

const outcomes = [
  { value: "+177%", label: "Listings per month" },
  { value: "+164%", label: "Net revenue per month" },
  { value: "−10%", label: "Call volume — more output, less activity" },
];

export default function Home() {
  const featuredSlugs = ["outbound-growth", "training-system", "enablement-analytics", "enablement-operating-system"];
  const featured = featuredSlugs.map(slug => projects.find(p => p.slug === slug)!).filter(Boolean);
  const additional = projects.filter(p => !featuredSlugs.includes(p.slug));
  return <main>
    <header className="nav shell">
      <Link className="wordmark" href="/">Felicia Di Palo</Link>
      <nav><a href="#ai">AI</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a></nav>
    </header>

    <section className="hero shell">
      <p className="eyebrow">Commercial Enablement · Revenue Productivity · AI</p>
      <h1>I turn commercial priorities into measurable frontline performance.</h1>
      <div className="hero-bottom">
        <p className="lede">I use performance data, learning design and frontline insight to improve execution, productivity and commercial outcomes across multi-market teams.</p>
        <a className="text-link" href="#work">Explore selected work <span>↓</span></a>
      </div>
    </section>

    <section className="outcomes shell">
      <p className="section-label">Selected outcomes</p>
      <div className="outcome-grid">{outcomes.map(x => <article key={x.label}><strong>{x.value}</strong><span>{x.label}</span></article>)}</div>
      <p className="note">Early three-month signal from a targeted outbound programme (UK + EU, normalised monthly run rates). Listings and revenue more than doubled while call volume fell — the gain came from better-targeted calling, not more of it. Directional, not a settled result.</p>
    </section>

    <section className="ai-band" id="ai"><div className="shell">
      <div className="section-intro light"><p className="section-label">AI in enablement</p><h2>Bringing the capability the incumbents don&rsquo;t have yet.</h2></div>
      <div className="ai-grid">
        <article><span>01</span><h3>Objection-handling tool on live call data</h3><p>Built a gamified objection-handling tool using generative AI on real call recordings. Secured executive and IT sponsorship to scale it; a regional lead proposed it as a mandatory onboarding gate.</p></article>
        <article><span>02</span><h3>AI-authored microlearning</h3><p>Module build time cut from days to under an hour — the difference between a quarterly content calendar and an enablement function that responds in the moment.</p></article>
        <article><span>03</span><h3>Analysis, not decoration</h3><p>Hex and Snowflake used to separate signal from noise: reliability floors, cohort context and behaviour trends that end in a decision, not a dashboard.</p></article>
      </div>
    </div></section>

    <section className="work shell" id="work">
      <div className="section-intro">
        <p className="section-label">Selected work</p>
        <h2>Commercial problems, solved through enablement.</h2>
        <p>Case studies across performance strategy, commercial learning, analytics and scalable enablement systems.</p>
      </div>
      <div className="project-grid">{featured.map((p, i) =>
        <Link className="project-card" href={`/work/${p.slug}`} key={p.slug}>
          {p.visuals?.[0] && <div className="project-image"><img src={p.visuals[0].src} alt={p.visuals[0].alt}/></div>}
          <div className="project-top"><span>0{i + 1}</span><span className={`state ${p.stateClass}`}>{p.state}</span></div>
          <p className="tag">{p.tag}</p><h3>{p.title}</h3><p>{p.summary}</p>
          <span className="open-link">Open case study <b>↗</b></span>
        </Link>)}
      </div>
      <div className="additional-work">
        <div className="additional-intro"><p className="section-label">Additional work</p><p>Focused interventions and built artefacts that extend the core portfolio.</p></div>
        <div className="additional-grid">{additional.map(p => <Link href={`/work/${p.slug}`} key={p.slug} className={p.visuals?.[0] ? "has-image" : ""}>
          {p.visuals?.[0] && <img src={p.visuals[0].src} alt=""/>}
          <span>{p.tag}</span><strong>{p.title}</strong><b>↗</b>
        </Link>)}</div>
      </div>
    </section>

    <section className="approach" id="approach"><div className="shell">
      <div className="section-intro light"><p className="section-label">How I work</p><h2>Diagnose the gap. Design for the workflow. Measure the change.</h2></div>
      <div className="practice-grid">
        <article><span>01</span><h3>Evidence before intervention</h3><p>CRM, conversation and workflow data reveal where performance breaks down and where enablement can change it.</p></article>
        <article><span>02</span><h3>Built for adoption</h3><p>Learning, coaching and tools are designed around real decisions and reinforced through managers and operating rhythms.</p></article>
        <article><span>03</span><h3>Impact with integrity</h3><p>Measurement separates activity, adoption and commercial outcomes, with baselines and limitations stated clearly.</p></article>
      </div>
    </div></section>

    <section className="about shell" id="about"><p className="section-label">About</p><div>
      <h2>Commercial strategy built for frontline execution.</h2>
      <p>I am a London-based Commercial Enablement professional working across global, multi-market teams. My background spans sales, learning design, analytics and research.</p>
      <p>This portfolio presents anonymised work. Company names, people, dates and commercially sensitive details have been removed while preserving the decision logic and evidence.</p>
    </div></section>
    <footer className="shell"><p>Felicia Di Palo</p><p>London, UK</p></footer>
  </main>;
}
