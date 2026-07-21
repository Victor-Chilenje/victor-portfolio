import { profile } from "../../data/profile";
import SectionTitle from "../ui/SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Let's Connect"
          subtitle="Feel free to reach out for internships, collaborations or opportunities."
        />

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="flex items-center gap-4 rounded-xl bg-slate-950 p-5">
              <FaEnvelope className="text-2xl text-blue-500" />
              <div>
                <p className="text-white font-semibold">
                  Email
                </p>

                <p className="text-slate-400">
                  victorchilenje28@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-slate-950 p-5">
              <FaPhone className="text-2xl text-blue-500" />

              <div>
                <p className="text-white font-semibold">
                  Phone
                </p>

                <p className="text-slate-400">
                  +260 772 845 822
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-3xl">

              <a href="https://github.com/Victor-Chilenje">
                <FaGithub className="hover:text-blue-500" />
              </a>

              <a href="https://www.linkedin.com/in/victor-chilenje-6a0443350?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <FaLinkedin className="hover:text-blue-500" />
              </a>

              <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-500" />
              </a>

              <a
  href={`https://wa.me/${profile.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="hover:text-green-500" />
</a>

            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-slate-950 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-slate-950 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-lg bg-slate-950 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;