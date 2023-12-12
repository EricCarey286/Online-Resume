import "./Concept.css";

function Concept({ image, title, description, link }) {
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}{link}</p>
    </li>
  );
}

export default Concept;
