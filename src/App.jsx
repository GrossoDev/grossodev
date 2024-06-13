import { useContext } from "react";
import Hero from './components/Hero/Hero';
import Background from './components/Background';
import Projects from './components/Projects';
import ThemeContext from "./grosso-bootreact/utils/ThemeContext";

function App() {
  const { actualTheme } = useContext(ThemeContext);
  const dark = (actualTheme == "dark");

  return (
    <div className="relative overflow-hidden">
      <Background dark={dark} />

      <Hero />

      <Projects />
    </div>
  )
}

export default App
