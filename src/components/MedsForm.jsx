import { useState } from "react"
// import HealthDataService from './containers/HealthService';
import '../App.css';

const MedsForm = ({addMedication}) => {

    const [medicationInput, setMedicationInput] = useState("")
    const [supplementInput, setSupplementInput] = useState("")


      const handleMedictionInput = (e) => {
        setMedicationInput(e.target.value)
      }

      const handleSupplementInput = (e) => {
        setSupplementInput(e.target.value)
      }
    

      const onSubmit = (e) => {
        e.preventDefault()
        const newFormData = {
          "Medication": null,
          "Supplement": null,
        }
        newFormData.Medication = medicationInput
        newFormData.Supplement = supplementInput

        addMedication(newFormData)
        setMedicationInput("")
        setSupplementInput("")

        
      }

      return(

        
      <form onSubmit={onSubmit}>
        <h2>Medication and Supplements:</h2>
        
            <label htmlFor="Medication">Add Medication:</label>
            <br></br>
            <input
                  onChange={handleMedictionInput}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={medicationInput}
            />
            <br></br>

                        <label htmlFor="Supplements">Add Supplements:</label>
            <br></br>
            <input
                  onChange={handleSupplementInput}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={supplementInput}
            />

            <br></br>

            <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>

      )

            

            

    
        }

export default MedsForm;