<template>
  <nav class="hidden md:flex items-center md:gap-x-10 lg:gap-x-[58px]">
    <ul class="flex md:gap-10 lg:gap-[58px] items-center">
      <MenuItem
        v-for="item in menuList"
        :key="item.text"
        :link="item.link"
        :text="item.text"
        :class="'text-[10px] lg:text-[15px]'"
      />
    </ul>
    <BaseButton class="hidden md:flex">Связаться</BaseButton>
  </nav>
</template>

<script>
import MenuItem from './MenuItem.vue'
import BaseButton from './BaseButton.vue'

export default {
  props: {
    menuList: Array
  },

  components: {
    MenuItem,
    BaseButton,
  },
}
</script>
