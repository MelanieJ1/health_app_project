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
            <ul className="meds-list">
            {/* </div> */}
            {/* <div className="meds"> */}
            <li><h1 className={"active-" + (medication.active ? "yes" : "no")}>{medication.medication}</h1></li>
            {/* </div> */}
            {/* <div className="meds"> */}
            <li><p>Date: {medication.date}</p></li>
            {/* <br></br> */}
            {/* </div> */}
            {/* <div className="meds"> */}
            <li><button onClick={toggleActive}>{"Active: " + (medication.active ? "Yes" : "No")}</button></li>
            {/* </div> */}
            <br></br>
            {/* <div className="meds"> */}
            <li><button onClick={handleDeleteMedication}> <span>❌</span> Delete </button></li>
            <br></br>
            </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>
          <br></br>

        </>
    )
}

export default MedsCard;