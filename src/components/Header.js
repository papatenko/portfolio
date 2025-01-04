import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex p-4 justify-between">
      <div className="flex g-12 items-center">
        <img
          className="pr-4 h-12"
          src={process.env.PUBLIC_URL + "/img/icons/nft_icon.png"}
          alt="papatenko-icon"
        ></img>
        <h1 className="text-4xl text-primary font-bold">Papatenko</h1>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
