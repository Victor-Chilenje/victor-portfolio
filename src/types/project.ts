export interface Project {

    id: number;

    title: string;

    description: string;

    technologies: string[];

    github: string;

    live: string;

    image: string;

    status: "Completed" | "In Development";

}