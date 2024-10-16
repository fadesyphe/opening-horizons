<template>
  <TheHeader />
  <!-- <TheMain>
    <RouterView />
  </TheMain> -->
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  components: {
    TheHeader,
    TheMain,
  },
}
</script>
