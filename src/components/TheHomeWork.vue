<template>
  <section
    class="px-3 bg-green pt-5 pb-6 mt-8 md:mt-16 md:pb-12 md:pt-16 lg:mt-[90px] lg:pb-16 lg:pt-20"
  >
    <div
      class="w-full max-w-[934px] mx-auto flex justify-center md:justify-evenly lg:justify-between"
    >
      <img
        src="../assets/images/home-work.svg"
        alt=""
        class="hidden md:block w-full max-w-[260px]"
      />
      <div class="text-center md:text-left text-white md:mt-10">
        <h2
          class="text-2xl mb-2 md:text-[51px] md:leading-[62px] lg:text-[76px] lg:leading-[93px] lg:mb-8"
        >
          Наши работы
        </h2>
        <p :class="textClasses">
          В этом альбоме вы можете увидеть <br />
          замечательные результаты наших трудов!
        </p>
        <RouterLink to="/portfolio">
          <BaseButton class="flex mx-auto mt-6 md:mt-12 md:mx-0"
            >Перейти в альбом</BaseButton
          >
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton,
  },

  computed: {
    textClasses() {
      return [
        'text-[9px]',
        'leading-none',
        'md:text-[15px]',
        'md:leading-[18px]',
        'lg:text-[23px]',
        'lg:leading-7',
      ]
    },
  },
}
</script>
