import headshot from "./assets/images/headshot.jpg";

import Header from "./components/Header/Header";
import ConceptList from "./components/Concepts/ConceptList";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <>
      <Header image={headshot} />
      <ConceptList />
      <Jobs />
    </>
  );
}

export default App;
