import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Loading from "../../components/Loading/Loading";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./styles.css";

function ItemListContainer() {

  // const url = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {

    //utilizando firebase y sus metodos para llamar a los documentos de las colecciones que tenemos en la nube.
    const getProducts = async () => {
      let querySnapshot;

      if (params.categoryId) {
        const q = query(collection(db, "products"), where("category", "==", params.categoryId));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }

      const productosFirebase = [];

      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data()
        }
        productosFirebase.push(product);
      });

      setData(productosFirebase)

    }

    getProducts();


    /*  De la forma tradicional si queremos hacer fetch a una api o datos locales. 
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
           if (params.categoryId) {
             const filterArr = data.filter((el) => el.category === params.categoryId);
   
             setData(filterArr);
   
           } else {
   
             setData(data);
           }
         });  
    */

  }, [params.categoryId]);
  return (
    <>
      <SubNavbar></SubNavbar>
      <div className="container-fluid">
        {Object.keys(data).length === 0 ? <Loading></Loading> : <ItemList data={data}></ItemList>}
      </div>
    </>
  );
}

export default ItemListContainer;
