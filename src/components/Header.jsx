import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Header() {
  const { user, theme, toggleTheme, logout } = useAppContext();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">UI Mastery</h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#courses">Courses</a>
          <a href="#bootcamp">Bootcamp</a>
          <a href="#events">Events</a>
          <a href="#article">Article</a>
          <a href="#contactUs" className="btn">Contact Us</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
          </button>

          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button onClick={logout} className="btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;