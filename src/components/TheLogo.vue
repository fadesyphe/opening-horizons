<template>
  <RouterLink
    to="/"
    :class="classesLogo"
    @mouseenter="changeColor('orange')"
    @mouseleave="changeColor('white')"
  >
    <BaseIcon name="logo" viewBox="0 0 27 27" :class="classesIcon" />
    <p class="pl-2 text-xs md:text-[21px] leading-[0.7]">
      Открывая <br />
      <span class="ml-7 md:ml-12">горизонты</span>
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
        this.filling == 'white' ? 'text-white' : 'text-orange',
      ]
    },

    classesIcon() {
      return [
        'fill-none',
        'w-4',
        'md:w-6',
        'h-4',
        'md:h-6',
        'ease-out',
        'duration-500',
        this.filling == 'white' ? 'stroke-white' : 'stroke-orange',
      ]
    },
  },
}
</script>
