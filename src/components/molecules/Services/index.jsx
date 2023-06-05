import "./styles.css";

const services = [
  {
    name: "web Development",
    description:
      "Lorem ipsum dRisus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet.",
  },
  {
    name: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet.",
  },
  {
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac nisl, augue fermentum dis congue ornare dignissim lobortis. Est tincidunt purus enim amet.",
  },
];

function Services() {
  return (
    <div className="services" id="services">
      <h2 className="title">Services</h2>
      <div className="container">
        {services.map((service) => (
          <div className="service" key={service}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
