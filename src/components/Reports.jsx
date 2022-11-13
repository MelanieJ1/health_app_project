import React from "react";

const Reports = ({report}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
    <div>
      <h1>{report.title}</h1>
      <p>{report.patient_name}</p>
      <p>{report.report}</p>
    </div>
    </>
    
      </header>
      </div>

    

    );
  }

export default Reports;