import '../index.css';

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-card">
        <img
          src="/images/testimonial.png"
          alt="Student"
          className="testimonial-image"
        />
        <div className="testimonial-content">
          <h1>What did they say</h1>
          <p>
            Higher education in the era of the industrial revolution 4.0 requires breakthrough learning using digital platforms that answer the challenges of millennial students to study anywhere, anytime and with leading-edge ICT technology. From student recruitment to teaching and learning administration processes.
          </p>
          <div className="testimonial-divider"></div>
          <h4>Briana Patton</h4>
          <span>Designer at Salesforce</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
