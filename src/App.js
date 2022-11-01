
import './App.css';

import { useEffect, useState } from 'react';

import MedDataCard from './components/MedDataCard';
import MedDataGrid from './components/MedDataGrid';
import { getMedData } from './components/MedDataService';



function App() {
  const [medicalData, setMedicalData] = useState([]);
  useEffect(()=>{
    getMedData()
    .then((data)=>{
      console.log(data);
      setMedicalData(data)
    })
  },[]);

  


  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hey</h1> */}
        <>
      
      <MedDataCard medicalData={medicalData} />

        </>
      </header>
    </div>
  );
}

export default App;
