import "./Socials.css";

import githubImg from "../../assets/images/github.png";
import linkedinImg from "../../assets/images/linkedin.png";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://github.com/ericcarey286" target="_blank">
        <img src={githubImg} />
      </a>
      <a href="https://linkedin.com/in/ericcarey1" target="_blank">
        <img src={linkedinImg} />
      </a>
    </div>
  );
}
