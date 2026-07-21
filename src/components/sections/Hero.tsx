import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2"
>

        {/* Left Side */}
        <div>
          <p className="mb-4 text-blue-500 font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-7xl">
            Victor{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Chilenje
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Cloud Engineer",
              2000,
              "Software Developer",
              2000,
              "IT Specialist",
              2000,
              "Networking Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="mb-6 text-2xl font-semibold text-slate-300"
          />

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
            I build web, desktop and mobile applications while
            continuously learning cloud computing, networking and modern software
            engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              View Projects
            </button>

            <button   
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}  
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white hover:border-blue-500 hover:text-blue-500"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
  <img
    src="/images/Profile.JPG"
    alt="Victor Chilenje"
    className="h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
  />
</div>
        </div>

      </motion.div>
      
    </section>
  );
}

export default Hero;