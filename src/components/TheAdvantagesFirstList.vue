<template>
  <div
    class="w-full max-w-[351px] md:max-w-[768px] lg:max-w-[1083px] px-3 lg:pr-3 lg:pl-[4.5rem] mx-auto mt-7 md:mt-[60px] lg:mt-[90px] mb-4 text-black font-bold"
  >
    <div class="md:flex md:flex-row-reverse md:justify-end md:gap-x-10">
      <div>
        <AdvantageBlockTitle
          :classes-decoration="titleDecoration"
          :classes-title="titleClasses"
          :title="'Индивидуальный подход:'"
        />
        <p
          class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-7 mt-2"
        >
          Мы работаем с каждым клиентом, <br />
          учитывая его уникальные потребности
        </p>
      </div>

      <img
        src="../assets/images/advantages-image1.jpg"
        alt=""
        class="w-[153px] md:w-[302px] lg:w-[450px] ml-auto md:ml-0 mt-1 md:scale-x-[-1]"
      />
    </div>

    <TheAdvantageOrangeBlock
      :classes-decoration="titleDecoration"
      :classes-title="titleClasses"
    />

    <div
      class="md:flex md:flex-row-reverse md:justify-end md:gap-x-10 md:-mt-5 lg:-mt-8 md:items-end"
    >
      <div class="flex items-end md:block md:mb-5">
        <div class="relative z-20 pb-1">
          <h3
            class="text-sm leading-[14px] md:text-[26px] md:leading-8 lg:text-[38px] lg:leading-[46px] relative z-20"
          >
            Оперативность и гибкость
          </h3>
          <img
            class="absolute z-[19] w-[83px] md:w-[191px] lg:w-[285px] left-0 top-3 md:top-6 lg:top-9"
            src="../assets/images/title-decoration.svg"
            alt=""
          />
        </div>
        <p
          class="hidden md:block text-[15px] leading-[18px] lg:text-[23px] lg:leading-7 mt-1 font-medium"
          v-html="operativenessText"
        ></p>
        <img
          src="../assets/images/advantages-image2.jpg"
          alt=""
          class="w-[153px] md:hidden md:w-[302px] lg:w-[450px] ml-auto mt-1"
        />
      </div>
      <p
        class="text-[9px] leading-none mt-1 font-medium md:hidden"
        v-html="operativenessText"
      ></p>
      <img
        src="../assets/images/advantages-image2.jpg"
        alt=""
        class="hidden md:block w-[302px] lg:w-[450px]"
      />
    </div>
  </div>
</template>

<script>
import TheAdvantageOrangeBlock from './TheAdvantageOrangeBlock.vue'
import AdvantageBlockTitle from './AdvantageBlockTitle.vue'
export default {
  components: {
    TheAdvantageOrangeBlock,
    AdvantageBlockTitle,
  },

  data() {
    return {
      operativenessText: `Мы специализируемся на мелкосерийном <br />
        производстве, что позволяет быстро <br />
        адаптироваться, выпускать партии без задержек`,
    }
  },

  computed: {
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[87px]',
        'left-0',
        '-bottom-1',
        'md:w-[206px]',
        'md:-bottom-2',
        'lg:w-[285px]',
      ]
    },

    titleClasses() {
      return [
        'text-sm',
        'font-bold',
        'leading-[14px]',
        'md:text-[26px]',
        'md:leading-[31px]',
        'lg:text-[38px]',
        'lg:leading-[46px]',
        'relative z-20',
      ]
    },
  },
}
</script>
