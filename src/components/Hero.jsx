import { Link } from "react-router-dom";
import '../index.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-header">
        <h1 className="hero-logo">UI Mastery</h1>
      </div>
      <div className="hero-content">
        <h2>Master the Art of UI/UX Design</h2>
        <p>Build stunning interfaces and elevate user experiences with our expert-led courses.</p>
        <Link to="/courses" className="hero-button">Start Learning Now</Link>
      </div>
    </section>
  );
}

export default Hero;