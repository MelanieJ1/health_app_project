

import React from 'react'
import Images from './Diagnostics';


const DiagnosticList = ({images}) => {
  const imagesNodes = images.map(image => {
    return <Images key={image._id}
      image={image}
    />
  });

  return (
    <section id="images">
      <h2>Diagnostic Images</h2>
      <div id="images-wrapper">
        {imagesNodes}
      </div>
    </section>
  )
};

export default DiagnosticList;
