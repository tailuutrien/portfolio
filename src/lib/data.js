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
      // { name: "REST API", level: 65, status: "Familiar" },
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

export const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A task management application that allows users to create, update, delete, and organize daily tasks with a clean and responsive interface.",
    image: "/projects/task-manager.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Express.js", "Node.js"],
    github: "https://github.com/tailuutrien/mern_project_todo_web.git",
    demo: "https://mern-project-todo-web.onrender.com/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, and experience as a frontend developer.",
    image: "/projects/portfolio.png",
    technologies: ["React", "Javascript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/your-username/portfolio",
    demo: null,
  },
];

export const technologies = ["React", "JavaScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Express.js", "Node.js"]