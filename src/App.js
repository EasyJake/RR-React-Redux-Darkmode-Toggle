import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatcher = useDispatch ()
  const mode = useSelector ( state => state);
  const onToggleModeClick = e = => {
    const actionCreator = mode.darkMode ? SetLightMode : setDarkMode
    dispatcher(actionCreator())
  }

  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
     
     <button type='button' 
     onClick={onToggleModeClick}>
    
        mode.darkMode ? 'Set Light Mode' : 'Set Dark Mode'

     }</button>


     <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
