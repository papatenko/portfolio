function Footer({ links }) {
  return (
    <footer className="md:flex text-center p-4 justify-between text-paragraph">
      <p>2023 PapaTenko. All rights reserved.</p>
      <div className="grid gap-4 md:grid-flow-col grid-flow-row">
        {links
          ? links.map((item) => {
            return (
              <p>
                <a href={item.link}>{item.name}</a>
              </p>
            );
          })
          : null}
      </div>
      <p>
        <a href="https://github.com/papatenko/portfolio">Source Code</a>
      </p>
    </footer>
  );
}

export default Footer;
