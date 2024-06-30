import React from 'react'
import './home.css';


function Home() {
  return (
    <div className='home'>
        <div className="main_content">
        <div className="images">
            <img src="https://fossbytes.com/wp-content/uploads/2021/05/amazon-prime-video-e1620148260167.jpg" alt="movies" />
        </div>

        <div className="text">
            <h1>Download Now</h1>
            <p>Lorem, ipsum.</p>
            <button className='btn1'>Download Now</button>
        </div>
        </div>
        <div className="center">
        <img src="https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" alt="movies" />
        <h2>Lorem ipsum dolor sit amet.ipsum</h2>
        </div>
    </div>
  )
}

export default Home