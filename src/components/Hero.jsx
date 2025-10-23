import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h2>Master the Art of UI/UX Design</h2>
      <p>Build stunning interfaces and elevate user experiences with our expert-led courses.</p>
      <Link to="/courses" className="hero-button">Start Learning Now</Link>
    </section>
  );
}

export default Hero;