import "../index.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h3>Still confused about your career choice? consult with our experts</h3>
          <a href="#contactUs" className="cta-button">
            Contact Us
          </a>
        </div>

        <div className="cta-image">
          <img src="/src/assets/cta .png"/>
        </div>
      </div>
    </section>
  );
}

export default CTA;
