import MedDataCard from "./MedDataCard";

const MedDataGrid = ({medicalData}) => {
    const medicalDataList = medicalData.map((medicalData) =>{
        return <MedDataCard medicalData={medicalData} key={medicalData._id} />
    });
    
    return (
        <>
            {medicalDataList}
        </>
    );

}

export default MedDataGrid;