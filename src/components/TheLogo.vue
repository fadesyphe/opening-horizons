<template>
  <RouterLink
    to="/"
    :class="classesLogo"
    @mouseenter="changeColor('orange')"
    @mouseleave="changeColor('white')"
  >
    <BaseIcon name="logo" viewBox="0 0 27 27" :class="classesIcon" />
    <p class="ml-[3px] text-[8px] leading-[10px] md:text-sm md:leading-none">
      Открывая <br />
      <span class="ml-5 md:ml-8">горизонты</span>
    </p>
  </RouterLink>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon,
  },

  data() {
    return {
      filling: 'white',
    }
  },

  methods: {
    changeColor(color) {
      this.filling = color
    },
  },

  computed: {
    classesLogo() {
      return [
        'flex',
        'duration-500',
        'ease-out',
        'flex',
        'items-center',
        this.filling == 'white' ? 'text-white' : 'text-orange',
      ]
    },

    classesIcon() {
      return [
        'fill-none',
        'w-[10px]',
        'md:w-[17px]',
        'h-[10px]',
        'md:h-[17px]',
        'ease-out',
        'duration-500',
        this.filling == 'white' ? 'stroke-white' : 'stroke-orange',
      ]
    },
  },
}
</script>
