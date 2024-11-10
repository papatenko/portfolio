import DropdownMenu from "./DropdownMenu";

function Header() {
  const links = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/justin-kondratenko-365699324/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/papatenk0/",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@PapaTenko",
    },
    {
      name: "Github",
      link: "https://github.com/papatenko",
    },
  ];

  return (
    <header className="flex p-4 justify-between">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <DropdownMenu menu={links} />
    </header>
  );
}

export default Header;
