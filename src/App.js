import './App.css';
import MainPage from './components/MainPage';
import { Navigation } from './components/navigation';

const App = () => {

  return (
    <div>
      <Navigation />
      <header className="center">
        <div className="container">
          <MainPage />
        </div>
      </header>
    </div>
  );
}

export default App;