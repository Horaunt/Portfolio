import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ChatbotWidget, MeteorCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          
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
        {/* <ChatbotWidget /> */}

      </div>
      
    </BrowserRouter>
  );
}

export default App;
