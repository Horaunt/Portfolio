import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ChatbotWidget } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          {/* <ChatWidget steps={steps} theme={theme} config={config} /> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      
        <div className='relative z-0'>
          <Contact />
          
        </div>
        <StarsCanvas />
        <ChatbotWidget />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
