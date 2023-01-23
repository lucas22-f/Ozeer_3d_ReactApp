import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/CartProvider'

function CartContainer() {

  const {products,removeProduct,removeAll} = useContext(Shop);


  return (
    <>

      { products.length 
        
        ? 
          <div>
            {products.map(el =>
            <div key={el.id}> {el.title} 
              <div className='btn btn-info' onClick={()=> removeProduct(el.id)}>Eliminar</div> 
            </div>
            )} 
            <div className='btn btn-danger' onClick={()=> removeAll()}>eliminar todo</div>
          </div> 
        :  
          <div>
            Carrito vacio
          </div> 
       }
    
    </>
  )
}

export default CartContainer