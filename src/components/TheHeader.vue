<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <TheLogo />
        <div class="burger" id="MENU_BUTTON">
          <span></span>
        </div>
        <TheMenu />
      </div>
    </div>
  </header>
</template>

<script>
import TheMenu from './TheMenu.vue'
import TheLogo from './TheLogo.vue'
export default {
  components: {
    TheMenu,
    TheLogo,
  },
}
</script>
