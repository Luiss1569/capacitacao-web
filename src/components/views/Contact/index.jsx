import "./styles.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Entre em contato!</h2>
      <ul>
        <li>
          <span className="icon-wrapper">
            <i className="fa-solid fa-phone fa-lg"></i>
          </span>
          (38) 99999-9999
        </li>
        <li>
          <span className="icon-wrapper">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </span>
          <a href="mailto:contato@email.com">contato@email.com</a>
        </li>
        <li>
          <span className="icon-wrapper">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </span>
          <a href="http://instagram.com/fulanadetal">@FulanaDeTal</a>
        </li>
      </ul>
      <cite>May the force be with you!</cite>
    </section>
  );
}

export default Contact;
