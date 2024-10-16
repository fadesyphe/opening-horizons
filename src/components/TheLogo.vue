<template>
  <RouterLink
    to="/"
    :class="classesLogo"
    @mouseenter="changeColor('orange')"
    @mouseleave="changeColor('white')"
  >
    <BaseIcon name="logo" viewBox="0 0 27 27" :class="classesIcon" />
    <p class="pl-2 text-[21px] leading-[0.6]">
      Открывая <br />
      <span>горизонты</span>
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
      console.log(color)
    },
  },

  computed: {
    classesLogo() {
      return ['flex', 'duration-500', 'ease-out', this.filling == 'white' ? 'text-white' : 'text-orange']
    },

    classesIcon() {
      return [
        'fill-none',
        'w-[25.4px]',
        'h-[25.4px]',
        'ease-out',
        'duration-500',
        this.filling == 'white' ? 'stroke-white' : 'stroke-orange',
      ]
    },
  },
}
</script>
