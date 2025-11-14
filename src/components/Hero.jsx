import { Link } from "react-router-dom";
import "../index.css";

function Hero() {

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Learn Any Skills <br /> To Advance Your <br /> Career Path
          </h1>
          <div className="vector">
            <img src="/src/assets/Vector 1.png" alt="Vector 1" />
          </div>

          <p>
            Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work.
          </p>

          <div className="hero-actions">
            <Link to="/" className="hero-btn">
              Explore Path
            </Link>

            <div className="hero-rating">
              <img src="/src/assets/user 1.png" alt="User 1" />
              <img src="/src/assets/user 2.png" alt="User 2" />
              <span className="stars">⭐⭐⭐⭐☆</span>
              <small>(4.5/5 from 10k Alumni)</small>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/src/assets/Learning - Video Course 1 (1).png" alt="Learning Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;