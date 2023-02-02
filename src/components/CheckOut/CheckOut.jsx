import React from 'react'
import { generateOrder } from '../../services/generateOrder'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import LoadingV2 from '../LoadingV2/LoadingV2';

function CheckOut({ products, total, removeAll }) {

  const [datosF, setDatosF] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  })
  const [loader, setLoader] = useState(false);
  const handleInputChange = (e) => {
    setDatosF({
      ...datosF,
      [e.target.name]: e.target.value
    })
  }

  const enviarDatos = async (e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const order = generateOrder({
        nombre: datosF.nombre,
        email: datosF.email,
        telefono: datosF.telefono,
        cart: products,
        total: total
      })
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      alert("Document written with ID: "+ docRef.id);
      removeAll();
   


    } catch (error) {
      console.log(error)
    } finally{
      setLoader(false)
    }



  }

  return (
    <form className='d-grid gap-3 text-ligth m-5 p-3' style={{ "width": 500 }} onSubmit={enviarDatos}>

      <label htmlFor="nombre">Nombre:</label>
      <input className='p-2' type="text" name='nombre' onChange={handleInputChange} />

      <label htmlFor="apellido">Apellido:</label>
      <input className='p-2' type="text" name='apellido' onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input className='p-2' type="email" name='email' onChange={handleInputChange} />

      <label htmlFor="telefono">Telefono:</label>
      <input className='p-2' type="text" name='telefono' onChange={handleInputChange} />
      {loader ? <LoadingV2></LoadingV2>
        : <button type="submit" className="btn btn-primary" >Enviar</button>

      }

    </form>
  )
}

export default CheckOut