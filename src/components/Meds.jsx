import React from 'react';
import MedsForm from './MedsForm';
import '../App.js';



const Meds = ({addMedication}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
     <div>
    
        <MedsForm addMedication={addMedication} />
    </div>
      

        </>
      </header>
    </div>

    );
  }

export default Meds;