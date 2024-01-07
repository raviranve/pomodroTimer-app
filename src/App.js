import logo from './logo.svg';
import './App.css';
import PomodoroTimer from './component/PomodoroTimer';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './component/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/polodroTimer' element={<PomodoroTimer/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
