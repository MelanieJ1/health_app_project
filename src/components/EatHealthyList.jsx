import React from 'react';
import ListItem from './EatHealthyListItem';

const ItemList = ({items, onItemClick}) => {

    const itemsItems = items.map((item, index) => {
      return <ListItem item={item} key={index} onItemClick={onItemClick} />
    })

  return (
    <div>
    <ul>
      {itemsItems}
    </ul>
  </div>
  )
}

export default ItemList;