import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import Button from './components/Button';
import { Navigation } from './components/navigation';

const App = () => {

  return (
    <div>
        <Navigation/>
    <header className = "center">
    <div className="container">
    <MainPage />
    </div>
    <Button className = 'button' color = 'white' text = 'Create Account'/>
    </header>
    </div>
  );
}

export default App;