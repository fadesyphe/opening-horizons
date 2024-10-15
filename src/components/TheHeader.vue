<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <RouterLink to="/">
          <p class="logo-text">
            Открывая <br />
            <span>горизонты</span>
          </p>
        </RouterLink>
        <div class="burger" id="MENU_BUTTON">
          <span></span>
        </div>
        <TheMenu />
      </div>
    </div>
  </header>
</template>

<script>
import TheMenu from "./TheMenu.vue"

export default {
  components: {
    TheMenu
  }
}
</script>
