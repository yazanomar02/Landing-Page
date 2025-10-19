import '../index.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">UI Mastery</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
