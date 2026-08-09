export type Project = {
  slug: string; tag: string; title: string; summary: string; state: string; stateClass: string;
  headline: string; context: string; role: string; challenge: string; diagnosis: string; intervention: string;
  deliverables: string[]; evidence: string[]; outcomeTitle: string; outcomes: {value: string; label: string}[];
  note: string; visualTitle: string; visualCaption: string; evidenceLabel: string;
  visuals?: {src: string; alt: string; caption: string}[];
};

export const projects: Project[] = [
  {
    slug:"outbound-growth", tag:"Revenue productivity", title:"From Activity Gap to Outbound Growth", state:"Measured impact", stateClass:"measured",
    summary:"A data-led performance programme that lifted listings and revenue while call volume fell — the gain came from better-targeted calling, not more of it.",
    headline:"More output from fewer, better-targeted calls.", context:"A multi-market commercial team needed a clearer connection between daily activity and commercial output. The assumption was that more calls would mean more results; the data pointed elsewhere.", role:"I led the performance diagnosis and programme design, built the measurement approach and delivered the workshops in partnership with regional sales leaders, who reinforced the new rhythm with their teams.",
    challenge:"Raw activity varied significantly across teams. Reporting relied on totals that obscured changes in period length and team composition, making the real performance gap difficult to see.",
    diagnosis:"I isolated the genuine outbound cohort, removed non-comparable records and normalised the analysis to weekly and per-person run rates. This established a defensible baseline across activity, listings and recorded commission.",
    intervention:"I introduced a repeatable focused-calling model built on targeting and call quality rather than raw volume, supported by practical workshops and a leadership reinforcement cadence. The programme tied behaviour to pipeline movement and commercial output.",
    deliverables:["Outbound operating rhythm","Live commercial workshops","Call scripts and objection support","Manager reinforcement cadence","Normalised impact analysis"],
    evidence:["CRM listing and commission records","Dialler activity by comparable cohort","Weekly run-rate analysis","Workshop and reinforcement materials"],
    outcomeTitle:"Fewer calls, better calls — and more than double the commercial output.", outcomes:[{value:"+177%",label:"Listings per month (10.0 → 27.7)"},{value:"+164%",label:"Net revenue per month (£20K → £52.8K)"},{value:"−10%",label:"Call volume per month — more output, less activity"}],
    note:"Early signal: the after-period covers three complete months post-launch against three before-months, on normalised monthly run rates (UK + EU). Directional read, not a settled result. The point is the ratio — output rose sharply while raw call volume fell, so the gain came from better-targeted calling, not more of it.", visualTitle:"Performance evidence", visualCaption:"Anonymised workflow analysis used to identify the controllable behaviour behind the output gain and connect frontline execution to commercial output.", evidenceLabel:"Measured impact"
  },
  {
    slug:"repeat-play", tag:"Commercial strategy", title:"The Repeat Play", state:"Built · measurement pending", stateClass:"built",
    summary:"A post-sale ownership system designed around the highest-propensity return window to create repeat supply.",
    headline:"Turning a completed transaction into the next commercial opportunity.", context:"Analysis showed that returning sellers were most likely to re-engage within a short post-sale window, but ownership after completion was inconsistent.", role:"I identified the retention opportunity, designed the commercial play and produced the learning experience. Regional managers shaped the coaching and rollout model for their teams.",
    challenge:"The commercial journey effectively ended at completion. Teams lacked a shared follow-up rhythm, a conversation structure and a reliable way to surface future selling opportunities.",
    diagnosis:"I analysed repeat behaviour, identified the highest-propensity return window and translated the pattern into a practical account-ownership opportunity.",
    intervention:"I designed a post-sale play, contact cadence and conversation framework, then adapted it for live delivery and an AI-assisted asynchronous workshop for a distributed team.",
    deliverables:["Repeat-business analysis","Post-sale ownership playbook","Conversation framework","Live workshop and facilitator script","AI-assisted asynchronous workshop","Coaching and reinforcement plan"],
    evidence:["Anonymised retention analysis","Playbook and workshop deck","Voiceover script and video prototype","Manager coaching plan"],
    outcomeTitle:"The analysis became a rollout-ready commercial play.", outcomes:[{value:"3-month window",label:"Highest-propensity return period identified"},{value:"Live + async",label:"Delivery adapted for distributed teams"},{value:"End-to-end",label:"Follow-up, coaching and measurement connected"}],
    note:"The intervention is built and prepared for rollout. Commercial impact will be reported only after sufficient post-launch data is available.", visualTitle:"From insight to scalable delivery", visualCaption:"The case study will show the analysis, playbook, workshop structure and a short preview of the asynchronous version.", evidenceLabel:"Programme scope"
    ,visuals:[{src:"/enablement-lab/evidence/repeat-play-curve.webp",alt:"Anonymised analysis showing growth in repeat-led commercial value",caption:"Retention analysis reframed the opportunity from continuous acquisition to systematic post-sale ownership."}]
  },
  {
    slug:"training-system", tag:"Learning transformation", title:"Multi-Format Commercial Training System", state:"Delivered and iterated", stateClass:"measured",
    summary:"A redesigned training system translated one commercial behaviour model across live, virtual and asynchronous formats.",
    headline:"Redesigning commercial training around decisions, practice and transfer.", context:"A regional workshop programme needed a stronger learning architecture, consistent delivery and formats that worked across locations and schedules.", role:"I owned the instructional redesign, built and iterated the digital modules, facilitated the regional workshops and adapted delivery with local sales leaders for each market and format.",
    challenge:"The original structure relied too heavily on information delivery. It did not consistently move learners from understanding to real frontline decisions and observable behaviour.",
    diagnosis:"I mapped the critical moments in the workflow, the decisions that drive conversion and the points where confidence or discipline break down.",
    intervention:"I rebuilt the journey around four practical pillars and progressive application. The system was iterated through four Articulate versions, delivered across regional teams and adapted for in-person, live-online and asynchronous use.",
    deliverables:["Redesigned workshop architecture","Four Articulate iterations","Facilitator and participant materials","Asynchronous reinforcement","Regional delivery and localisation","Adoption and feedback trackers"],
    evidence:["Before-and-after workshop structure","Articulate course map","Training adoption tracker","Participant feedback","Delivery materials across three formats"],
    outcomeTitle:"One behaviour model, delivered consistently across markets and formats.", outcomes:[{value:"100% / 21 of 21",label:"EU cohort module completion"},{value:"98%",label:"EU cohort average assessment score"},{value:"Live + async",label:"Same model delivered in-person, live-online and asynchronously"}],
    note:"Completion and assessment scores are measured adoption of the training itself. They are stated as adoption, not as commercial impact — outcome attribution is treated separately in the Outbound Growth and Analytics cases. The scope details (iterations, formats, regions) are design choices, not results.", visualTitle:"One model across formats", visualCaption:"The redesign is documented through its course architecture and delivery materials rather than a single chart.", evidenceLabel:"Delivery and adoption"
  },
  {
    slug:"ramp-resilience", tag:"Performance support", title:"Ramp Resilience", state:"Built", stateClass:"built",
    summary:"A targeted intervention for the early-ramp performance dip, linking daily behaviour to pipeline development over three months.",
    headline:"Making early-ramp progress visible before results arrive.", context:"Newer commercial team members could interpret the normal early-ramp dip as failure before their activity had time to convert into pipeline.", role:"I mapped the early-ramp performance gap and designed the learning intervention, scorecard and manager reinforcement points for future rollout.",
    challenge:"Lagging results created uncertainty at the exact moment consistent activity mattered most. Generic encouragement did not explain what progress should look like.",
    diagnosis:"I mapped how inputs, leading indicators and pipeline stages compound across the first three months, then identified the critical confidence and behaviour dip.",
    intervention:"I built a focused learning experience that makes pipeline accumulation visible, distinguishes leading from lagging indicators and gives managers specific reinforcement points.",
    deliverables:["Three-month pipeline model","Early-ramp microlearning","Leading-indicator scorecard","Manager conversation guide","Reinforcement prompts"], evidence:["Pipeline progression model","Learning storyboard","Behaviour and confidence map","Manager support materials"],
    outcomeTitle:"The intervention makes progress coachable before revenue closes.", outcomes:[{value:"90-day model",label:"Pipeline accumulation made visible"},{value:"Learner + manager",label:"Support designed at both levels"},{value:"Leading signals",label:"Progress defined before lagging results"}],
    note:"This case demonstrates intervention design. Outcome measurement will require a comparable cohort after rollout.", visualTitle:"The ramp curve", visualCaption:"An anonymised model showing how activity becomes pipeline, and where targeted support protects consistency.", evidenceLabel:"Intervention design"
  },
  {
    slug:"boosting-adoption", tag:"Product adoption", title:"Boosting Adoption", state:"Implemented", stateClass:"measured",
    summary:"A cross-market adoption programme combining opportunity analysis, incentive logic, enablement and operational tracking.",
    headline:"Turning an underused commercial feature into a managed adoption motion.", context:"A revenue-supporting feature was available but usage was inconsistent across markets and frontline teams lacked a shared activation play.", role:"I diagnosed the adoption barriers and designed the relaunch, training and tracking infrastructure with commercial operations and regional managers.",
    challenge:"Low visibility, inconsistent eligibility knowledge and fragmented follow-up prevented the feature from becoming part of normal commercial execution.",
    diagnosis:"I segmented the opportunity, identified operational blockers and separated awareness, capability and process issues rather than treating adoption as a single training problem.",
    intervention:"I designed a multi-market relaunch with clear incentives, practical guidance, manager reinforcement and a tracker that made eligibility and progress visible.",
    deliverables:["Adoption opportunity analysis","Relaunch plan","Frontline training","Eligibility and incentive tracker","Manager reinforcement materials","Impact reporting structure"], evidence:["Anonymised adoption dashboard","Tracker logic","Training assets","Rollout communications"],
    outcomeTitle:"Adoption moved from a launch message to a visible operating process.", outcomes:[{value:"Cross-market",label:"One coordinated activation motion"},{value:"56 users",label:"Eligibility and progress tracked"},{value:"Full workflow",label:"Analysis, enablement, reinforcement and measurement"}],
    note:"The public case excludes customer, employee and market-identifying information.", visualTitle:"Adoption infrastructure", visualCaption:"A sanitised view of the tracker and the decision logic used to move each eligible user from awareness to action.", evidenceLabel:"Implementation evidence"
  },
  {
    slug:"customer-perspective", tag:"Behavioural workshop", title:"What the Customer Sees", state:"Piloted", stateClass:"built",
    summary:"An experiential workshop that reframed listing quality through the customer’s decision journey.",
    headline:"Changing seller behaviour by making the customer experience visible.", context:"Internal quality standards were understood in theory, but recurring execution gaps suggested that information alone was not changing behaviour.", role:"I reframed and rebuilt the workshop, facilitated the pilot and designed the follow-up tools with input from frontline leaders.",
    challenge:"Teams evaluated work from an internal production perspective rather than through the information, trust and risk cues experienced by the customer.",
    diagnosis:"I reframed the gap as a perspective problem: the most useful learning experience would let participants encounter the consequences of incomplete or unclear information themselves.",
    intervention:"I redesigned the workshop around customer-view decisions, comparison, discussion and application, followed by job aids and reinforcement rather than a one-off presentation.",
    deliverables:["Experiential workshop","Facilitator script","Decision-based activities","Reinforcement plan","Job aids"], evidence:["Workshop plan","Facilitator materials","Participant outputs","Request for repeat delivery"],
    outcomeTitle:"The pilot created demand for repeat delivery and reinforcement.", outcomes:[{value:"Delivered",label:"Pilot completed with a frontline team"},{value:"Repeat request",label:"Stakeholders asked for another session"},{value:"Job aids",label:"Learning extended beyond the workshop"}],
    note:"Qualitative evidence is stated as adoption, not presented as causal commercial impact.", visualTitle:"A new point of view", visualCaption:"Selected frames will show how the redesigned workshop moved from explanation to customer-centred decision practice.", evidenceLabel:"Adoption evidence"
  },
  {
    slug:"enablement-analytics", tag:"Performance intelligence", title:"Enablement Analytics", state:"Active capability", stateClass:"measured",
    summary:"A portfolio of analyses turning CRM, call and behavioural data into coaching priorities and commercial decisions.",
    headline:"Making performance patterns usable by frontline leaders.", context:"Commercial data existed across systems, but teams needed decision-ready views that separated funnel outcomes, behaviours and coaching opportunities.", role:"I framed the management questions, defined the metrics and translated the findings into coaching priorities with sales leaders and commercial operations.",
    challenge:"Dashboards could describe outcomes without explaining the behaviours behind them. Individual rankings also risked producing attention without useful coaching direction.",
    diagnosis:"I linked funnel movement, activity patterns, conversation behaviours and cohort context, then focused each analysis on a specific management decision.",
    intervention:"I created coaching views, behavioural scorecards, funnel analyses and segmentation models that helped leaders choose where enablement or reinforcement would have the highest value.",
    deliverables:["Funnel diagnostics","Behavioural scorecards","Call-quality benchmarks","Regional segmentation","Coaching opportunity views","Measurement recommendations"], evidence:["Anonymised analytical views","Metric definitions","Decision notes","Coaching applications"],
    outcomeTitle:"Reading the regional signal correctly changed where effort went.", outcomes:[{value:"+353%",label:"EU listings per month, post-launch (5.0 → 22.7)"},{value:"+330%",label:"EU net revenue per month (£11.1K → £47.8K)"},{value:"27 markets",label:"Screened against a reliability floor to separate signal from noise"}],
    note:"EU figures are an early, directional read three months post-launch, on a smaller base than the combined UK + EU view — treated as a regional signal, not a settled result. The market screen deliberately discounts any market below a 100-enquiry reliability floor, so apparent high performers on tiny samples are read as noise, not wins. Employee-level rankings and identifiable operational data are excluded.", visualTitle:"From dashboard to coaching decision", visualCaption:"Anonymised funnel and segmentation views with captions explaining the decision each analysis enabled. The market-conversion view separates reliable gaps from small-sample noise using an explicit reliability floor.", evidenceLabel:"Capability evidence"
    ,visuals:[
      {src:"/enablement-lab/evidence/analytics-market-conversion.webp",alt:"Market conversion scatter plot with a 100-enquiry reliability floor",caption:"Volume and conversion were separated so leaders could distinguish reliable gaps from small-sample noise. Markets below the reliability floor are read as noise, not performance."},
      {src:"/enablement-lab/evidence/analytics-market-profile.webp",alt:"Anonymised regional revenue comparison",caption:"Regional profiles connected net performance with value per transaction instead of relying on volume alone."}
    ]
  },
  {
    slug:"enablement-operating-system", tag:"Enablement strategy", title:"Enablement Operating System", state:"In development", stateClass:"planned",
    summary:"A company-wide architecture connecting foundational capability, continuous reinforcement and advanced performance.",
    headline:"Organising enablement as a coherent system rather than a collection of assets.", context:"Training, playbooks, coaching and resources existed across the organisation, but lacked a single architecture connecting purpose, audience and maturity.", role:"I designed the operating model and information architecture, mapped the existing portfolio and coordinated the hub blueprint with operational and executive stakeholders.",
    challenge:"Fragmented resources made it difficult to understand where each initiative belonged, what commercial need it served and how people progressed beyond initial training.",
    diagnosis:"I mapped the existing enablement portfolio, identified duplication and gaps, and separated foundational capability from continuous and advanced performance support.",
    intervention:"I designed a three-layer operating architecture—Foundation, Everboarding and Exceeding—and began translating it into an internal enablement hub and governance model.",
    deliverables:["Three-layer enablement architecture","Resource and initiative map","Information architecture","Enablement hub blueprint","Content governance principles","Gap analysis, including onboarding"], evidence:["Operating-model diagram","Resource inventory","Hub structure","Governance notes"],
    outcomeTitle:"The architecture gives existing enablement work one shared logic.", outcomes:[{value:"3 layers",label:"Foundation, Everboarding and Exceeding"},{value:"Portfolio map",label:"Initiatives organised by commercial purpose"},{value:"Gap visibility",label:"Missing capabilities separated from live work"}],
    note:"The architecture is defined and implementation is in progress. Onboarding remains a separate gap and is not represented as completed work.", visualTitle:"The operating architecture", visualCaption:"A clean system map will show how existing initiatives connect across capability maturity without exposing internal names or links.", evidenceLabel:"System scope"
  },
  {
    slug:"anchor-framework", tag:"Conversation enablement", title:"ANCHOR Reserve Framework", state:"Module built", stateClass:"built",
    summary:"A structured conversation framework and applied microlearning journey for high-stakes commercial decisions.",
    headline:"Turning a difficult commercial conversation into a repeatable decision process.", context:"Frontline teams needed a more consistent structure for setting expectations, communicating market evidence and reaching a clear next step.", role:"I designed the framework, built the instructional architecture and produced the applied microlearning and performance-support tools for leadership review and rollout.",
    challenge:"These conversations combined commercial judgement, risk communication and customer trust. Inconsistent structure made quality difficult to coach and repeat.",
    diagnosis:"I broke the conversation into six observable moves, each tied to a decision purpose rather than a script to memorise.",
    intervention:"I translated the ANCHOR framework into an applied Articulate journey with explanation, practice, recap, a behavioural rubric, a job aid and a capstone scenario.",
    deliverables:["Six-step conversation framework","Articulate microlearning","Scenario practice","Behavioural rubric","Job aid","Applied capstone"], evidence:["Published module opening","Full course architecture","Framework recap","Assessment and application structure"],
    outcomeTitle:"A complete, coachable learning journey is ready for rollout.", outcomes:[{value:"6 moves",label:"One observable conversation process"},{value:"Practice + rubric",label:"Application connected to coaching"},{value:"Complete module",label:"Production finished; measurement pending"}],
    note:"The module is built. Rollout, adoption and commercial impact will be added only when verified.", visualTitle:"Framework to application", visualCaption:"The final portfolio image will pair the course opening with the full learning architecture, after browser and account details are removed.", evidenceLabel:"Build evidence"
    ,visuals:[
      {src:"/enablement-lab/evidence/anchor-opening.webp",alt:"Opening screen of the ANCHOR reserve conversation course",caption:"The finished course gives the framework a clear identity and an immediate practical purpose."},
      {src:"/enablement-lab/evidence/anchor-architecture.webp",alt:"Course architecture showing the six ANCHOR stages and capstone",caption:"The learning path moves from foundations through six observable conversation moves to recap, rubric, job aid and capstone."}
    ]
  }
];

export function getProject(slug:string){ return projects.find(p => p.slug === slug); }
