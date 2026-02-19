import {
  Copyright,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Braces,
  Code,
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
  };

  const IconPlusLink = ({ iconName, link, text }) => {
    return (
      <a href={link} className="flex gap-2 items-center">
        {icons[iconName] || <span>Icon not found</span>}
        <p>{text}</p>
      </a>
    );
  };

  return (
    <footer className="md:flex text-center p-4 md:justify-between text-paragraph grid gap-4">
      <IconPlusLink
        iconName="Copyright"
        text={new Date().getFullYear() + " Justin Kondratenko"}
      />
      <div className="grid gap-4 grid-flow-col grid-rows-3 md:grid-rows-1">
        {links
          ? links.map((item) => {
              return (
                <IconPlusLink
                  key={item.id}
                  iconName={item.name}
                  link={item.link}
                  text={item.name}
                />
              );
            })
          : null}
      </div>
      <IconPlusLink
        iconName="Code"
        link="https://github.com/papatenko/portfolio"
        text="Source Code"
      />
    </footer>
  );
}

export default Footer;
