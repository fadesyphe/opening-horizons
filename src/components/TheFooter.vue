<template>
  <section
    class="bg-green py-4 md:py-9 lg:py-12 text-white relative overflow-hidden"
  >
    <div class="w-full max-w-[981px] px-4 md:px-5 lg:px-6 mx-auto text-center">
      <h2
        class="text-2xl leading-[29px] md:text-[30px] md:leading-[37px] mb-3 md:mb-7"
      >
        Открывайте <br />
        новые горизонты <br />
        с нами
      </h2>
      <p class="hidden md:block leading-[18px] lg:text-[23px] lg:leading-7">
        Свяжитесь с нами!
      </p>
      <p
        class="text-[9px] leading-[10px] md:text-base md:leading-[18px] lg:text-[23px] lg:leading-7"
      >
        Мы с радостью ответим
        <span class="block md:inline">на все ваши вопросы!</span>
      </p>
      <BaseButton class="flex mx-auto text-center my-4">
        Свяжитесь с нами
      </BaseButton>
      <TheSocial />
    </div>
    <img
      src="../assets/images/footer-bg.svg"
      alt=""
      class="absolute -bottom-[22px] -right-[60px] z-10 w-[151px] md:w-[258px] md:-bottom-[60px] md:-right-[66px] xl:w-[365px]"
    />
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
