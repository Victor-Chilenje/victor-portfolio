import { motion } from "framer-motion";
import { div } from "framer-motion/m";
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image?: string;
  status: "Completed" | "In Development";
};

function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
  image,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.2 }}
  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
>
  <div className="mb-4 flex items-center justify-between">
  <h3 className="text-2xl font-bold text-white">
    {title}
  </h3>

  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      status === "Completed"
        ? "bg-green-600 text-white"
        : "bg-amber-500 text-black"
    }`}
  >
    {status}
  </span>
</div>

      {image ? (
  <img
  src={image}
  alt={title}
  className="h-72 w-full object-contain bg-slate-950 p-4"
/>
) : (
  <div className="flex h-56 items-center justify-center bg-slate-800">
    <div className="text-center">
      <div className="mb-3 text-5xl">🚧</div>
      <p className="font-semibold text-white">
        Project Under Development
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Screenshots will be added soon.
      </p>
    </div>
  </div>
)}


      <div className="p-6">

        <p className="mb-5 text-slate-400">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
  {github !== "#" && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      GitHub
    </a>
  )}

  {live !== "#" && (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:border-blue-500"
    >
      Live Demo
    </a>
  )}
</div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;