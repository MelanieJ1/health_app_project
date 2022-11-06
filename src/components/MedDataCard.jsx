import { deleteMedication } from "../containers/HealthService";


const MedsCard = ({medication, removeMedication }) => {

    
    const handleDelete = () => {
        deleteMedication(medication._id).then(()=>{
            removeMedication(medication._id);
        })
    }
    return (
        <>
            <h1>List</h1>
            <p>Medication: {medication.medication}</p>
            <p>Supplement: {medication.supplement}</p>
            <p>Date: {medication.date}</p>
            <button onClick={handleDelete}> Delete </button>
            <hr></hr>

        </>
    )
}

export default MedsCard;