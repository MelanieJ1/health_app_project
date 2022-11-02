import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/EatHealthyDetail';
import EatHealthyList from '../components/EatHealthyList';
import ItemSelector from '../components/EatHealthySelect';
import Advice from '../components/Advice';

const EatHealthyContainer = () => {
    const [item, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      getItems();
    }, [])

    const getItems = function(){
        fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30539')
        .then(res => res.json())
        .then(data => setItems(data.Result.Resources.Resource[0].RelatedItems.RelatedItem));
    }

    

    const onItemSelected = function(item){
        setSelectedItem(item);
    }

    return (
        <div className="main-container">
            <ItemSelector items={item} onItemSelected={onItemSelected} />
            {selectedItem ? <ItemDetail selectedItem={selectedItem} /> : null}
            
        </div>
    )
}

export default EatHealthyContainer;