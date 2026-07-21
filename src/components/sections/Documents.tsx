import SectionTitle from "../ui/SectionTitle";
import DocumentCard from "../ui/DocumentCard";
import { documents } from "../../data/documents";

const categories = [
  "Career",
  "Certification",
  "Achievement",
] as const;

function Documents() {
  return (
    <section id="documents" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Professional Library"
          subtitle="Access my career documents, certifications and achievements."
        />

        {categories.map((category) => (
          <div key={category} className="mb-16">

            <h2 className="mb-8 text-3xl font-bold text-white">
              {category}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {documents
                .filter((doc) => doc.category === category)
                .map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    document={doc}
                  />
                ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Documents;