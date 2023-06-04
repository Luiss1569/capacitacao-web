import "./styles.css";

function Card({ name, description, img }) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
