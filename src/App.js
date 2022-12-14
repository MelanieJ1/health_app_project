
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Advice from "./components/Advice"; 
import { getMedications } from './containers/HealthService';
import { deleteMedication } from './containers/HealthService';
import { updateMedication } from './containers/HealthService';
import Reports from './components/Reports';
import { getReports } from './containers/ReportsService';
import ReportsList from '../src/components/ReportsList'
import ResultsList from './components/ResultsList';
import DiagnosticList from './components/DiagnosticList';
import SupplementsList from './components/SupplementsList';

import MedsForm from './components/MedsForm';
import MedsGrid from './components/MedDataGrid';
import { addMedication } from "../src/containers/HealthService";
import MedsList from './components/MedDataGrid';
import HealthService from './containers/HealthService';
import SupplementsService from './containers/SupplementsService';
import { getImages } from '../src/containers/DiagnosticService';
import { getResults } from '../src/containers/ResultsService';
// import { getSupplements } from '../src/containers/SupplementsService';
import SupplementForm from './components/SupplementsForm';
import Title from './components/Title';





function App() {
  const [medications, setMedications] = useState([]);
  const [supplements, setSupplements] = useState([]);
  const [reports, setReports] = useState([]);
  const [results, setResults] = useState([]);
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    HealthService.getMedications().then(medications => setMedications(medications))
  }, []);

  useEffect(()=>{
    getReports().then(reports => setReports(reports))
  }, []);

  useEffect(()=>{
    getResults().then(results => setResults(results))
  }, []);

  useEffect(()=>{
    getImages().then(images => setImages(images))
  }, []);

  useEffect(()=>{
    SupplementsService.getSupplements().then(supplements => setSupplements(supplements))
  }, []);


  

  // const addMedication = (medication) =>{
  //   const temp = medications.map(s =>s);
  //   temp.push(medication);
  //   setMedications(temp);
  // }

  const createMedication = newMedication => {
    HealthService.addMedication(newMedication)
      .then(savedMedication => setMedications([ ...medications, savedMedication ]));
  };


  const updateMedication = updatedMedication => {
    // req to server to update booking in DB
    HealthService.updateMedication(updatedMedication);

    // update locally
    const updatedMedicationIndex = medications.findIndex(medication => medication._id === updatedMedication._id);
    const updatedMedications = [...medications];
    updatedMedications[updatedMedicationIndex] = updatedMedication;
    setMedications(updatedMedications);
  };



  const deleteMedication = idToDelete => {
    // req to server to delete booking from DB
    HealthService.deleteMedication(idToDelete);
    setMedications(medications.filter(medication => medication._id !== idToDelete));
  }










  const createSupplement = newSupplement => {
    SupplementsService.addSupplement(newSupplement)
      .then(savedSupplement => setSupplements([ ...supplements, savedSupplement ]));
  };


  const updateSupplement = updatedSupplement => {
    // req to server to update booking in DB
    SupplementsService.updateSupplement(updatedSupplement);

    // update locally
    const updatedSupplementIndex = supplements.findIndex(supplement => supplement._id === updatedSupplement._id);
    const updatedSupplements = [...supplements];
    updatedSupplements[updatedSupplementIndex] = updatedSupplement;
    setSupplements(updatedSupplements);
  };



  const deleteSupplement = idToDelete => {
    // req to server to delete booking from DB
    SupplementsService.deleteSupplement(idToDelete);
    setSupplements(supplements.filter(supplement => supplement._id !== idToDelete));
  }



  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={< Title />} />
        <Route path="/advice" element={< Advice />} />
        <Route path="/medications" element={<>< MedsForm addMedication={createMedication} /><br></br>< MedsList medications={medications}
          updateMedication={updateMedication}
          deleteMedication={deleteMedication}
        />
        </>}
        />
        <Route path="/supplements" element={<>< SupplementForm addSupplement={createSupplement} /><br></br>< SupplementsList supplements={supplements}
          updateSupplement={updateSupplement}
          deleteSupplement={deleteSupplement}
        />
        </>}
         />
        <Route path="/reports" element={< ReportsList reports={reports}/>} />
        <Route path="/results" element={< ResultsList results={results}/>} />
        <Route path="/images" element={< DiagnosticList images={images} />} />


      </Routes>
    </Router>


    </>


    
  
  );

    
}

export default App;
