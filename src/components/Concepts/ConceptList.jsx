import "./ConceptList.css";

import Concept from "./Concept";
import { CORE_CONCEPTS } from "../../data";

function ConceptList(props) {
  return (
    <ul id="concepts">
      {CORE_CONCEPTS.map((conceptItem) => (
        <Concept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  );
}

export default ConceptList;
