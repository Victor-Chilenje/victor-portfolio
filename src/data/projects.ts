import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sippi Lounge POS and Inventory Management System",
    description:
      "An online point-of-sale and inventory management system for Sippi Lounge.",
    technologies: ["HTML", "CSS", ".JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Victor-Chilenje/siipi-lounge",
    live: "#",
    image: "/images/projects/sippi.png",
    status: "Completed",
  },
  {
  id: 2,
  title: "Maize Disease Detection",
  description:
    "An AI-powered application that detects diseases affecting maize plants using image classification with TensorFlow.",
  technologies: ["Python", "TensorFlow", "OpenCV"],
  github: "#",
  live: "#",
  image: "",
  status: "In Development",
},
  {
    id: 3,
    title: "Loan Tracker",
    description:
      "A mobile application for tracking loans and managing loan-related information.",
    technologies: ["React Native", "Supabase", "Expo Go"],
    github: "https://github.com/Victor-Chilenje/loan-tracker",
    live: "#",
    image: "/images/projects/Loan-tracker.jpeg",
    status: "Completed",
  },
  {
    id: 4,
    title: "Zed Lyrics",
    description:
      "A lyrics platform with an admin dashboard for managing artists, songs and lyrics.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    live: "#",
    image: "",
    status: "In Development",
  },
];