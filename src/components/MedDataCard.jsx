import { deleteMedication } from "../containers/HealthService";


const MedsCard = ({medication, removeMedication, updateMedication }) => {

    
    const handleDelete = () => {
        deleteMedication(medication._id).then(()=>{
            removeMedication(medication._id);
        })
    }

    const toggleActive = () => {
        updateMedication({
          _id: medication._id,
          medication: medication.medication,
          supplement: medication.supplement,
          date: medication.date,
          active: !medication.active
        });
      }


    // const handleDelete = () => {
    //     deleteMedication(medication._id);
    //     }


    return (
        <>
            <h1>List</h1>
            <h3 className={"active-" + (medication.active ? "yes" : "no")}>{medication.medication}</h3>
            <p>Medication: {medication.medication}</p>
            <p>Supplement: {medication.supplement}</p>
            <p>Date: {medication.date}</p>
            <button onClick={toggleActive}>{"Active: " + (medication.active ? "Yes" : "No")}</button>
            <br></br>
            <button onClick={handleDelete}> <span>❌</span> Delete </button>
            <hr></hr>

        </>
    )
}

export default MedsCard;