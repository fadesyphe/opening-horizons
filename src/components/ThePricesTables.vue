<template>
  <section class="w-full max-w-[1100px] mx-auto pt-2 pb-6 px-10">
    <PriceTable
      v-for="(item, idx) in products"
      :key="idx"
      :list="item"
      :id="idx"
    />
  </section>
</template>

<script>
import PriceTable from './PricesTable.vue'
import prices from '../prices'

export default {
  components: {
    PriceTable,
  },

  data() {
    return {
      products: prices,
    }
  },
}
</script>
