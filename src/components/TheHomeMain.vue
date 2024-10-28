<template>
  <div class="bg-green">
    <div class="w-full max-w-[934px] px-5 py-9 mx-auto text-white md:flex justify-between items-center text-center md:text-left">
      <div>
        <h1 class="text-2xl leading-none font-bold relative z-20">
          Открывайте<br />новые возможности<br />в достойной одежде
        </h1>
        <p class="mt-4 mb-3 leading-3 text-[11px] relative">
          Омское производство детской одежды.
        </p>
        <p class="leading-3 text-[11px] relative">
          Партии от 5 единиц
        </p>
        <p class="leading-3 text-[11px] relative">
          Детская одежда на любой случай!
        </p>
        <BaseButton class="hidden md:flex mt-11 text-center">
          Свяжитесь с нами
        </BaseButton>
        <img
          class="my-9 w-[244px] mx-auto md:hidden"
          src="../assets/images/home-main.jpg"
          alt=""
        />
        <BaseButton class="flex md:hidden mx-auto text-center">
          Свяжитесь с нами
        </BaseButton>
      </div>
      <img
        class="hidden w-[340px] md:block lg:w-[468px]"
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
}
</script>
