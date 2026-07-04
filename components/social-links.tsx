import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/lib/site-config";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
}

export function SocialLinks({
  size = "md",
}: SocialLinksProps) {
  const sizes = {
    sm: {
      button: "h-10 w-10",
      icon: "h-4 w-4",
    },
    md: {
      button: "h-12 w-12",
      icon: "h-5 w-5",
    },
    lg: {
      button: "h-14 w-14",
      icon: "h-6 w-6",
    },
  };

  return (
    <div className="flex items-center gap-4">
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={`group flex ${sizes[size].button} items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-foreground hover:shadow-lg`}
      >
        <FaGithub
          className={`${sizes[size].icon} text-muted-foreground transition-colors duration-300 group-hover:text-foreground`}
        />
      </a>

      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`group flex ${sizes[size].button} items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#0A66C2] hover:shadow-lg`}
      >
        <FaLinkedin
          className={`${sizes[size].icon} text-muted-foreground transition-colors duration-300 group-hover:text-[#0A66C2]`}
        />
      </a>

      <a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`group flex ${sizes[size].button} items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#25D366] hover:shadow-lg`}
      >
        <FaWhatsapp
          className={`${sizes[size].icon} text-muted-foreground transition-colors duration-300 group-hover:text-[#25D366]`}
        />
      </a>
    </div>
  );
}