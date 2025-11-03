import '../index.css';
import { Link } from "react-router-dom";

function Header() {


  return (
    <>
      <header className="header">
        <h1 className="logo">UI Mastery</h1>
        <nav>
          <Link to="/">Home</Link>
          <a href='#courses'>Courses</a>
          <a href='#bootcamp'>Bootcamp</a>
          <a href='#events'>Events</a>
          <a href='#article'>Article</a>
          <a href="#contactUs" className="btn-contact">Contact Us</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
