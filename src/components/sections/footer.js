import {
  Copyright,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Braces,
  Code,
  Computer,
  Mail,
} from "lucide-react";

function Footer({ links }) {
  const iconSize = 14;
  const icons = {
    Copyright: <Copyright size={iconSize} />,
    Linkedin: <Linkedin size={iconSize} />,
    Instagram: <Instagram size={iconSize} />,
    YouTube: <Youtube size={iconSize} />,
    Github: <Github size={iconSize} />,
    Leetcode: <Braces size={iconSize} />,
    Code: <Code size={iconSize} />,
    Devpost: <Computer size={iconSize} />,
    Mail: <Mail size={iconSize} />,
  };

  const IconPlusLink = ({ iconName, link, text }) => (
    <a
      href={link}
      className="flex gap-2 items-center hover:text-primary transition-colors"
    >
      {icons[iconName] || <span>Icon not found</span>}
      <p>{text}</p>
    </a>
  );

  return (
    <footer className="flex flex-col md:flex-row text-paragraph p-4 gap-6 md:gap-0 md:justify-between md:items-center">
      {/* Left — copyright + all links */}
      <IconPlusLink
        iconName="Copyright"
        text={new Date().getFullYear() + " Justin Kondratenko"}
      />
      <div className="flex flex-wrap gap-4">
        {links?.map((item) => (
          <IconPlusLink
            key={item.id}
            iconName={item.name}
            link={item.link}
            text={item.name}
          />
        ))}
        <IconPlusLink
          iconName="Code"
          link="https://github.com/papatenko/portfolio"
          text="Source Code"
        />
      </div>

      {/* Right — email CTA */}
      <div className="flex flex-col gap-1">
        <p className="text-xs text-paragraph/50 uppercase tracking-widest">
          Contact
        </p>
        <IconPlusLink
          iconName="Mail"
          link="mailto:justinkondratenko@proton.me"
          text="justinkondratenko@proton.me"
        />
      </div>
    </footer>
  );
}

export default Footer;
