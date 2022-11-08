
const Images = ({image}) => {
    return (

    <div className="App">
      <header className="App-header">
      <>  
      
    <div>
      {/* <h1>Images</h1> */}
      <h1>{image.title}</h1>
      <p>{image.patient_name}</p>
      <p><img src={image.img_url} alt={'Diagnostic Image'} className='image' /></p>
    
    </div>
    </>
    
      </header>
      </div>

    

    );
  }

export default Images;