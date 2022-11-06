import React from "react";

const Results = ({result}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
    <div>
      <br></br>
      <li>{result.title}</li>
      <li>{result.test_date}</li>
      <li>{result.patient_name}</li>
      <li>{result.white_cell_count}</li>
      <li>{result.platelets}</li>
      <li>{result.neutrophils}</li>
      <li>{result.lymphocytes}</li>
      <li>{result.monocytes}</li>
      <li>{result.eosinohils}</li>
      <li>{result.basophils}</li>
      <li>{result.erythrocyte_sedimentation_rate}</li>
      <li>{result.red_blood_cell_count}</li>
      <li>{result.haemoglobin_level}</li>
      <li>{result.red_blood_cell_mcv}</li>
      <li>{result.hemoglobin_mch}</li>
      <li>{result.glucose_level}</li>
      <li>{result.total_cholesterol}</li>
      <li>{result.triglycerids}</li>
      <li>{result.hdl_cholesterol}</li>
      <li>{result.ldl_cholesterol}</li>
      <li>{result.alanine_aminotransferase}</li>
      <li>{result.albumin}</li>
      <li>{result.serum_total_protein}</li>
      <li>{result.alkaline_phosphatase}</li>
      <br></br>
      <hr></hr>
      
    
    </div>
    </>
    
      </header>
      </div>

    

    );
  }

export default Results;