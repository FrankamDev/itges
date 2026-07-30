import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

// interface SocialItem {
//   name: string;
//   icon: React.ElementType;
//   href: string;
//   color: string;
// }

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com",
    color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://tiktok.com",
    color:
      "hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
    color:
      "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    color: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/237690461830", // Remplacez par votre numéro
    color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
  },
];

export const Icon3D: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {socialMedia.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg ${social.color}`}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
};

export default Icon3D;
