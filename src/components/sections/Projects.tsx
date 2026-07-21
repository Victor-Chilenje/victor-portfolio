import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";


function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the software solutions I've built throughout my learning journey."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;