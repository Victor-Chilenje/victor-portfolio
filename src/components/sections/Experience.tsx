import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "Final Year BIT Student",
    organization: "University of Lusaka",
    description:
      "Completing a Bachelor of Information Technology while focusing on software engineering, cloud computing and networking.",
  },
  {
    year: "2026",
    title: "Personal Software Projects",
    organization: "Independent",
    description:
      "Built desktop, web, mobile and AI applications using C#, React, PHP, Python, SQLite and MySQL.",
  },
  {
    year: "2026",
    title: "Cloud Engineering Journey",
    organization: "Self Learning",
    description:
      "Currently learning AWS, Azure, Docker and modern cloud technologies through hands-on projects.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="Experience"
          subtitle="My journey as a developer and IT student."
        />

        <div className="relative border-l-2 border-blue-500 ml-4">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8"
            >
              <span className="absolute -left-3 h-6 w-6 rounded-full bg-blue-500"></span>

              <p className="text-blue-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.organization}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;