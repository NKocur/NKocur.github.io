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
    title: "TRACE: Trajectory-Grounded Anti-Clustered Episodic Retrieval for LLM Agent Memory",
    year: 2026,
    venue: "Preprint",
    abstract:
      "Every existing memory retrieval method for LLM agents frames retrieval as query-to-memory similarity matching — a paradigm with four structural weaknesses: query-state mismatch, semantic co-clustering, causal blindness in temporal supersession, and positional bias in context assembly. TRACE replaces cosine similarity with a principled Marginal Epistemic Utility (MEU) formulation built on five components: a Trajectory Encoder that aggregates the agent's full reasoning chain via exponentially-decayed weighted averaging; an Atomic Query Decomposer that breaks composite queries into independent sub-questions with one-to-one memory assignment; a Causal Validity Graph (CVG) that tracks which memories causally supersede others; a Temporal Neighborhood Expander that recovers date and duration facts that embed weakly on semantics alone; and a Position-Optimal Assembler that exploits the U-shaped transformer attention profile. The MEU function is provably submodular, guaranteeing a (1−1/e) approximation of optimal selection. On a seven-scenario in-house benchmark, TRACE achieves 82.7% F1 (89.0% recall, 78.9% precision) vs. H-MEM's 63.2% F1 — a +19.5 pp gap — winning all seven scenarios with 0% False Affirmation Rate. On public benchmarks (LoCoMo, HotpotQA, MuSiQue, FRAMES, EverMemBench), TRACE and H-MEM reach near-parity overall (80.9% vs 79.6% macro retrieval F1), with TRACE stronger on multi-hop reasoning and H-MEM stronger on structured factual retrieval.",
    pdf: "papers/TRACE.pdf",
    tags: ["agents", "memory", "retrieval", "multi-hop reasoning", "LLMs"],
  },
];
