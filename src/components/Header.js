import DropdownMenu from "./DropdownMenu";
import DarkmodeToggle from "./ThemeToggle";

function Header({ links }) {
  return (
    <header className="flex p-4 justify-between">
      <div className="flex g-12 items-center">
        <img
          className="pr-4 h-12"
          src={process.env.PUBLIC_URL + "/img/icons/nft-icon.png"}
          alt="papatenko-pfp"
        ></img>
        <h1 className="text-4xl text-primary font-bold">Papatenko</h1>
      </div>
      <div className="flex items-center">
        <DropdownMenu menu={links} />
        <DarkmodeToggle />
      </div>
    </header>
  );
}

export default Header;
