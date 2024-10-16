<template>
  <nav class="hidden md:flex items-center gap-16">
    <ul class="flex md:gap-10 lg:gap-[58px] items-center">
      <MenuItem
        v-for="item in menuList"
        :key="item.text"
        :link="item.link"
        :text="item.text"
        :class="'font-size-[15.3px]'"
      />
    </ul>
    <BaseButton class="hidden md:flex">Связаться</BaseButton>
  </nav>
</template>

<script>
import MenuItem from './MenuItem.vue'
import BaseButton from './BaseButton.vue'

export default {
  props: ['menuList'],

  components: {
    MenuItem,
    BaseButton,
  },
}
</script>
