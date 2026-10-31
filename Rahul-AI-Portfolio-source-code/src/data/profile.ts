export interface Profile {
  fullName: string;
  firstName: string;
  wordmark: string;
  roles: string[];
  currentRole: string;
  currentCompany: string;
  tagline: string;
  handwrittenQuote: string;
  heroLabels: string[];
  speechBubble: string;
}

/**
 * Editable identity/profile content. Kept separate from component code so the
 * site owner can update copy without touching UI components.
 */
export const profile: Profile = {
  fullName: "Killamsetty Rahul",
  firstName: "Rahul",
  wordmark: "RAHUL",
  roles: ["Software Engineer", "AI/ML", "Data Engineering", "Cloud"],
  currentRole: "Software Engineer",
  currentCompany: "Capgemini",
  tagline:
    "I build intelligent systems that turn data into decisions — across AI/ML, data engineering, and cloud.",
  handwrittenQuote: "Turning messy data into real decisions.",
  heroLabels: ["SOFTWARE ENGINEER", "AI & DATA", "CLOUD"],
  speechBubble:
    "Hi, I'm Rahul's AI twin — ask me anything about his work, projects, and research!",
};
