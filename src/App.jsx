import { useContext } from "react";
import Hero from './components/Hero/Hero';
import Background from './components/Background';
import ThemeContext from "./grosso-bootreact/utils/ThemeContext";

function App() {
  const { actualTheme } = useContext(ThemeContext);
  const dark = (actualTheme == "dark");

  return (
    <div className="relative overflow-hidden">
      <Background dark={dark} />

      <Hero />

      <div className="container flex flex-col align-middle my-4 p-8 rounded-[48px] bg-[var(--bs-body-bg)] ring-1 ring-white/10">
        <h1 className="flex justify-center">Projects</h1>
        
      </div>
    </div>
  )
}

export default App
