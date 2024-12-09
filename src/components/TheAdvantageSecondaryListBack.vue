<template>
  <ul
    class="flex justify-between items-center gap-[1.5px] aspect-[0.41/1] w-[40%] -ml-3 lg:-ml-10 lg:w-[50%] max-h-[1150px]"
  >
    <li
      v-for="item in 8"
      :key="item"
      class="bg-orange w-[21.625%] h-full flex items-end justify-center relative"
    >
      <p
        v-if="item == '7'"
        :class="classes"
      >
        Открывая горизонты
      </p>
    </li>
  </ul>
</template>

<script>

export default {
  computed: {
    classes() {
      return [
        'text-xs',
        'text-white',
        'leading-none',
        'md:text-[40px]',
        'lg:text-[60px]',
        '-rotate-90',
        'mb-1',
        'md:mb-[18px]',
        'lg:mb-6',
        'w-max',
        'absolute',
        'z-20',
        'bottom-[15%]',
        'md:bottom-[23%]',
      ]
    }
  }
}
</script>

