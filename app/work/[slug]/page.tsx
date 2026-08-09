import Link from "next/link";
import { getProject, projects } from "../projects";

export function generateStaticParams(){ return projects.map(p => ({slug:p.slug})); }

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug} = await params; const p = getProject(slug);
  if(!p) return <main className="not-found shell"><h1>Case study not found.</h1><Link href="/">Return home</Link></main>;
  const index = projects.findIndex(x => x.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return <main>
    <header className="nav shell"><Link className="wordmark" href="/">Felicia Di Palo</Link><nav><Link href="/#work">All work</Link><Link href="/#about">About</Link></nav></header>
    <article className="case-page shell">
      <div className="case-hero"><p className="eyebrow">Case study {String(index+1).padStart(2,"0")} · {p.tag}</p><h1>{p.headline}</h1><div className="case-meta"><span className={`state ${p.stateClass}`}>{p.state}</span><p>{p.summary}</p></div></div>
      <div className="project-brief"><div><span>Context</span><p>{p.context}</p></div><div><span>My role</span><p>{p.role}</p></div></div>
      <section className="story-grid"><article><span>01</span><h2>Challenge</h2><p>{p.challenge}</p></article><article><span>02</span><h2>Diagnosis</h2><p>{p.diagnosis}</p></article><article><span>03</span><h2>Intervention</h2><p>{p.intervention}</p></article></section>
      {p.visuals?.length ? <section className="artifact-block has-evidence"><div><p className="section-label">Selected evidence</p><h2>{p.visualTitle}</h2><p>{p.visualCaption}</p></div><div className={`evidence-gallery ${p.visuals.length > 1 ? "multiple" : ""}`}>{p.visuals.map((visual,i)=><figure key={visual.src} className={i===0 ? "featured" : ""}><a href={visual.src} target="_blank" rel="noreferrer" aria-label={`Open evidence image: ${visual.alt}`}><img src={visual.src} alt={visual.alt} loading="eager"/></a><figcaption>{visual.caption}</figcaption></figure>)}</div></section> : null}
      <section className="two-lists"><div><p className="section-label">What I built</p><ul>{p.deliverables.map(x=><li key={x}>{x}</li>)}</ul></div><div><p className="section-label">Evidence base</p><ul>{p.evidence.map(x=><li key={x}>{x}</li>)}</ul></div></section>
      <section className={`impact-block ${p.stateClass !== "measured" ? "scope" : ""}`}><p className="section-label">{p.stateClass === "measured" ? "Measured impact" : "Scope & status — not yet measured"}</p><h2>{p.outcomeTitle}</h2><div className="impact-grid">{p.outcomes.map(x=><div key={x.label}><strong>{x.value}</strong><span>{x.label}</span></div>)}</div><p className="case-note">{p.note}</p></section>
      <nav className="case-next"><span>Next case study</span><Link href={`/work/${next.slug}`}>{next.title} <b>↗</b></Link></nav>
    </article>
    <footer className="shell"><p>Felicia Di Palo</p><p>Anonymised portfolio</p></footer>
  </main>;
}
