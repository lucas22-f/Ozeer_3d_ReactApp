import React from 'react'
import './styles.css'
import NavWidget from '../NavWidget/NavWidget';
function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="logo" href="/#">Ozeer</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupp"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navSupp">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="item">
            <a className="item" href="/#">Inicio</a>
          </li>
          <li className="item" >
            <a className="item" href="/#">Productos</a>
          </li>

          <li className="item">
            <a className="item" href="/#">Galeria</a>
          </li>
        </ul>


        <NavWidget></NavWidget>

      </div>
    </div>

  </nav>


  );
}

export default NavBar