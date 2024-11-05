<template>
  <RouterLink
    to="/"
    :class="classesLogo"
    @mouseenter="changeColor('orange')"
    @mouseleave="changeColor('white')"
  >
    <BaseIcon name="logo" viewBox="0 0 27 27" :class="classesIcon" />
    <p class="ml-1 lg:ml-2 text-[9px] md:text-[14px] lg:text-[21px] leading-[0.8em]">
      Открывая <br />
      <span class="ml-5 md:ml-8 lg:ml-12">горизонты</span>
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
        'w-4',
        'md:w-[25px]',
        'lg:w-8',
        'h-4',
        'md:h-[25px]',
        'lg:h-8',
        'ease-out',
        'duration-500',
        this.filling == 'white' ? 'stroke-white' : 'stroke-orange',
      ]
    },
  },
}
</script>
