import SectionTitle from "../ui/SectionTitle";
import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I've worked with throughout my academic and personal projects."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;