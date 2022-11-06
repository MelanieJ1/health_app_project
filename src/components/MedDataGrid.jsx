import MedsCard from "./MedDataCard";


const MedsGrid = ({medications, removeMedication}) => {
    const medsList = medications.map((medication) =>{
        return <MedsCard medication={medication} key={medication._id} removeMedication={removeMedication} />
    });
    
    return (
        <>
            {medsList}
        </>
    );

}

export default MedsGrid;







