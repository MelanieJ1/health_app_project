import React from 'react';

const ItemSelector = ({items, onItemSelected}) => {

    const handleChange = function(event) {
        const chosenItem = items[event.target.value];
        onItemSelected(chosenItem);
    }
    
    const itemOptions = items.map((item, index) => {
      return <option value={index} key={index}>{item.Title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Topic</option>
            {itemOptions}
        </select>
    )
}

export default ItemSelector;