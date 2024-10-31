<template>
  <div class="bg-green">
    <div class="w-full max-w-[934px] px-5 mx-auto py-8 md:flex">
      <div class="w-full max-w-[1100px] px-3 mx-auto text-center md:text-left">
        <div class="relative z-20">
          <h2 class="inline-block text-[14px] leading-[17px] relative z-20 md:text-[26px] md:leading-[31px]">
            Почему мы?
            <br />
            Наши преимущества
          </h2>
          <img
            :class="titleDecoration"
            src="../assets/images/title-decoration.svg"
            alt="Подчеркивание заголовка"
          />
        </div>
        <RouterLink to="/prices">
          <BaseButton class="flex mx-auto mt-[26px] md:mt-[60px] md:mx-0 px-9"
            >Услуги
          </BaseButton>
        </RouterLink>
      </div>
      <img
        class="hidden md:block mr-10"
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
        'bottom-[18px]',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[211px]',
        'md:bottom-10',
      ]
    }
  }
}
</script>
