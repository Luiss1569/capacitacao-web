import "./styles.css";

const services = ["Web Development", "Mobile Development", "Design"];

function Services() {
  return (
    <div className="services" id="services">
      <h2 className="title">Services</h2>
      <div className="container">
        {services.map((service) => (
          <div className="service" key={service}>
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
