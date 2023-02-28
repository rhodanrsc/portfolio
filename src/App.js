import logo from './logo.svg';
import './App.css';

// Styles
import './styles/styles.css'

// Components
import SidePanel from "./components/SidePanel"
import Sections from './components/Sections';



function App() {
  return (
    <div className="App font" id='Home'>
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