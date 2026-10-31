export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  cgpa: string;
  note?: string;
}

/** Editable education entries. */
export const education: EducationEntry[] = [
  {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    institution: "Vellore Institute of Technology (VIT)",
    location: "Chennai, India",
    year: "2025",
    cgpa: "8.33 / 10",
    note: "Specialization in Artificial Intelligence and Robotics",
  },
];
