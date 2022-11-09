
import React from 'react';
import EatHealthyContainer from '../containers/EatHealthyContainer';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import '../App.css';


const Advice = () => {
    return (

    <div className="App">
      <header className="health-header">
      <>  
      
    <div className='menu'>
      <h1>Healthy Eating</h1>
     <EatHealthyContainer/>
    </div>
        </>
     </header>
    </div>

    );
  }

export default Advice;