import React from 'react';
import MedsForm from './MedsForm';
import '../App.js';



const Meds = (addNewItem) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
     <div>
    
        <MedsForm addNewItem={addNewItem} />
    </div>
      

        </>
      </header>
    </div>

    );
  }

export default Meds;