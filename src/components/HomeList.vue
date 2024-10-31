<template>
  <ul class="pt-5 relative z-20 text-left flex flex-col gap-1 md:gap-4">
    <li v-for="(item, idx) in list" :key="idx" :class="classesItems">
      {{ item.text }}
    </li>
    <p class="text-xs md:text-[15px] relative text-right">
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
        'text-xs',
        'md:text-[15px]',
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
