import "./styles.css";

import ImgLogo from "../../../assets/img/logo-byron-preta.png";

function Footer() {
  return (
    <footer>
      <a href="http://byronsolutions.com/" target="_blank" rel="noreferrer">
        <span>Desenvolvido por Luis Ricardo</span>
        <img src={ImgLogo} alt="Logotipo da byron.solutions" />
      </a>
    </footer>
  );
}

export default Footer;
