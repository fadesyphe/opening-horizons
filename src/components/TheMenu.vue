<template>
  <nav class="menu">
    <ul class="menu-list">
      <TheMenuItem
        v-for="item in menuList"
        :key="item.text"
        :link="item.link"
        :text="item.text"
      />
    </ul>
    <BaseButton>Связаться</BaseButton>
  </nav>
</template>

<script>
import TheMenuItem from './TheMenuItem.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    TheMenuItem,
    BaseButton
  },

  data() {
    return {
      menuList: [
        { link: 'about', text: 'О нас' },
        { link: 'services', text: 'Услуги' },
        { link: 'prices', text: 'Цены' },
        { link: 'portfolio', text: 'Портфолио' },
      ],
    }
  },
}
</script>
