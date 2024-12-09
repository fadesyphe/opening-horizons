<template>
  <h2 :class="titleClasses">{{ title }}</h2>
  <div :class="headClasses">
    <div>Наименование</div>
    <div class="text-center" v-for="item in headersTable" :key="item">
      {{ item }}
    </div>
  </div>
  <PricesRow
    v-for="(item, idx) in list"
    :key="idx"
    :name="item.name"
    :patterns="item.patterns"
    :sample="item.sample"
    :sewing="item.sewing"
    :id="idx"
  />
</template>

<script>
import PricesRow from './PricesRow.vue'

export default {
  components: {
    PricesRow,
  },

  props: {
    list: Array,
    id: Number,
  },

  data() {
    return {
      headersTable: ['Лекала', 'Образец', 'Пошив'],
      title: '',
    }
  },

  mounted() {
    this.id === 'dresses'
      ? (this.title = 'Платья')
      : this.id === 'shoulder'
        ? (this.title = 'Плечевые изделия')
        : this.id === 'belt'
          ? (this.title = 'Поясные изделия')
          : this.id === 'knitwear'
            ? (this.title = 'Трикотаж')
            : ''
  },

  computed: {
    titleClasses() {
      return [
        'text-sm',
        'leading-[14px]',
        'md:text-[26px]',
        'md:leading-[31px]',
        'lg:text-[38px]',
        'lg:leading-[46px]',
        'relative z-20',
        'text-center',
        'mt-4',
        'md:mt-6',
        'lg:mt-8',
      ]
    },

    headClasses() {
      return [
        'max-w-[804px]',
        'pb-1',
        'px-1',
        'md:px-2',
        'lg:px-4',

        'mx-auto',
        'mt-4',
        'md:mt-6',
        'lg:mt-8',
        'md:pb-4',
        'lg:pb-6',
        'mb-1',
        'md:mb-4',
        'lg:mb-6',

        'border-solid',
        'border-b',
        'border-black',

        'grid',
        'grid-cols-[1fr_repeat(3,_40px)]',
        'md:grid-cols-[1fr_repeat(3,_70px)]',
        'lg:grid-cols-[1fr_repeat(3,_100px)]',

        'text-[9px]',
        'leading-[10px]',
        'md:text-sm',
        'md:leading-[17px]',
        'lg:text-[21px]',
        'lg:leading-[25px]',
      ]
    },
  },
}
</script>
