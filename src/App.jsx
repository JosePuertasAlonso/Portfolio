import "./App.css";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();

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
      <LanguageSelector />
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
