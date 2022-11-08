
const Supplements = ({supplement, deleteSupplement, updateSupplement }) => {

    const handleDeleteSupplement = () => {
        deleteSupplement(supplement._id);
      }

    

    const toggleActive = () => {
        updateSupplement({
          _id: supplement._id,
          supplement: supplement.supplement,
          date: supplement.date,
          active: !supplement.active
        });
      }


    

    return (
        <>
            <h1>List</h1>
            <h3 className={"activeSupplement-" + (supplement.active ? "yes" : "no")}>{supplement.supplement}</h3>
            <p>Date: {supplement.date}</p>
            <button onClick={toggleActive}>{"Active: " + (supplement.active ? "Yes" : "No")}</button>
            <br></br>
            <button onClick={handleDeleteSupplement}> <span>❌</span> Delete </button>
            <br></br>

        </>
    )
}

export default Supplements;