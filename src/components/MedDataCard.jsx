import { deleteMedication } from "../containers/HealthService";


const MedsCard = ({medication, deleteMedication, updateMedication }) => {

    const handleDeleteMedication = () => {
        deleteMedication(medication._id);
      }

    
    // const handleDelete = () => {
    //     deleteMedication(medication._id).then(()=>{
    //         removeMedication(medication._id);
    //     })
    // }

    const toggleActive = () => {
        updateMedication({
          _id: medication._id,
          medication: medication.medication,
          supplement: medication.supplement,
          date: medication.date,
          active: !medication.active
        });
      }


    

    return (
        <>
            <h1>List</h1>
            <h3 className={"active-" + (medication.active ? "yes" : "no")}>{medication.medication}</h3>
            <p>Medication: {medication.medication}</p>
            <p>Supplement: {medication.supplement}</p>
            <p>Date: {medication.date}</p>
            <button onClick={toggleActive}>{"Active: " + (medication.active ? "No" : "Yes")}</button>
            <br></br>
            <button onClick={handleDeleteMedication}> <span>❌</span> Delete </button>
            <hr></hr>

        </>
    )
}

export default MedsCard;