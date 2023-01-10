import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/itemCount/ItemCount';
function ItemDetailContainer() {

    const [product,setProduct] = useState({});
    const params = useParams()

    const url = `https://fakestoreapi.com/products/${params.detailId}`
    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(data => setProduct(data));

    },[params.detailId,url])



  return (
    
    <div className="cols-12 bg-dark text-ligth m-3 rounded">
    <div className="row justify-content-evenly">
    <img className="col-md-4 card-image-top p-5" src={product.image} alt="Captura xd"></img>

    <div className="col-md-4 mt-5 p-4">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text mt-5">{product.description}</p>  
      <p className="card-text my-5" style={{fontSize:"50px"}}>$ {product.price}</p>
       <ItemCount stock={4} initial={1} title={product.title}></ItemCount>
    </div>
    </div>
    
   
    </div>

  )
}

export default ItemDetailContainer