import React from 'react'
import ItemCount from '../itemCount/ItemCount'
function ItemDetail({data}) {
    
 


  return (
    <div className="cols-12 bg-dark text-ligth m-3 rounded">
    <div className="row justify-content-evenly">
    <img className="col-md-4 card-image-top p-5" src={data.image} alt="Captura xd"></img>

    <div className="col-md-4 mt-5 p-4">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text mt-5">{data.description}</p>  
      <p className="card-text my-5" style={{fontSize:"50px"}}>$ {data.price}</p>
       <ItemCount stock={4} initial={1} title={data.title}></ItemCount>
    </div>
    </div>
    
   
    </div>
  )
}

export default ItemDetail