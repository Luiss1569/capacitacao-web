import "./styles.css";
import Card from "../../atoms/Card";

import Img1 from "../../../assets/img/cards/img-1.jpg";
import Img2 from "../../../assets/img/cards/img-2.jpg";
import Img3 from "../../../assets/img/cards/img-3.jpg";
import Button from "../../atoms/Button";

function Projects() {
  const projects = [
    {
      name: "FoodTruck",
      description:
        "Risus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet. augue fermentum dis dignissim.",
      img: Img1,
    },
    {
      name: "Academia Star",
      description:
        "Risus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet. augue fermentum dis dignissim.",
      img: Img2,
    },
    {
      name: "Lading Page",
      description:
        "Risus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet. augue fermentum dis dignissim.",
      img: Img3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="title">Projetos</h2>
      <div className="container">
        {projects.map((project) => (
          <Card key={project.name} {...project} />
        ))}
      </div>
      <Button
        href="http://github.com/Luiss1569"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github fa-xl"></i>@Luiss1569
      </Button>
    </section>
  );
}

export default Projects;
