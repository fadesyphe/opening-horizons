<template>
  <section class="mt-9 md:mt-0">
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
