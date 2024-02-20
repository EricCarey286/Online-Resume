import "./Header.css";
import Socials from "../Socials/Socials";

function Header(props) {
  return (
    <header>
      <img id="headshot" src={props.image} alt="Eric W Carey Headshot" />
      <h1>Eric W Carey</h1>
      <p>Software Engineer</p>
      <p>Specializing in Frontend Development</p>

      <Socials />
    </header>
  );
}

export default Header;
