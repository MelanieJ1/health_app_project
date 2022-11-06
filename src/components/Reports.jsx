import React from "react";

const Reports = ({report}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
    <div>
      <h1>Reports</h1>
      <p>{report.title}</p>
      <p>{report.patient_name}</p>
      <p>{report.report}</p>
    
    </div>
    </>
    
      </header>
      </div>

    

    );
  }

export default Reports;