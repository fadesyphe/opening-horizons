<template>
  <button :class="[buttonClasses, $attrs.class]">
    <slot></slot>
    <BaseIcon name="arrow" viewBox="0 0 7 7" :class="iconClasses" />
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon,
  },

  computed: {
    iconClasses() {
      return [
        'stroke-[#92A581]',
        'fill-none',
        'w-[4px]',
        'h-[4px]',
        'md:w-[7px]',
        'md:h-[7px]',
        'lg:w-[9px]',
        'lg:h-[9px]',
        'translate-y-full',
        'md:translate-y-1/2',
        'lg:translate-y-full',
      ]
    },

    buttonClasses() {
      return [
        'gap-1',
        'md:gap-2',
        'px-3',
        'pt-3',
        'pb-4',
        'bg-white',
        'text-[#92A581]',
        'text-[8px]',
        'md:text-[10px]',
        'lg:text-[15px]',
        'leading-[10px]',
        'md:leading-[12px]',
        'lg:leading-5',
        'rounded-[7px]',
        'hover:bg-orange',
        'ease-out',
        'duration-500',
        'relative',
        'z-20',
      ]
    },
  },
}
</script>
