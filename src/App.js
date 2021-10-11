import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '././pages/HomePage';
import Education from '././pages/Education';

function App() {
  return (
    <div className="App">

    <switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/education' component={Education}/>
      </switch>
    </div>
  );
}

export default App;
