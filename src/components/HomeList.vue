<template>
  <section class="pt-9 w-full max-w-[245px] px-3 mx-auto">
    <div class="text-center md:text-left font-bold">
      <h2
        class="inline-block text-[21px] leading-none relative z-20 mx-auto"
        v-html="title"
      >
      </h2>
      <ul class="pt-5 relative z-20 text-left">
        <li
          v-for="(item, idx) in list"
          :key="idx"
          :class="classes"
        >
          {{ item.text }}
        </li>
        <p class="text-[11px] relative text-right"><slot></slot></p>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['list', 'title'],

  computed: {
    classes() {
      return [
        'text-[11px]',
        'pl-1',
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
        'after:bg-black'
      ]
    }
  }
}
</script>
