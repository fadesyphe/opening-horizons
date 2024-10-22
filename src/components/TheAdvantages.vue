<template>
  <section class="section section--advantages mt-9">
    <TheAdvantagesMain />
    <TheAdvantagesFirstList />
    <TheAdvantagesSecondaryList />
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import TheAdvantagesMain from './TheAdvantagesMain.vue'
import TheAdvantagesFirstList from './TheAdvantagesFirstList.vue'
import TheAdvantagesSecondaryList from './TheAdvantagesSecondaryList.vue'

export default {
  components: {
    BaseButton,
    TheAdvantagesMain,
    TheAdvantagesFirstList,
    TheAdvantagesSecondaryList
  },
}
</script>
