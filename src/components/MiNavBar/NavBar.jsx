import React from 'react'
import './styles.css'
import NavWidget from '../NavWidget/NavWidget';
function NavBar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="logo" href="/#">Ozeer</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupp"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navSupp">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="item">
            <a class="item" href="/#">Inicio</a>
          </li>
          <li class="item" >
            <a class="item" href="/#">Productos</a>
          </li>

          <li class="item">
            <a class="item" href="/#">Galeria</a>
          </li>
        </ul>


        <NavWidget></NavWidget>

      </div>
    </div>

  </nav>


  );
}

export default NavBar