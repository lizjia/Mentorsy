import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import Button from './components/Button';

const App = () => {

  return (
    <header className = "center">
    <div className="container">
      <MainPage />
    </div>
    <Button className = 'button' color = 'white' text = 'Create Account'/>
    </header>
  );
}

export default App;
