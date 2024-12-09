<template>
  <div class="bg-green relative">
    <div :class="classesContainer">
      <h1
        class="leading-[19px] md:text-[40px] md:leading-[48px] lg:text-[60px] lg:leading-[73px] font-bold relative z-20"
      >
        Портфолио
      </h1>
    </div>
    <img
      src="../assets//images/main-bg-desktop.svg"
      alt=""
      class="absolute z-10 top-[35%] sm:top-[10%] lg:top-0 -left-[10%] w-[130%] max-w-[130%] h-auto"
    />
  </div>
</template>

<script>
export default {
  computed: {
    classesContainer() {
      return [
        'w-full',
        'max-w-[981px]',
        'px-4',
        'md:px-5',
        'lg:px-6',
        'py-16',
        'md:py-[172px]',
        'lg:py-[262px]',
        'mx-auto',
        'text-white',
        'text-center',
      ]
    },
  },
}
</script>
