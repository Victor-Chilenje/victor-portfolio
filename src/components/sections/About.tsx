import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="About Me"
          subtitle="A passionate technology enthusiast focused on building practical software solutions and growing into a cloud engineering professional."
        />

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <div className="flex justify-center">
  <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-2xl">
    <img
      src="/images/About Me.jpeg"
      alt="Victor Chilenje"
      className="h-[420px] w-[340px] object-cover transition duration-500 hover:scale-105"
    />
  </div>
</div>
          </div>

          {/* Right */}
          <div>

            <h3 className="mb-6 text-3xl font-bold text-white">
              Final Year Bachelor of Information Technology Student
            </h3>

            <p className="mb-6 leading-8 text-slate-400">
              I'm Victor Chilenje, an aspiring Cloud Engineer and Software
              Developer with experience building desktop, web and AI-powered
              applications. I enjoy solving real-world problems through
              technology while continuously improving my technical skills.
            </p>

            <p className="mb-8 leading-8 text-slate-400">
              My interests include cloud computing, networking,
              cybersecurity, software engineering, databases and artificial
              intelligence. I believe in continuous learning and building
              projects that create meaningful impact.
            </p>


            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-xl bg-slate-950 p-6">
                <h4 className="text-4xl font-bold text-blue-500">
                  10+
                </h4>
                <p className="mt-2 text-slate-400">
                  Projects Built
                </p>
              </div>

              <div className="rounded-xl bg-slate-950 p-6">
                <h4 className="text-4xl font-bold text-blue-500">
                  8+
                </h4>
                <p className="mt-2 text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-xl bg-slate-950 p-6">
                <h4 className="text-4xl font-bold text-blue-500">
                  CCNA
                </h4>
                <p className="mt-2 text-slate-400">
                  Networking
                </p>
              </div>

              <div className="rounded-xl bg-slate-950 p-6">
                <h4 className="text-4xl font-bold text-blue-500">
                  2026
                </h4>
                <p className="mt-2 text-slate-400">
                  Graduation
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;