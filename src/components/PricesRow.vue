<template>
  <div :class="classes">
    <div>{{ name }}</div>
    <div class="text-center">{{ patterns }}</div>
    <div class="text-center">{{ sample }}</div>
    <div class="text-center">{{ sewing }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    patterns: String,
    sample: String,
    sewing: String,
    id: Number,
  },

  computed: {
    classes() {
      return [
        'max-w-[804px]',
        'mx-auto',
        'px-1',
        'md:px-2',
        'lg:px-4',
        'py-1',
        'md:py-2',
        'lg:py-4',
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
        this.id % 2 === 0 ? 'bg-yellow' : '',
      ]
    },
  },
}
</script>
