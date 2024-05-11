import linkedInIcon from "../../assets/icons/icons8-linkedin-96.png"
import githubIcon from "../../assets/icons/icons8-github-dark-96.png"
import MagicCanvas from '../../components/MagicCanvas/MagicCanvas'
import CallToAction from './ActionButton'

const backdrop = {
  background:
    `linear-gradient(34deg, #00FA6750 0%, #00FA6720 20%, #21252900 50%, #FA100020 80%, #FA100050 100%)`,
  backgroundSize: "200% 200%"
};

const Hero = ({ theme }) => {
  const dark = (theme == "dark");
  
  return (
    <div style={backdrop} className="relative w-screen h-[calc(100vh-60px)] lg:h-[calc(100vh-90px)] flex justify-center">
      <MagicCanvas zIndex="10" color={dark ? "#ffffff30" : '#00000050'} />
        
      <div style={{ zIndex: 20 }} className={"flex flex-col justify-center gap-16 " + (dark ? "text-[#fffaca]" : "text-gray-800")}>
        <div>
          <h1 className="lg:text-7xl font-bold text-center">
            Giuliano Rosso
          </h1>
          <h3 className="font-light text-center">
            Fullstack developer - Specialized in the <b className="font-semibold">ASP.Net</b>-<b className="font-semibold">Angular</b>-<b className="font-semibold">Azure</b> stack
          </h3>
        </div>
        
        <div className="flex justify-center space-x-16">
          <CallToAction primary color="[#1300FA]" icon={linkedInIcon} label="LinkedIn" url="https://www.linkedin.com/in/giuliano-rosso-5b5808232/" />
          
          <CallToAction color="gray-800" icon={githubIcon} label="Github" url="https://github.com/GrossoDev" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
