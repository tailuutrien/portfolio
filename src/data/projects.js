export const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A task management application that allows users to create, update, delete, and organize daily tasks with a clean and responsive interface.",
    image: `${import.meta.env.BASE_URL}projects/task-manager.png`,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    github: "https://github.com/tailuutrien/mern_project_todo_web.git",
    demo: "https://mern-project-todo-web.onrender.com/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, and experience as a frontend developer.",
    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
    technologies: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github: "https://github.com/tailuutrien/portfolio",
    demo: "https://tailuutrien.github.io/portfolio/",
  },
];

export const technologies = ["React", "JavaScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Express.js", "Node.js"]