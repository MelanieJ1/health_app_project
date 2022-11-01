import React from 'react';

function ListItem({ item, onItemClick }) {

    const handleClick = function () {
      onItemClick(item);
    };
  
  
    return <li onClick={handleClick}>{item.name}</li>;
  }
  
  export default ListItem;