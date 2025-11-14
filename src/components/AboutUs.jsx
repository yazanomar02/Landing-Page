import '../index.css';

function AboutUs() {
  return (
    <section id='aboutUs' className="about-us">
      <div className="about-container">
        <div className="about-image">
          <img src="images/about-illustration.jpg" alt="UI Design Illustration" />
        </div>
        <div className="about-text">
          <h3>Owlearn helps you Become Experienced</h3>
          <p>
            Owlearn provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.
          </p>
          <a href="#courses" className="btn-link">Become a Member</a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs