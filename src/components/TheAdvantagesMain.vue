<template>
  <div class="bg-green py-8">
    <div class="w-full max-w-[1100px] px-3 mx-auto text-center">
      <div class="relative z-20">
        <h2 class="inline-block text-[21px] leading-none relative z-20">
          Почему мы?
        </h2>
        <img
          class="absolute z-[19] w-[155px] h-[12px] left-1/2 -translate-x-1/2 -bottom-1"
          src="../assets/images/title-decoration.svg"
          alt="Подчеркивание заголовка"
        />
      </div>
      <h2 class="inline-block text-[21px] leading-none relative z-20">
        Наши преимущества
      </h2>
      <RouterLink to="/prices">
        <BaseButton
          :name="arrow"
          class="flex mx-auto mt-[26px] md:mt-[60px] px-9"
          >Услуги
        </BaseButton>
      </RouterLink>
    </div>
    <img
      class="hidden md:block"
      src="../assets/images/advantages-hero.jpg"
      alt=""
    />
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
