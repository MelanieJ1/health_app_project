import { deleteMedication } from "../containers/HealthService";


const MedsCard = ({medication, deleteMedication, updateMedication }) => {

    const handleDeleteMedication = () => {
        deleteMedication(medication._id);
      }

    

    const toggleActive = () => {
        updateMedication({
          _id: medication._id,
          medication: medication.medication,
          date: medication.date,
          active: !medication.active
        });
      }


    

    return (
        <>
        <div className="med-page">
            <div className="meds">
          
            </div>
            <div className="meds">
            <h1 className={"active-" + (medication.active ? "yes" : "no")}>{medication.medication}</h1>
            </div>
            <div className="meds">
            <p>Date: {medication.date}</p>
            </div>
            <div className="meds">
            <button onClick={toggleActive}>{"Active: " + (medication.active ? "Yes" : "No")}</button>
            </div>
            <br></br>
            <div className="meds">
            <button onClick={handleDeleteMedication}> <span>❌</span> Delete </button>
            </div>
            <br></br>
            <br></br>
            <br></br>

          </div>

        </>
    )
}

export default MedsCard;