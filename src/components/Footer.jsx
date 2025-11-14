import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Event & Bootcamp</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI Design</li>
            <li>UI Research</li>
            <li>Presentation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Communication</h3>
          <ul>
            <li>Video Production</li>
            <li>Digital Marketing</li>
            <li>Branding</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About UI Mastery</h3>
          <ul>
            <li>Admission Info</li>
            <li>Article</li>
            <li>Group & Referral Program</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>support@uimastery.com</li>
            <li>+1 234 567 890</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <div className="footer-socials">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.5-3.5h2v3h-2a.5.5 0 0 0-.5.5V12H17l-.5 3h-2v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3 4.8a4.28 4.28 0 0 0 1.32 5.71 4.22 4.22 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.57 8.57 0 0 1 2 19.54a12.09 12.09 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 5.3a8.59 8.59 0 0 1-2.54.7z" />
              </svg>
            </a>

            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8a2.5 2.5 0 0 0-.02-4.5zM2 9h6v12H2zM9 9h5.5v1.7h.1a6 6 0 0 1 5.4-3c5.8 0 6.8 3.8 6.8 8.7V21h-6v-7.7c0-1.8 0-4-2.5-4s-2.9 2-2.9 4V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 UI Mastery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;