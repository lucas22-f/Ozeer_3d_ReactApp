import React, { useState } from "react";
import "./styles.css";
function ItemCount({stock,initial,onAdd,title}) {



  const [count, setCount] = useState(initial);
  onAdd = (e) => {
  
    if (e.target.innerHTML==='+' && count >= initial && count < stock) {
      setCount(count + 1);
    }

    if (e.target.innerHTML==='-' && count > initial) {
      setCount(count - 1);
    }

  };


  return (
    <div className="miCard p-3 rounded">
      <p>{title}</p>
      <div className="control">
        
        <div onClick={onAdd} className="sum">+</div>
        <div className="count">{count}</div>
        <div onClick={onAdd} className="res">-</div>
      </div>

      <button className="add mt-3">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
