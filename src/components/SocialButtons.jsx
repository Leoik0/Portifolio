import { Instagram, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram ofc",
    icon: <Instagram size={24} />,
    url: "https://instagram.com/leoiko_",
  },
  {
    name: "Instagram dev",
    icon: <Instagram size={24} />,
    url: "https://instagram.com/tech.gojo",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    url: "https://linkedin.com/in/leonardo-oliveira-a43016215/",
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
    url: "https://github.com/leoik0",
  },
  {
    name: "Twitter",
    icon: <Twitter size={24} />,
    url: "https://twitter.com/kiyopppon",
  },
];

const SocialButtons = () => {
  return (
    <div className="flex gap-4 social-btn">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 text-white transition-all duration-300 bg-gray-800 rounded-full group hover:bg-gray-700"
          aria-label={social.name}
        >
          {/* Badge flutuante */}
          <span className="absolute px-2 py-1 text-xs text-white transition-all duration-300 -translate-x-1/2 bg-gray-900 rounded-md opacity-0 whitespace-nowrap -top-6 left-1/2 group-hover:opacity-100">
            {social.name}
          </span>

          {/* Ícone */}
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
