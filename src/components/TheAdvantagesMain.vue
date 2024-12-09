<template>
  <div class="bg-green text-white">
    <div class="w-full max-w-[981px] px-4 md:px-5 lg:px-6 mx-auto py-8 md:flex md:justify-between items-center">
      <div class="text-center md:text-left">
        <div class="relative z-20">
          <h2 class="inline-block text-[14px] leading-[17px] relative z-20 md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px]">
            Почему мы?
            <br />
            Наше преимущества
          </h2>
          <img
            :class="titleDecoration"
            src="../assets/images/title-decoration.svg"
            alt="Подчеркивание заголовка"
          />
        </div>
        <RouterLink to="/prices">
          <BaseButton class="flex mx-auto mt-4 md:mt-10 lg:mt-[60px] md:mx-0 px-9"
            >Услуги
          </BaseButton>
        </RouterLink>
      </div>
      <img
        class="hidden md:block w-[275px] lg:w-[482px]"
        src="../assets/images/advantages-hero.jpg"
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
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[114px]',
        'left-1/2',
        '-translate-x-1/2',
        'bottom-4',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[141px]',
        'md:bottom-7',
        'lg:w-[211px]',
        'lg:bottom-10',
      ]
    }
  }
}
</script>
