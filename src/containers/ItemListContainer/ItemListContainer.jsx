import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <h1 className='container-fluid text-center mt-3 p-3'>{greeting}</h1>
  )
}

export default ItemListContainer