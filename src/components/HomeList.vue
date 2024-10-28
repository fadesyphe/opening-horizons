<template>
  <ul class="pt-5 relative z-20 text-left md:flex md:flex-col md:gap-4">
    <li v-for="(item, idx) in list" :key="idx" :class="classesItems">
      {{ item.text }}
    </li>
    <p class="text-[11px] md:text-[16px] lg:text-[21px] relative text-right">
      <slot></slot>
    </p>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },

  computed: {
    classesItems() {
      return [
        'text-[11px]',
        'md:text-[16px]',
        'lg:text-[21px]',
        'pl-1',
        'md:pl-2',
        'relative',
        'after:content-[""]',
        'after:absolute',
        'after:left-0',
        'after:top-1/2',
        'after:-transition-y-1/2',
        'after:z-20',
        'after:inline-block',
        'after:w-[0.25em]',
        'after:aspect-square',
        'after:rounded-full',
        'after:bg-black',
      ]
    },
  },
}
</script>
