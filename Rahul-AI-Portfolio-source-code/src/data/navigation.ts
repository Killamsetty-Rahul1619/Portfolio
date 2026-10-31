export interface NavItem {
  id: string;
  label: string;
}

/** Single source of truth for the page sections + navbar anchors. */
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "ai-twin", label: "AI Twin" },
  { id: "contact", label: "Contact" },
];
