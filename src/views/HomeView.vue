<template>
  <TheHomeMain />
  <TheHomeClients />
  <TheHomeServices />
  <TheAdvantages />
  <TheHomeWork />
  <TheCarousel />
</template>

<script>
import TheHomeMain from '../components/TheHomeMain.vue'
import TheAdvantages from '../components/TheAdvantages.vue'
import TheHomeWork from '../components/TheHomeWork.vue'
import TheCarousel from '../components/TheCarousel.vue'
import TheHomeClients from '../components/TheHomeClients.vue'
import TheHomeServices from '../components/TheHomeServices.vue'

export default {
  components: {
    TheHomeMain,
    TheAdvantages,
    TheHomeWork,
    TheCarousel,
    TheHomeClients,
    TheHomeServices,
  },
}
</script>
