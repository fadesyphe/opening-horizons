<template>
  <div class="relative z-20 w-fit mx-auto md:ml-0 md:w-full">
    <h2
      class="inline-block text-sm leading-[17px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20 "
      v-html="title"
    ></h2>
    <img
      :class="titleDecoration"
      src="../assets/images/title-decoration_home-list.svg"
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
        'w-[97px]',
        'left-1/2',
        '-translate-x-1/2',
        'bottom-0',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[206px]',
        'md:-bottom-2',
        'md:w-[307px]'
      ]
    },
  },
}
</script>
