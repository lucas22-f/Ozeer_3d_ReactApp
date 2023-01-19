import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
function ItemDetailContainer() {

    const [product,setProduct] = useState({});
    const params = useParams()

    const url = `https://fakestoreapi.com/products/${params.detailId}`
    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(data => setProduct(data));

    },[params.detailId,url])



  return (
    
    <ItemDetail data={product}></ItemDetail>
    
  )
}

export default ItemDetailContainer