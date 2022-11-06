
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

<form onSubmit={handleSupplementSubmit}>
      <h1>Supplements</h1>
      <div className="supplements">
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


      <div className="supplements">
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

      <div className="supplements">
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



    
export default SupplementForm;