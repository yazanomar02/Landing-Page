import '../index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Courses from '../pages/Courses';

function Header() {


  return (
    <>

      <header className="header">
        <h1 className="logo">UI Mastery</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          {/* <Link to="/about">About</Link> */}

        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

    </>

  );
}

export default Header;
