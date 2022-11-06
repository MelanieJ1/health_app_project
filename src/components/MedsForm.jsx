import { useState } from "react"
// import HealthDataService from './containers/HealthService';
import '../App.css';
import { getMedications } from "../containers/HealthService";
import {postMedications} from "../containers/HealthService";

const MedsForm = ({addMedication}) => {

  const [medication, setMedication] = useState("");
  const [supplement, setSupplement] = useState("");
  const [date, setDate] = useState ("");
  const [active, setActive] = useState(false);

  const handleMedicationChange = (ev) => setMedication(ev.target.value);
  const handleSupplementChange = (ev) => setSupplement(ev.target.value);
  const handleDateChange = (ev) => setDate(ev.target.value);
  const handleActiveChange = (ev) => setActive(ev.target.checked ? ev.target.checked : false);

  const handleSubmit = ev => {
    ev.preventDefault();
    addMedication({
      medication: medication,
      supplement: supplement,
      date: date,
      active: active
    });
    setMedication("");
    setSupplement("");
    setDate("");
    setActive(false);
  }

  // const [checkedIn, setCheckedIn] = useState(false);

  // const handleCheckInChange = (ev) => setCheckedIn(ev.target.checked ? ev.target.checked : false);

  // const [formData, setFormData] = useState({
  //   medication: "",
  //   supplement: "",
  //   date: "",
  //   checkedIn: checkedIn
  // })

  // const onChange = (e) =>{
  // const newFormData = Object.assign({}, formData);
  // newFormData[e.target.name] = e.target.value;
  // setFormData(newFormData);
  // }

  // const onSubmit = (e) =>{
  // e.preventDefault();
  // postMedications(formData).then((data)=>{
  //     addMedication(data);
  // })
  
  // setFormData({
  //     medication: "",
  //     supplement: "",
  //     date: "",
  //     checked_in: checkedIn
  // });


  // }

  return (

<form onSubmit={handleSubmit}>
      <h1>Add a booking</h1>
      <div className="group">
        <label htmlFor="medication">Medication:</label>
        <input 
          type="text" 
          id="medication" 
          name="medication" 
          value={medication} 
          required 
          onChange={handleMedicationChange}
        />
      </div>
      <div className="group">
        <label htmlFor="supplement">Supplement:</label>
        <input 
          type="text" 
          id="supplement" 
          name="supplement" 
          value={supplement} 
          required 
          onChange={handleSupplementChange}
        />
      </div>

      <div className="group">
        <label htmlFor="date">Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={date} 
          required 
          onChange={handleDateChange}
        />
      </div>

      <div className="group">
        <label htmlFor="active">Active:</label>
        <input 
          type="checkbox" 
          id="active" 
          name="active" 
          value={active} 
          onChange={handleActiveChange}
        />
      </div>

      <input type="submit" name="submit" value="Save" />
    </form>

    // <form onSubmit={handleSubmit} id="meds-form" >
    //     <h2>Add a Medication</h2>
    //     <div className="formWrap">
    //         <label htmlFor="medication">Add Medication:</label>
    //         <input 
    //             onChange={handleMedicationChange} 
    //             type="text" 
    //             id="medication" 
    //             name="medication"
    //             value={medication} />
    //     </div>
    //     <div className="formWrap">
    //         <label htmlFor="supplement">Add Supplement:</label>
    //         <input 
    //             onChange={handleSupplementChange} 
    //             type="text" 
    //             id="supplement" 
    //             name="supplement"
    //             value={supplement} />
    //     </div>
    //     <div className="formWrap">
    //         <label htmlFor="date">Date:</label>
    //         <input 
    //             onChange={handleDateChange} 
    //             type="date" 
    //             id="date" 
    //             name="date" 
    //             value={date}/>
    //     </div>

    //     <div className="group">
    //     <label htmlFor="checked_in">Checked In:</label>
    //     <input 
    //       type="checkbox" 
    //       id="checked_in" 
    //       name="checked_in" 
    //       value={checkedIn} 
    //       onChange={handleCheckInChange}
    //     />
    //   </div>

    //     <input className="saveformbutton" type="submit" value="Save" id="save"/>
    //   </form>
  );

  }



    
export default MedsForm;