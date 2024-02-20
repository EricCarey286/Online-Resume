import headshot from "./assets/images/headshot.jpg";

import Header from "./components/Header/Header";
import NavBar from "./components/Nav/navBar";
import Footer from "./components/Footer/Footer";
import ConceptList from "./components/Concepts/ConceptList";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/Projects/ProjectSection";

function App() {
  return (
    <>
      <Header image={headshot} />
      <ConceptList />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
