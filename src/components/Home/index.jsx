import "./styles.css";
import ImgDarth from "../../assets/img/darth-full.png";
import Button from "../atoms/Button";

function Home() {
  return (
    <section className="home" id="home">
      <div className="information">
        <div className="heading">
          <p>Bem vinde ao meu mundo!</p>
          <h1>Olá, sou Fernanda Sene</h1>
          <p>Desenvolvedora Front-end e Assessora de Marketing.</p>
        </div>
        <Button
          href="http://github.com/Luiss1569"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github fa-xl"></i>@Luiss1569
        </Button>
      </div>
      <img
        src={ImgDarth}
        alt="Darth Vader com as mãos à frente com um círculo vermelho atrás"
      />
    </section>
  );
}

export default Home;
