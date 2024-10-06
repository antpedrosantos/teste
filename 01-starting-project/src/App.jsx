import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
