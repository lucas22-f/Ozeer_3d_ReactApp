import React from 'react'
import { Link } from "react-router-dom";
function Item(produc) {

  return (
    <div className="card bg-dark text-ligth m-3 misCards" style={{ width: "25rem"}}>
              <img className="card-img-top p-5" src={produc.producto.image} alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">{produc.producto.title}</h5>
                <p className="card-text">$ {produc.producto.price}</p>
                <Link className='btn btn-info' to={`/detail/${produc.producto.id}`}>Ver detalle</Link>
              </div>
    </div>
  )
}

export default Item