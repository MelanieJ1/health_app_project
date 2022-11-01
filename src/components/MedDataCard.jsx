const MedDataCard = ({medicalData, removeMedicalData}) => {

    // console.log(sighting);
    // const handleDelete = () => {
    //     deleteData(medicalData._id).then(()=>{
    //         removeMedicalData(sighting._id);
    //     })
    // }
        return (
        <>

            <h1>{MedDataCard.name}</h1>
            <p>Image: {MedDataCard.img_url}</p>
            {/* <button onClick={handleDelete}> 🗑 </button> */}

            
        </>
    )
}

export default MedDataCard;