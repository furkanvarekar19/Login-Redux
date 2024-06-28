
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element= {<Login/>} />
      <Route path='/home' element= {<Home/>} />
    </Routes>

    </div>
  );
}

export default App;
