<template>
  <nav class="menu">
    <ul class="menu-list">
      <TheMenuItem v-for="item in menuList" :key="item.text" :link="item.link" :text="item.text"/>

    </ul>
    <button href="#" class="button button--menu" data-form>
      Связаться
      <svg viewBox="0 0 7.01 7.01" class="arrow-icon">
        <path d="M.32,3.51h6.38" />
        <path d="M3.51.32l3.19,3.19-3.19,3.19" />
      </svg>
    </button>
  </nav>
</template>

<script>
import TheMenuItem from "./TheMenuItem.vue"


export default {
  components: {
    TheMenuItem,
  },

  data() {
    return {
      menuList: [
        { link: 'about', text: 'О нас' },
        { link: 'services', text: 'Услуги' },
        { link: 'prices', text: 'Цены' },
        { link: 'portfolio', text: 'Портфолио' }
      ]
    }
  }
}
</script>
