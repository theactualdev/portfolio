interface Skill {
  name: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  location: string;
}

export const skills: Skill[] = [
  { name: "React.js" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "TailwindCSS" },
  { name: "HTML | CSS" },
  { name: "Javascript" },
  { name: "Shadcn UI" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Figma" },
  { name: "Vite" }
];

export const experience: Experience[] = [
  {
    period: "March 2023 - May 2023",
    role: "Intern Frontend Developer",
    company: "De-Microbytes IT",
    description:
      "Enhanced analytical and communication skills by collaborating with cross-functional teams of 5+ members to gather and clarify project requirements, leading to a 20% reduction in project delays and a 15% improvement in stakeholder satisfaction",
    location: "Lagos, Nigeria",
  },
  {
    period: "October 2023 - August 2024",
    role: "Lead Frontend Developer",
    company: "Schoolar.IO",
    description:
      "Engineered robust, component-based designs for web applications using React and TypeScript; findings helped resolve the three biggest causes affecting application crashes during testing phases",
    location: "Lagos, Nigeria ( REMOTE )",
  },
  {
    period: "November 2024 - January 2025",
    role: "Frontend Developer",
    company: "Soft-Web Digital LTD",
    description:
      "Developed and maintained 3+ web applications for clients, ensuring 100% compliance with project requirements and deadlines; received 95% positive feedback from clients on project delivery",
    location: "Lagos, Nigeria ( REMOTE )",
  }
];
