<template>
  <RouterLink to="/" class="flex">
    <BaseIcon
      name="logo"
      viewBox="0 0 17.55 17.55"
      class="stroke-white fill-none w-[17.55px] h-[17.55px]"
    />
    <p class="logo-text">
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
}
</script>
