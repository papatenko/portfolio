import DropdownMenu from "./DropdownMenu";

function Header({ links }) {
  return (
    <header className="flex p-4 justify-between">
      <div className="flex h-12 g-12">
        <img
          className="pr-4"
          src={process.env.PUBLIC_URL + "/img/icons/nft-icon.png"}
          alt="papatenko-pfp"
        ></img>
        <h1 className="text-4xl text-primary font-bold">Papatenko</h1>
      </div>
      <DropdownMenu menu={links} />
    </header>
  );
}

export default Header;
