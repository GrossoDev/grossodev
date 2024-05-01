import './App.css'

function App() {
  return (
    <>
      <div className="hero-backdrop w-screen h-[calc(100vh-60px)] lg:h-[calc(100vh-90px)] flex justify-center">
        <div className="flex flex-col justify-center gap-16 text-[#fffaca]">
          <div>
            <h1 className="lg:text-7xl font-bold text-center">Giuliano Rosso</h1>
            <h3 className="font-light text-center">Fullstack developer - Specialized in the <b>ASP.Net</b>-<b>Angular</b>-<b>Azure</b> stack</h3>
          </div>
          
          <a className="flex justify-center space-x-16 no-underline" href="https://www.linkedin.com/in/giuliano-rosso-5b5808232/" target="_blank">
            <div className="h-16 px-4 rounded-full bg-[#0288d1] flex items-center">
              <img width="32" height="32" src="https://img.icons8.com/color/48/linkedin.png" aria-hidden/>
              <span className="font-bold text-white">LinkedIn</span>
            </div>
          </a>
          <a className="flex justify-center space-x-16 no-underline" href="https://github.com/GrossoDev" target="_blank">
            <div className="h-16 px-4 rounded-full bg-[#2302c4] flex items-center">
              <img width="32" height="32" src="https://img.icons8.com/color-glass/48/github--v1.png" aria-hidden/>
              <span className="font-bold ml-1 text-white">Github</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
