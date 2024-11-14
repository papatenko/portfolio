import "../App.css";
function DropdownMenu({ menu }) {
  return (
    <div className="flex items-center">
      {menu
        ? menu.map((item) => {
            return (
              <li key={item.name} className="mx-4 text-paragraph">
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })
        : null}
    </div>
  );
}
export default DropdownMenu;
