export interface AboutFact {
  label: string;
  value: string;
}

export interface AboutContent {
  intro: string[];
  highlights: AboutFact[];
}

/** Editable About content — factual only, no invented statistics. */
export const about: AboutContent = {
  intro: [
    "I'm a Software Engineer at Capgemini with a B.Tech in Computer Science and Engineering, specialized in Artificial Intelligence and Robotics, from VIT Chennai.",
    "My work sits at the intersection of AI/ML, data engineering, and cloud — building systems that turn raw data into decisions. I've built a real-time fraud triage pipeline on Snowflake, trained deep-learning models for medical imaging, and shipped computer-vision and robotics projects end to end.",
    "I'm most excited by problems where a well-built data pipeline meets a thoughtful model — and where the result is something people can actually use.",
  ],
  highlights: [
    { label: "B.Tech Graduate", value: "2025" },
    { label: "Software Engineer", value: "Capgemini" },
    { label: "Research Internship", value: "CSIR-IICT · 3 months" },
    { label: "Published Research", value: "2 publications" },
  ],
};
