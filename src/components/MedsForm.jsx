import { useState } from "react"
import '../App.css';

const MedsForm = ({addNewData}) => {

    const [formData, setFormData] = useState({
        "Add Medication": null,
        "Add Supplement": null,

      })

      const onChange = (e) =>  {
        const NewFormData = Object.assign({}, formData)
        NewFormData[e.target.name] = e.target.value
        setFormData(NewFormData)
      }

      const onSubmit = (e) => {
        e.preventDefault()
        addNewData(formData)
        setFormData(
            {
                "Add Medication": "",
                "Add Supplement": "",
        
            }

        )
      }

      return(

        
      <form onSubmit={onSubmit}>
        <h2>Medication and Supplements:</h2>
        
            <label htmlFor="Medication">Add Medication:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={formData.Medication}
            />
            <br></br>

                        <label htmlFor="Supplements">Add Supplements:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={formData.Supplements}
            />

            <br></br>

            <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>

      )

            

            

    
        }

    export default MedsForm;