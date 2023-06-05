import "./styles.css";

const navs = [
  {
    name: "home",
    link: "#home",
  },
  {
    name: "sobre",
    link: "#about",
  },
  {
    name: "projetos",
    link: "#projects",
  },
  {
    name: "serviços",
    link: "#services",
  },
  {
    name: "crescimentos",
    link: "#skills",
  },
  {
    name: "contato",
    link: "#contact",
  },
];

function Navbar() {
  return (
    <navbar className="navbar">
      <div className="logo">
        <h1>Portifólio</h1>
      </div>

      <div className="links">
        {navs.map((nav) => (
          <a key={nav.link} href={nav.link}>
            {nav.name}
          </a>
        ))}
      </div>
    </navbar>
  );
}

export default Navbar;
