import React from 'react'

import { useContext} from 'react'
import { Shop } from '../../context/CartProvider'

function CartContainer() {

  const {products,removeProduct,removeAll} = useContext(Shop);
 
  let sum = 0;
  let cant = 0;

  products.forEach((el)=>{
    sum+=el.price;
    cant+=el.cantidad;
  })

  let total = sum*cant;


  return (
    <>

      { products.length 
        
        ? 
          <div>
            <table className="table text-center table-dark table-striped border-top">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((el)=>
                  <tr key={el.id}>
                    <th scope="row">{el.id}</th>
                    <td><img src={el.image} alt="cartImage" style={{width:200}} /></td>
                    <td>{el.title}</td>
                    <td>${el.price}</td>
                    <td>{el.cantidad}</td>
                    <td><div className='btn btn-info' onClick={()=> removeProduct(el.id)}>Eliminar</div></td> 
                 </tr>

                )}
              </tbody>
              
          
           
             
           
          
            </table>
            <div className='btn btn-danger m-3' onClick={()=> removeAll()}>eliminar todo</div>
            <div className=''>TOTAL DEL CARRITO : {total}</div>
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