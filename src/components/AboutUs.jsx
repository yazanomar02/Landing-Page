import '../index.css';

function AboutUs() {
  return (
    <section id='aboutUs' className="about-us">
      <div className="about-container">
        <div className="about-text">
          <h3>Why Choose UI Mastery?</h3>
          <p>
            Our platform provides high-quality courses that help you grow from beginner
            to professional designer. Learn by doing, get mentorship from experts,
            and join a vibrant community of creatives. 
          </p>
          <a href="/courses" className="btn-link">Explore Courses</a>
        </div>
        <div className="about-image">
          <img src="images/about-illustration.jpg" alt="UI Design Illustration" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs