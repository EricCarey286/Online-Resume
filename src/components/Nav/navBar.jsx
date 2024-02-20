import "./navBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#concepts">About</a>
        </li>
        <li>
          <a href="#examples">Jobs</a>
        </li>
        <li>
          <a href="#contact-div">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
