import React from 'react';

function ListItem({ item, onItemClick }) {

    const handleClick = function () {
      onItemClick(item);
    };
  
  
    return <li onClick={handleClick}>{item.Title}</li>;
  }
  
  export default ListItem;