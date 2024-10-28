<template>
  <div class="relative z-20 w-fit mx-auto md:ml-0 md:w-full">
    <h2
      class="inline-block text-[21px] leading-none relative z-20 md:text-[38px] md:leading-[46px]"
      v-html="title"
    ></h2>
    <img
      :class="titleDecoration"
      src="../assets/images/title-decoration.svg"
      alt="Подчеркивание заголовка"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },

  computed: {
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[155px]',
        'left-1/2',
        '-translate-x-1/2',
        '-bottom-1',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[232px]',
        'md:w-[308px]',
        'md:-bottom-[10px]',
      ]
    },
  },
}
</script>
