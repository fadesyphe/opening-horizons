<template>
  <header class="bg-green pt-2 pb-3 text-white relative">
    <div class="w-full max-w-[1100px] px-3 mx-auto">
      <div class="flex justify-between items-center">
        <TheLogo />
        <TheBurger @click-burger="clickBurger" :is-active="isActiveMenu" />
        <TheMenu :menu-list="menuList" />
        <TheMobileMenu :is-active="isActiveMenu" :menu-list="menuList" />
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from './TheLogo.vue'
import TheBurger from './TheBurger.vue'
import TheMenu from './TheMenu.vue'
import TheMobileMenu from './TheMobileMenu.vue'

export default {
  components: {
    TheLogo,
    TheBurger,
    TheMenu,
    TheMobileMenu,
  },

  data() {
    return {
      menuList: [
        { link: 'about', text: 'О нас' },
        { link: 'services', text: 'Услуги' },
        { link: 'prices', text: 'Цены' },
        { link: 'portfolio', text: 'Портфолио' },
      ],
      isActiveMenu: false,
    }
  },

  methods: {
    clickBurger() {
      this.isActiveMenu = !this.isActiveMenu
    },
  },
}
</script>
