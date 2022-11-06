import { updateMedication } from "../containers/HealthService";
import { updatingMedication} from "../App"
import MedsCard from "./MedDataCard";


const MedsList = ({medications, updateMedication, deleteMedication}) => {
    const medsNodes = medications.map(medication => {
        return <MedsCard key={medication._id} medication={medication}  
        updateMedication={updateMedication} deleteMedication={deleteMedication}/>
    });
    
    return (
        <>
            {medsNodes}
        </>
    );

}

export default MedsList;







