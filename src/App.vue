<template>
  <TheHeader />
  <TheMain>
    <RouterView />
  </TheMain>

  
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>
