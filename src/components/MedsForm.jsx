import { useState } from "react"
// import HealthDataService from './containers/HealthService';
import '../App.css';
import { getMedications } from "../containers/HealthService";
import {postMedications} from "../containers/HealthService";

const MedsForm = ({addMedication}) => {



  const [formData, setFormData] = useState({
    medication: "",
    supplement: "",
    date: "",
  })

  const onChange = (e) =>{
  const newFormData = Object.assign({}, formData);
  newFormData[e.target.name] = e.target.value;
  setFormData(newFormData);
  }

  const onSubmit = (e) =>{
  e.preventDefault();
  postMedications(formData).then((data)=>{
      addMedication(data);
  })
  
  setFormData({
      medication: "",
      supplement: "",
      date: "",
  });
  }

  return (
    <form onSubmit={onSubmit} id="meds-form" >
        <h2>Add a Medication</h2>
        <div className="formWrap">
            <label htmlFor="medication">Add Medication:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="medication" 
                name="medication"
                value={formData.medication} />
        </div>
        <div className="formWrap">
            <label htmlFor="supplement">Add Supplement:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="supplement" 
                name="supplement"
                value={formData.supplement} />
        </div>
        <div className="formWrap">
            <label htmlFor="date">Date:</label>
            <input 
                onChange={onChange} 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}/>
        </div>
        <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>
  );

  }



    
export default MedsForm;