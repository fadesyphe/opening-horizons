<template>
  <header class="bg-green pt-2 pb-3 text-white">
    <div
      class="w-full max-w-[1100px] px-3 mx-auto flex justify-between items-center"
    >
      <TheLogo @click="closeMobileMenu" />
      <TheBurger @click-burger="clickBurger" :is-active="isActiveMenu" />
      <TheMenu :menu-list="menuList" />
      <TheMobileMenu
        :is-active="isActiveMenu"
        :menu-list="menuList"
        @close-mobile-menu="closeMobileMenu"
      />
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
      if (this.isActiveMenu) {
        document.querySelector('html').style.overflowY = 'hidden'
      } else {
        document.querySelector('html').style.overflowY = 'auto'
      }
    },

    closeMobileMenu() {
      this.isActiveMenu = false
      document.querySelector('html').style.overflowY = 'auto'
    },
  },

  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMobileMenu()
      }
    })
  },
}
</script>
