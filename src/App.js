import NavBar from './components/MiNavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';


function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<h2>Ruta no encontrada 404</h2>} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
