
import { useState } from "react"
import '../App.css';

const SupplementForm = ({addSupplement}) => {

  const [supplement, setSupplement] = useState("");
  const [date, setDate] = useState ("");
  const [active, setActive] = useState(false);

  const handleSupplementChange = (ev) => setSupplement(ev.target.value);
  const handleDateChange = (ev) => setDate(ev.target.value);
  const handleActiveChange = (ev) => setActive(ev.target.checked ? ev.target.checked : false);

  const handleSupplementSubmit = ev => {
    ev.preventDefault();
    addSupplement({
      supplement: supplement,
      date: date,
      active: active
    });

    setSupplement("");
    setDate("");
    setActive(false);
  }

  
  return (

<form className="supp-form" onSubmit={handleSupplementSubmit}>
      {/* <div className="supp-header"><p>Add Supplement</p> </div> */}
      <div className="supplements-form">
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


      <div className="supplements-form">
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

      <div className="supplements-form">
        <label htmlFor="active">Active:</label>
        <input 
          type="checkbox" 
          class="active" 
          name="active" 
          value={active} 
          onChange={handleActiveChange}
        />
      </div>

      <input className="supplement-button" type="submit" name="submit" value="Save" />

    </form>

      )}



    
export default SupplementForm;