import "./styles.css";
import Button from "../../atoms/Button";

import ImgSobre from "./../../../assets/img/sobre-img.jpg";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="image">
        <img
          src={ImgSobre}
          alt="Uma foto de uma mulher negra sorrindo com o céu limpo ao fundo"
        />
        <div className="buttons-pc">
          <Buttons />
        </div>
      </div>
      <div className="content">
        <h2>Sobre</h2>
        <p>
          Fames enim a pharetra adipiscing. Hac gravida sit sed tellus libero
          ridiculus. Vitae dolor integer ultricies nec mauris odio vulputate.
          Ante enim proin faucibus suspendisse eget feugiat elit. Nisl consequat
          pellentesque in posuere faucibus vitae, magna. Pulvinar risus
          suspendisse sem rhoncus sagittis, viverra odio turpis tempus.
        </p>
        <p>
          Tellus aliquet risus nunc egestas. Posuere libero ultricies sit ante
          eget fusce lacus hac viverra. Porta auctor faucibus odio vitae at
          aliquam suscipit in. Ac porttitor nibh mattis sed consequat quis.
        </p>
        <div className="buttons-mobile">
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default About;

const Buttons = () => {
  return (
    <div className="buttons">
      <Button href="http://linkedin.com/fulanadetal">
        <i className="fa-brands fa-linkedin fa-xl"></i>
        @FulanaDeTal
      </Button>
      <Button href="http://linkedin.com/fulanadetal">
        <i className="fa-brands fa-instagram fa-xl"></i>
        @FulanaDeTal
      </Button>
    </div>
  );
};
