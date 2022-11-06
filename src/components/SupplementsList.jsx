
import Supplements from "./Supplements";


const SupplementsList = ({supplements, updateSupplement, deleteSupplement}) => {
    const supplementNodes = supplements.map(supplement => {
        return <Supplements key={supplement._id} supplement={supplement}  
        updateSupplement={updateSupplement} deleteSupplement={deleteSupplement}/>
    });
    
    return (
        <>
            {supplementNodes}
        </>
    );

}

export default SupplementsList;



