<template>
  <section class="bg-green py-4 text-white">
    <div class="w-full max-w-[1100px] px-3 mx-auto text-center">
      <h2 class="text-2xl leading-none mb-3">
        Открывайте <br />
        новые горизонты <br />
        с нами
      </h2>
      <p class="hidden md:block text-[9px] leading-[10px]">Свяжитесь с нами!</p>
      <p class="text-[9px] leading-[10px]">
        Мы с радостью ответим <br />
        на все ваши вопросы!
      </p>
      <BaseButton class="flex mx-auto text-center my-4">
        Свяжитесь с нами
      </BaseButton>
      <TheSocial />
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import TheSocial from './TheSocial.vue'

export default {
  components: {
    BaseButton,
    TheSocial,
  },
}
</script>
