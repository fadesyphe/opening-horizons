<template>
  <div class="bg-green relative">
    <div :class="classesContainer">
      <div>
        <h1
          class="leading-[19px] md:text-[40px] md:leading-[48px] lg:text-[60px] lg:leading-[73px] font-bold relative z-20"
        >
          Цены на услуги
        </h1>
        <p
          class="mt-4 mb-3 text-[10px] leading-3 md:text-[14px] md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative"
        >
          В прайс листе указаны начальные цены <br />
          за производство базовой модели
        </p>
        <p
          class="text-[10px] leading-3 md:text-[14px] md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative"
        >
          Стоимость в каждом случае рассчитывается индивидуально. <br />
          Конечная цена за изготовление изделия рассчитывается <br />
          на консультации после уточнения всех деталей модели.
        </p>
        <p
          class="mt-3 text-[10px] leading-3 md:text-[14px] md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative"
        >
          Консультации по пошиву бесплатны!
        </p>
        <BaseButton class="flex mt-11 mx-auto">Свяжитесь с нами</BaseButton>
      </div>
    </div>
    <img
      src="../assets//images/main-bg-desktop.svg"
      alt=""
      class="absolute z-10 top-[10%] lg:-top-0 -left-[20%] w-[130%] max-w-[130%] h-auto"
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
        'md:py-9',
        'lg:py-12',
        'mx-auto',
        'text-white',
        'text-center',
      ]
    },
  },
}
</script>
