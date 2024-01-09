import "./Footer.css";

import githubImg from "../../assets/images/github.png";
import linkedinImg from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>Copyright © 2024 Eric W Carey. All Rights Reserved.</p>
      </div>
      <div className="footer-section">
        <a href="https://github.com/ericcarey286" target="_blank">
          <img src={githubImg} />
        </a>
        <a href="https://linkedin.com/in/ericcarey1" target="_blank">
          <img src={linkedinImg} />
        </a>
      </div>
    </footer>
  );
}
