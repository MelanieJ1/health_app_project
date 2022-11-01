
import './App.css';

import { useEffect, useState } from 'react';

import MedDataCard from './components/MedDataCard';
import MedDataGrid from './components/MedDataGrid';
import { getMedData } from './components/MedDataService';
import EatHealthyContainer from './containers/EatHealthyContainer';



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
      
        <>
      
    <div>
      <h1>Healthy Eating</h1>
     <EatHealthyContainer />
    </div>
        </>
      </header>
    </div>
  );
}

export default App;
