
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
        <div className="supp-page">
          <div className="supplements">
          <ul className="supp-list">
            <li><h1 className={"activeSupplement-" + (supplement.active ? "yes" : "no")}>{supplement.supplement}</h1></li>
            <li><p>Date: {supplement.date}</p></li>
            <li><button onClick={toggleActive}>{"Active: " + (supplement.active ? "Yes" : "No")}</button></li>
            <br></br>
            <li><button className="delete-button" onClick={handleDeleteSupplement}> <span>❌</span> Delete </button></li>
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

export default Supplements;