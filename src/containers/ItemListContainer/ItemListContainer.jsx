import React from 'react'
import ItemCount from '../../components/itemCount/ItemCount'

function ItemListContainer({greeting}) {
  return (
    <>
      <h1 className='container-fluid text-center mt-3 p-3'>{greeting}</h1>
      <ItemCount stock={4} initial={1}></ItemCount>
      
    </>
  )
}

export default ItemListContainer