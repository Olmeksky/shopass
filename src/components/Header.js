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
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Гадание</a></li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Матрицы судьбы</a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a class="dropdown-item" href="/personal/">Персональная</a></li>
                  <li><a class="dropdown-item" href="/personal-dark/">Персональная (темная)</a></li>
                  <li><a class="dropdown-item" href="/sovmestimost/">Совместимости</a></li>
                  <li><a class="dropdown-item" href="/sovmestimost-dark/">Совместимости (темная)</a></li>
                </ul>
                </li>
              </ul>
              <div class="top-nav_search">форма поиска</div>
            </div>
          </div>
        </nav>
    </header>
  )
}
