<template>
  <svg :viewBox="$attrs.viewBox" :class="$attrs.class" v-html="path"></svg>
</template>
<script>
import icons from '../icons.js'
export default {
  props: {
    name: String,
  },
  data() {
    return {
      path: icons[this.name],
    }
  },
}
</script>
