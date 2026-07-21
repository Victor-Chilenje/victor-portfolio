import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../../data/profile";

function SocialLinks() {
  return (
    <div className="flex gap-5 text-3xl">

      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-blue-500"
      >
        <FaGithub />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-blue-500"
      >
        <FaLinkedin />
      </a>

      <a
        href={profile.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-blue-500"
      >
        <FaFacebook />
      </a>

      <a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-green-500"
      >
        <FaWhatsapp />
      </a>

      <a
        href={`mailto:${profile.email}`}
        className="transition hover:text-red-400"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialLinks;