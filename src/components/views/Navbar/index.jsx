import "./styles.css";

function Navbar() {
  const links = [
    "home",
    "sobre",
    "projetos",
    "serviços",
    "crescimentos",
    "contato",
  ];

  return (
    <navbar className="navbar">
      <div className="logo">
        <h1>Portifólio</h1>
      </div>

      <div className="links">
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </div>
    </navbar>
  );
}

export default Navbar;
