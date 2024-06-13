import { useContext } from "react";
import linkedInIcon from "../../assets/icons/icons8-linkedin-96.png"
import githubIcon from "../../assets/icons/icons8-github-dark-96.png"
import CallToAction from './ActionButton'
import ThemeContext from "../../grosso-bootreact/utils/ThemeContext";

// eslint-disable-next-line react/prop-types
const Hero = () => {
  const { actualTheme } = useContext(ThemeContext);
  const dark = (actualTheme == "dark");
  
  return (
    <div className="relative min-h-[320px] h-[calc(100vh-60px)] lg:h-[calc(100vh-90px)] flex justify-center">
      <div style={{ zIndex: 20 }} className={"flex flex-col justify-center gap-16 " + (dark ? "text-[#fffaca]" : "text-gray-800")}>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Giuliano Rosso
          </h1>
          <h3 className="font-light text-center p-4">
            Fullstack developer - Specialized in the <b className="font-semibold">ASP.Net</b>&#8209;<b className="font-semibold">Angular</b>&#8209;<b className="font-semibold">Azure</b>&nbsp;stack
          </h3>
        </div>
        
        <div className="flex justify-center space-x-16">
          <CallToAction primary text="text-white" bg="bg-[#1300FA]" icon={linkedInIcon} label="LinkedIn" url="https://www.linkedin.com/in/giuliano-rosso-5b5808232/" />
          
          <CallToAction text="text-gray-800" bg="bg-gray-200" icon={githubIcon} label="Github" url="https://github.com/GrossoDev" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
