
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Advice from "./components/Advice"; 
import { getMedications } from './containers/HealthService';
import { deleteMedication } from './containers/HealthService';


import ReportsList from './components/ReportsList';
import ResultsService from './containers/ResultsService';
import MedsForm from './components/MedsForm';
import MedsGrid from './components/MedDataGrid';





function App() {
  const [medications, setMedications] = useState([]);
  

  useEffect(() => {
    getMedications().then((allMedications) => setMedications(allMedications))
  }, []);

  

  const addMedication = (medication) =>{
    const temp = medications.map(s =>s);
    temp.push(medication);
    setMedications(temp);
  }

  const removeMedication = (id) => {
    const temp = medications.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setMedications(temp);
  }




  





  


  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        {/* <Route path="/" element={< Home />} /> */}
        <Route path="/advice" element={< Advice />} />
        <Route path="/medications" element={<>< MedsForm addMedication={addMedication} />< MedsGrid medications={medications}  removeMedication={removeMedication}/>
        </>} />
        {/* <Route path="/results" element={< ReportsList items={items} />} /> */}
        {/* <Route path="/images" element={< DiagnosticList viewImage={viewImage} />} /> */}


      </Routes>
    </Router>


    </>


    
  
  );

    
}

export default App;
