import React, { useState, useEffect } from 'react';
import "../Styles/HomePage.css";
import Header from '../Components/Header';


const HomePage = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <Header currentPage="Home"/>
      <div className='home_logo'>
        <img src='https://cdn.enfsolar.com/ID/logo/5e2674a1a7550.jpg?v=1' alt='cardImage'/>
      </div>
      <div className="date">
            <p className="time">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p> <br/>
            {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
    </div>
  )
}

export default HomePage
