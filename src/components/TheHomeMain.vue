<template>
  <div class="bg-green">
    <div class="w-full max-w-[1100px] px-3 py-9 mx-auto text-white">
      <div>
        <h1 class="text-2xl text-center leading-none relative z-20">
          Открывайте<br />новые возможности<br />в достойной одежде
        </h1>
        <p class="mt-4 mb-3 leading-3 text-center text-[11px] relative">
          Омское производство детской одежды. <span>Партии от 5 единиц</span>
        </p>
        <p class="leading-3 text-center text-[11px] relative">
          Партии от 5 единиц
        </p>
        <p class="leading-3 text-center text-[11px] relative">
          Детская одежда на любой случай!
        </p>
        <img class="my-9 w-full" src="../assets/images/home-main.jpg" alt="" />
        <div class="w-full flex justify-center">
          <BaseButton class="flex mx-auto text-center"
            >Свяжитесь с нами</BaseButton
          >
        </div>
      </div>
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
