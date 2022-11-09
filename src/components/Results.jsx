import React from "react";

const Results = ({result}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
    <div className="test-results">
      <br></br>
      <h2>{result.title}</h2>
      <p>Test Date: {result.test_date}
      <br></br>
      Patient Name: {result.patient_name}</p>
      <li>white cell count: {result.white_cell_count}</li>
      <li>platelets: {result.platelets}</li>
      <li>neutrophils: {result.neutrophils}</li>
      <li>lymphocytes: {result.lymphocytes}</li>
      <li>monocytes: {result.monocytes}</li>
      <li>eosinohils: {result.eosinohils}</li>
      <li>basophils: {result.basophils}</li>
      <li>erythrocyte sedimentation rate: {result.erythrocyte_sedimentation_rate}</li>
      <li>red blood cell count: {result.red_blood_cell_count}</li>
      <li>haemoglobin level: {result.haemoglobin_level}</li>
      <li>red blood cell count mcv: {result.red_blood_cell_mcv}</li>
      <li>haemoglobin mch: {result.hemoglobin_mch}</li>
      <li>glucose level: {result.glucose_level}</li>
      <li>total cholesterol: {result.total_cholesterol}</li>
      <li>triglycerides: {result.triglycerids}</li>
      <li>hdl cholesterol: {result.hdl_cholesterol}</li>
      <li>ldl cholesterol: {result.ldl_cholesterol}</li>
      <li>alanine aminotransferase: {result.alanine_aminotransferase}</li>
      <li>albumin: {result.albumin}</li>
      <li>serum total protein: {result.serum_total_protein}</li>
      <li>alkaline phosphatase: {result.alkaline_phosphatase}</li>
      <br></br>
      <hr></hr>
      
    
    </div>
    </>
    
      </header>
      </div>

    

    );
  }

export default Results;