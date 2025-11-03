import "../index.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h3>Still confused about your career choice?</h3>
          <p>
            Our experts are here to guide you toward the right path.
            Book a free consultation today and discover your next step in UI/UX design.
          </p>
          <a href="#contactUs" className="cta-button">
            Consult With Our Experts
          </a>
        </div>

        <div className="cta-image">
          <img src="/images/cta.jpeg" alt="Consulting experts" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
