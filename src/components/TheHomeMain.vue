<template>
  <div class="bg-green relative">
    <div :class="classesContainer">
      <div>
        <h1
          class="leading-[19px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] font-bold relative z-20"
        >
          Открывайте<br />новые возможности<br />в достойной одежде
        </h1>
        <p
          class="mt-4 mb-3 md:mb-0 text-[7px] leading-[9px] md:text-[9px] md:leading-[11px] lg:text-[13px] lg:leading-4 relative z-20"
        >
          Омское производство детской одежды.
          <span class="hidden md:inline">Партии от 5 единиц</span>
        </p>
        <p
          class="text-[7px] leading-[9px] md:text-[9px] md:leading-[11px] lg:text-[13px] lg:leading-4 relative z-20"
        >
          Партии от 5 единиц
          <br />
          <span class="md:hidden">Детская одежда на любой случай</span>
        </p>
        <BaseButton class="flex mt-11 mx-auto sm:mx-0">
          Свяжитесь с нами
        </BaseButton>
      </div>
      <img
        class="w-[164px] my-9 md:w-[314px] md:my-0 lg:w-[468px] relative z-20"
        src="../assets/images/home-main.jpg"
        alt=""
      />
    </div>
    <img
      src="../assets//images/main-bg-mobile.svg"
      alt=""
      class="absolute z-10 top-0 -left-[10%] w-[120%] max-w-[120%] h-auto sm:hidden"
    />
    <img
      src="../assets//images/main-bg-desktop.svg"
      alt=""
      class="absolute z-10 top-[10%] lg:top-0 -left-[20%] w-[130%] max-w-[130%] h-auto hidden sm:block"
    />
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton,
  },

  computed: {
    classesContainer() {
      return [
        'w-full',
        'max-w-[981px]',
        'px-4',
        'md:px-5',
        'lg:px-6',
        'py-6',
        'md:py-[60px]',
        'lg:py-[89px]',
        'mx-auto',
        'text-white',
        'flex',
        'flex-col',
        'sm:flex-row',
        'items-center',
        'sm:justify-evenly',
        'flex-wrap',
        'gap-x-3',
        'md:justify-between',
        'text-center',
        'sm:text-left',
      ]
    },
  },
}
</script>
