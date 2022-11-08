import React from 'react';
import MedsForm from './MedsForm';
import '../App.js';



const Meds = ({addMedication}) => {
    return (

    <div className="Meds">
      {/* <header className="Meds-header"> */}
      <>  
      
     <div>
    
        <MedsForm addMedication={addMedication} />
    </div>
      

        </>
      {/* </header> */}
    </div>

    );
  }

export default Meds;