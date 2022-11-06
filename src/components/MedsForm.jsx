import { useState } from "react"
import '../App.css';

const MedsForm = ({addMedication}) => {

  const [medication, setMedication] = useState("");
  const [date, setDate] = useState ("");
  const [active, setActive] = useState(false);

  const handleMedicationChange = (ev) => setMedication(ev.target.value);
  const handleDateChange = (ev) => setDate(ev.target.value);
  const handleActiveChange = (ev) => setActive(ev.target.checked ? ev.target.checked : false);

  const handleSubmit = ev => {
    ev.preventDefault();
    addMedication({
      medication: medication,
      date: date,
      active: active
    });
    setMedication("");
    setDate("");
    setActive(false);
  }

  
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

      )}



    
export default MedsForm;