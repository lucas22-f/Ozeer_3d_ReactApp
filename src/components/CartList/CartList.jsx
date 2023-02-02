import {useState } from 'react';
import {React,useContext} from 'react'
import { Shop } from '../../context/CartProvider'
import CheckOut from '../CheckOut/CheckOut';
 
function CartList({total}) {

    const {products,removeProduct,removeAll} = useContext(Shop);
    const [confirmed,setConfirmed] = useState(false);

    const confirmOrder = () => {
      setConfirmed(true);
    }
   

    
  return (
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
    <div className='btn btn-danger m-3' onClick={()=> removeAll()}>Eliminar todo</div>
    <div className='btn btn-info m-3'  onClick={()=>  confirmOrder()}>Confirmar Compra</div>
    <div className=''>TOTAL DEL CARRITO : {total}</div>

          {confirmed && <CheckOut products={products} total={total} removeAll={removeAll} ></CheckOut>}

  </div> 
  )
}

export default CartList