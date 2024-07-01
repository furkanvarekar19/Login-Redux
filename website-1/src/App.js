
import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import Header from './component/Header';
import {Routes,Route} from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
     
     <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />

     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
