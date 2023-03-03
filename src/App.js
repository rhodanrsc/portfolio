import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import './App.css';

// Styles
import './styles/styles.css'

// Components
import SidePanel from "./components/SidePanel"
import Sections from './components/Sections';

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  return (
    <div className="App font" id='Home'>
      <Particles options={particlesOptions} init={particlesInit}/>
      <SidePanel />
      <header className="App-header">
        <div className='body'>
          <Sections />
        </div>
        
      </header>
      
    </div>
  );
}

export default App;