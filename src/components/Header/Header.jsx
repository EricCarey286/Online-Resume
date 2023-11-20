import "./Header.css";

function Header(props) {
  return (
    <header>
      <img src={props.image} alt="Medal badge with a star" />
      <h1>Eric Carey</h1>
      <p>Software Engineer</p>
      <p>Specializing in Frontend Development</p>
    </header>
  );
}

export default Header;
