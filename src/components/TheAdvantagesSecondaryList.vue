<template>
  <div
    class="w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1183px] mx-auto text-black flex items-end"
  >
    <div class="w-[64%] lg:max-w-[672px] relative z-20">
      <div class="bg-green w-full pl-4 pt-2 md:pt-4 pb-4 lg:pl-28">
        <div class="mb-10 md:mb-20 lg:mb-32">
          <AdvantageBlockTitle
            :classes-decoration="titleDecoration"
            :classes-title="titleClasses"
            :title="'Доступные цены:'"
          />
          <p
            class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-2 lg:mt-5"
          >
            Мы предлагаем конкурентоспособные <br />
            цены без ущерба для качества.
          </p>
        </div>
        <div class="mb-10 md:mb-20 lg:mb-32">
          <AdvantageBlockTitle
            :classes-decoration="titleDecoration"
            :classes-title="titleClasses"
            :title="'Опыт и профессионализм:'"
          />
          <p
            class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-2 lg:mt-5"
          >
            Наша небольшая команда состоит из <br />
            опытных специалистов, которые <br />
            гарантируют отличный результат.
          </p>
        </div>
        <div class="md:mb-20 lg:mb-32">
          <div class="relative z-20">
            <h3 :class="titleClasses">
              Уникальные
              <span class="block"
                >современные <span class="block md:inline">дизайны</span>
              </span>
            </h3>
            <img
              :class="titleDecoration"
              src="../assets/images/title-decoration.svg"
              alt="Подчеркивание заголовка"
            />
          </div>
          <p
            class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-2 lg:mt-5"
          >
            Мы предлагаем стильные, <br />
            современные решения для детской одежды.
          </p>
        </div>
      </div>
      <div class="pl-8 pt-3 pb-4 bg-orange lg:ml-24 md:pl-4 lg:-mt-16">
        <AdvantageBlockTitle
          :classes-decoration="titleDecoration"
          :classes-title="titleClasses"
          :title="'Доверие и надежность:'"
        />
        <p
          class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-2 lg:mt-5"
        >
          Мы строим долгосрочные отношения <br />
          с нашими клиентами, основанные на <br />честности, прозрачности и
          выполнении всех обязательств.
        </p>
      </div>
    </div>
    <TheAdvantageSecondaryListBack />
  </div>
</template>

<script>
import AdvantageBlockTitle from './AdvantageBlockTitle.vue'
import TheAdvantageSecondaryListBack from './TheAdvantageSecondaryListBack.vue'

export default {
  components: {
    AdvantageBlockTitle,
    TheAdvantageSecondaryListBack,
  },

  computed: {
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[97px]',
        'left-0',
        'top-[10px]',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[206px]',
        'md:top-6',
        'lg:w-[285px]',
        'lg:top-8',
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
