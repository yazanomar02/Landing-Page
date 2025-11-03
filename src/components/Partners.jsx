import '../index.css';

const partnersLogos = ['/logos/1.png', '/logos/2.png', '/logos/3.png', '/logos/4.png', '/logos/5.png'];

function Partners() {
  return (
    <section className="partners">
      <h3>Our Trusted Partners</h3>
      <div className="partners-logos">
        {partnersLogos.map((logo, index) => (
          <div className="partner-logo" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;