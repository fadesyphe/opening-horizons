<template>
  <button
    :class="classes"
    @mouseenter="hoverButton"
    @mouseleave="hoverButton"
    @click="clickButton"
  >
    <span :class="'h-px w-[26.78px] duration-500 ease-out bg-white ' + classesTop"></span>
    <span :class="'h-px w-[26.78px] duration-500 ease-out bg-white ' + classesMiddle"></span>
    <span :class="'h-px w-[26.78px] duration-500 ease-out bg-white ' + classesBottom"></span>
  </button>
</template>

<script>
export default {
  props: ['isActive'],

  data() {
    return {
      isPointed: false,
    }
  },

  methods: {
    hoverButton() {
      this.isPointed = !this.isPointed
    },

    clickButton() {
      this.$emit('clickBurger')
    }
  },

  computed: {
    classes() {
      return [
        'flex-col',
        'justify-between',
        'items-center',
        'aspect-square',
        'duration-500',
        'ease-out',
        'p-2',
        'rounded-full',
        'max-h-[31.3px]',
        'flex',
        'md:hidden',
        'relative',
        'z-20',
        this.isPointed ? 'bg-white/[.5]' : 'bg-none'
      ]
    },

    classesTop() {
      return [
        this.isActive ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0',
      ]
    },

    classesMiddle() {
      return [
        this.isActive ? 'opacity-0' : 'opacity-100'
      ]
    },

    classesBottom() {
      return [
        this.isActive ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'
      ]
    }
  }
}
</script>
