// Add your papers here. Each entry will appear as a card on the site.
// To add a new paper: copy one object, fill in the fields, save the file.
//
// Fields:
//   title    — paper title
//   year     — publication year (number)
//   venue    — conference / journal / "Preprint" / etc.
//   abstract — short summary shown on the card
//   pdf      — path to PDF file in the /papers/ folder (or null to hide the button)
//   tags     — array of topic tags for filtering

const PAPERS = [
  {
    title: "Example: Autonomous Agents with Dynamic Goal Revision",
    year: 2025,
    venue: "Preprint",
    abstract:
      "We introduce a framework for autonomous agents capable of revising their own goal structures in response to environmental feedback, reducing task failure rates by 34% across benchmark environments.",
    pdf: "papers/example-paper.pdf",
    tags: ["agents", "autonomy", "reinforcement learning"],
  },
  {
    title: "Example: Emergent Communication in Multi-Agent Systems",
    year: 2024,
    venue: "NeurIPS 2024",
    abstract:
      "An investigation into how grounded language emerges spontaneously between agents trained in shared cooperative environments, with analysis of vocabulary structure and communicative efficiency.",
    pdf: null,
    tags: ["multi-agent", "emergent language", "communication"],
  },
];
