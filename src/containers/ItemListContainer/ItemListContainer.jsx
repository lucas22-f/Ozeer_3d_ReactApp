import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../components/Item/Item';
import SubNavbar from '../../components/SubNavbar/SubNavbar';
import './styles.css'

function ItemListContainer() {


  const url = "https://fakestoreapi.com/products"
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {

    fetch(url)
    .then(res => res.json())
    .then(data =>{
      
      if(params.categoryId){
        const filterArr = data.filter((el)=> el.category === params.categoryId)
        setData(filterArr)
      }else{
        setData(data)
      }

      
    
    })



  }, [params.categoryId])

  console.log(data)

  return (
    <>
      <SubNavbar></SubNavbar>
      <div className="container-fluid">
        <div className='row justify-content-center'>
          {data.map((produc => {
            return <Item producto={produc} key={produc.id}></Item>
          }))}

        </div>

      </div>



    </>
  )
}

export default ItemListContainer