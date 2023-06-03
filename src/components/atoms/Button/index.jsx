import "./styles.css";

function Button({
  children,
  href = "",
  target = "_blank",
  rel = "noreferrer",
}) {
  return (
    <a className="btn" href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export default Button;
