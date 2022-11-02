
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Advice from "./components/Advice"; 
import Meds from './components/Meds';



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
    <>
    <Router>
    <NavBar />
      <Routes>
        {/* <Route path="/" element={< Home />} /> */}
        <Route path="/advice" element={< Advice />} />
        <Route path="/medication" element={< Meds />} />

      </Routes>
    </Router>


    </>


    // {/* <div className="App">
    //   <header className="App-header">
      
    //     <>
      
    // <div>
    //   <h1>Healthy Eating</h1>
    //  <EatHealthyContainer />
    // </div>
    //     </>
    //   </header>
    // </div> */}
  
  );

    
}

export default App;
