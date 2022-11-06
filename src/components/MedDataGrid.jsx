import MedsCard from "./MedDataCard";


const MedsGrid = ({medications, removeMedication, updateBooking}) => {
    const medsList = medications.map(medication => {
        return <MedsCard key={medication._id} medication={medication}  
        removeMedication={removeMedication} updateBooking={updateBooking}/>
    });
    
    return (
        <>
            {medsList}
        </>
    );

}

export default MedsGrid;







