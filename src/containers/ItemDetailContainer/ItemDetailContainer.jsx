import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
function ItemDetailContainer() {

    const [product,setProduct] = useState({});
    const params = useParams()

    const url = `https://fakestoreapi.com/products/${params.detailId}`
    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(data => setProduct(data));

    },[params.detailId,url])

      const x = Object.keys(product)
//eventos declarados en JSX son eventos sinteticos 
  return (
    
    <>

      {x.length === 0 ? <Loading></Loading>  : <ItemDetail data={product}></ItemDetail> } 

    </>
      
    
  )
}

export default ItemDetailContainer