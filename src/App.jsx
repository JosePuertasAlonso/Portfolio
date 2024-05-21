import "./App.css";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {

  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (

    <main>
      <Intro />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />

    </main>

    )
}

export default App;
