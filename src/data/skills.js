import {
  Code2,
  Layers3,
  Wrench,
  Users,
  Lightbulb,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export const technicalSkills = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "HTML", level: 70, status: "Comfortable" },
      { name: "CSS", level: 60, status: "Familiar" },
      { name: "JavaScript", level: 80, status: "Comfortable" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers3,
    skills: [
      { name: "React", level: 85, status: "Comfortable" },
      { name: "Tailwind CSS", level: 60, status: "Familiar" },
      { name: "shadcn/ui", level: 65, status: "Familiar" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 70, status: "Comfortable" },
      { name: "Vite", level: 60, status: "Familiar" },
      { name: "REST API", level: 50, status: "Familiar" },
    ],
  },
];

export const softSkills = [
  {
    title: "Problem Solving",
    description:
      "Analyze problems, break them into smaller tasks, and find practical solutions.",
    icon: Lightbulb,
  },
  {
    title: "Self-learning",
    description:
      "Able to learn new technologies independently through documentation and practice.",
    icon: BookOpen,
  },
  {
    title: "Teamwork",
    description:
      "Comfortable collaborating, discussing ideas, and receiving feedback from teammates.",
    icon: Users,
  },
  {
    title: "Communication",
    description:
      "Communicate technical ideas clearly and actively listen to feedback.",
    icon: MessageSquare,
  },
];