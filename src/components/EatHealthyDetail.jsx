import React from 'react';
const ItemDetail = ({selectedItem}) => {
    return (
        
        <div>
            <h3>{selectedItem.region}</h3>
            <p>{selectedItem.Url}</p>
        
        </div>
    )
  }
  
  export default ItemDetail;