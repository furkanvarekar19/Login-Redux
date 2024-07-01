import React from 'react'
import './header.css';
import {useNavigate} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function Header() {
    const navigate = useNavigate();

  return (
    <div className='header'>
          <nav >
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAqEaFmMckH-xlskRZ-n6HgHYbQ-w_rDn_A&s " alt="img" />
            </div>
            <div className="navbar">
                <ul>
                    <li onClick={()=> navigate('/')} >HOME</li>
                    <li onClick={()=> navigate('/About')} >ABOUT</li>
                    <li onClick={()=> navigate('/Contact')}>CONTACT</li>
                    {/* <Home/> */}
                    {/* <About/>
                    <Contact/> */}
                </ul>
            </div>

            <div className='login-in'>
                <span className='login'>Log in</span>
                <button className='btn'>Get started</button>
            </div>
          </nav>
    </div>
  )
}

export default Header;