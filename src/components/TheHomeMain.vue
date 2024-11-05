<template>
  <div class="bg-green">
    <div :class="classesContainer">
      <div>
        <h1 class="leading-[19px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] font-bold relative z-20">
          Открывайте<br />новые возможности<br />в достойной одежде
        </h1>
        <p class="mt-4 mb-3 md:mb-0 text-[7px] leading-[9px] md:text-[9px] leading-[11px] lg:text-[13px] lg:leading-[16px] relative">
          Омское производство детской одежды. <span class="hidden md:inline">Партии от 5 единиц</span>
        </p>
        <p class="text-[7px] leading-[9px] md:text-[9px] leading-[11px] lg:text-[13px] lg:leading-[16px] relative">
          Партии от 5 единиц
          <br />
          <span class="md:hidden">Детская одежда на любой случай</span>
        </p>
        <BaseButton class="hidden md:flex mt-11">
          Свяжитесь с нами
        </BaseButton>
        <img
          class="my-9 w-[164px] mx-auto md:hidden"
          src="../assets/images/home-main.jpg"
          alt=""
        />
        <BaseButton class="flex md:hidden mx-auto">
          Свяжитесь с нами
        </BaseButton>
      </div>
      <img
        class="hidden w-[314px] md:block lg:w-[468px]"
        src="../assets/images/home-main.jpg"
        alt=""
      />
    </div>
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
        'md:flex',
        'md:justify-between',
        'md:items-center',
        'text-center',
        'md:text-left'
      ]
    }
  }
}
</script>
