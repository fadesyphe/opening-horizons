<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <router-link to="/">
          <p class="logo-text">
            Открывая <br />
            <span>горизонты</span>
          </p>
        </router-link>
        <div class="burger" id="MENU_BUTTON">
          <span></span>
        </div>
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-item">
              <router-link to="/about">О нас</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/services">Услуги</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/prices">Цены</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/portfolio">Портфолио</router-link>
            </li>
          </ul>
          <button href="#" class="button button--menu" data-form>
            Связаться
            <svg viewBox="0 0 7.01 7.01" class="arrow-icon">
              <path d="M.32,3.51h6.38" />
              <path d="M3.51.32l3.19,3.19-3.19,3.19" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
