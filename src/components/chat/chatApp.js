import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import Button from './components/Button';
import Preferences from './pages/Preferences';
import Settings from './pages/Settings';

const App = () => {

  return (
    <div>
     {/* <header className = "center">
     <div className="container"> */}
      {/* <MainPage /> */}
      {/* <Preferences/> */}
      <Settings/> 
     {/* </div> */}
     {/* <Button className = 'button' color = 'white' text = 'Create Account'/> */}
     {/* </header> */}
    </div>
  );
}

export default App;
