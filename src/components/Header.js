import React from 'react'
import myLogo from '../img/Logo_mart.png';

export default function Header() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <img class="logo_img" src={myLogo} alt="" />
            <div className='presentation'></div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">О нас</li>
                <li class="nav-item">Контакты</li>
                <li class="nav-item">Кабинет</li>
              </ul>
              <div class="top-nav_search">форма поиска</div>
            </div>
          </div>
        </nav>
    </header>
  )
}
