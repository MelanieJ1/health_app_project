
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Advice from "./components/Advice"; 
import Meds from './components/Meds';
import HealthDataService from './containers/HealthService';
// import MedsForm from './components/MedsForm';
// import MedDataCard from './components/MedDataCard';
// import MedDataGrid from './components/MedDataGrid';
// import { getMedData } from './components/MedDataService';




function App() {
  const [item, setItems] = useState([]);
  

  useEffect(() => {
    HealthDataService.getHealthData().then((items) => setItems(items))
  }, [])

  const addNewItem = (item) => {
    HealthDataService.addNewItem(item).then((newItem) =>
      setItems([...item, newItem])
    )
  }

  


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


    
  
  );

    
}

export default App;
