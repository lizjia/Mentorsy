import './App.css';
import MainPage from './components/MainPage';
import { Navigation } from './components/navigation';
import Profile from './components/Profile';

const App = () => {

  return (
    <div>
      <Navigation />
      <header className="center">
        <div className="container">
          <MainPage />
        </div>
      </header>
      <Profile/>
    </div>
  );
}

export default App;