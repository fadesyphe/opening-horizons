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
      <slot></slot>
    </div>
  </Transition>
</template>

<script>

export default {
  props: {
    isActive: Boolean,
  }
}
</script>
