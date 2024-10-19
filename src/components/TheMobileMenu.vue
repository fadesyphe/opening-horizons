<template>
  <Transition
    enter-active-class="transition-opacity duration-700"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-700"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="absolute z-40 left-0 top-[51.3px] w-screen h-full bg-black/50"
      v-show="isActive"
      @click.self="$emit('closeMobileMenu')"
    >
      <Transition
        enter-active-class="transition-transform duration-700"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-700"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <nav
          class="w-full max-w-[375px] h-screen bg-green ml-auto"
          v-show="isActive"
          @click.self="$emit('closeMobileMenu')"
        >
          <ul class="flex flex-col gap-5">
            <MenuItem
              v-for="item in menuList"
              :key="item.text"
              :link="item.link"
              :text="item.text"
              :class="classesItems"
              @close-menu="$emit('closeMobileMenu')"
            />
          </ul>
        </nav>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  props: ['isActive', 'menuList'],

  components: {
    MenuItem,
  },

  computed: {
    classesItems() {
      return [
        'font-size-[15.3px]',
        'text-center',
        'border-t-[1px]',
        'border-white',
        'border-solid',
        'pt-5',
        'last:border-b-[1px]',
        'last:pb-5',
      ]
    },
  },

  emits: {
    closeMobileMenu: null,
  },
}
</script>
