import "./Footer.css";
import Socials from "../Socials/Socials";

import githubImg from "../../assets/images/github.png";
import linkedinImg from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>Copyright © 2024 Eric W Carey. All Rights Reserved.</p>
      </div>
      <div className="footer-section">
        <Socials />
      </div>
    </footer>
  );
}
