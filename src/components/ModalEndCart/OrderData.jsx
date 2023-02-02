import React from 'react'

function OrderData({removeAll,data,datosF}) {

  console.log(data)

  return (
    //Componente que muestra los datos de la orden
        <>

            <div className='border rounded my-5'>
              <h5 className='p-3 border-bottom'>Datos de la orden:</h5>
              <p className="p-3 text-info bg-dark">Nombre: {datosF.nombre}</p>
              <p className='p-3 text-info bg-dark'>Apellido: {datosF.apellido}</p>
              <p className='p-3 text-info bg-dark'>Email: {datosF.email}</p>
              <p className='p-3 text-info bg-dark'>Telefono: {datosF.telefono}</p>
              <p className="p-3 text-info bg-dark">Id de la orden: {data.id}</p>
            
            </div>
           
          <button className='btn btn-success' onClick={removeAll}>Aceptar y Finalizar.</button>

        </>
  )
}

export default OrderData