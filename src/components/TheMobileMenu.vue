<template>
  <Transition
    enter-active-class="transition-[left] duration-700"
    enter-from-class="left-full"
    enter-to-class="left-0"
    leave-active-class="transition-[left] duration-700"
    leave-from-class="left-0"
    leave-to-class="left-full"
  >
    <nav v-show="isActive" class="absolute w-screen h-screen bg-black/50 z-10">
      <ul class="flex flex-col h-full">
        <MenuItem
          v-for="item in menuList"
          :key="item.text"
          :link="item.link"
          :text="item.text"
          :class="'font-size-[15.3px]'"
        />
      </ul>
    </nav>
  </Transition>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  props: ['isActive', 'menuList'],

  components: {
    MenuItem,
  },
}
</script>
