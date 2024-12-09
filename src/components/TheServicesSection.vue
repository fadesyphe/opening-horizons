<template>
  <div class="bg-green text-white relative overflow-hidden">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Разработка дизайна изделий и полное сопровождение
      </h1>
      <p
        class="mt-3 mb-5 md:mb-10 lg:mb-16 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-lg lg:leading-[22px] relative z-20"
      >
        Наша компания предлагает услугу разработки уникального дизайна детской
        одежды с полным сопровождением на всех этапах производства. Мы поможем
        вам воплотить в жизнь любую идею – от создания эксклюзивных моделей до
        выбора лучших материалов и фурнитуры
      </p>
      <ServicesList :list="firstList" :color-disc="'bg-white'" />
      <p class="text-[9px] md:text-base lg:text-xl leading-none relative z-20">
        Мы берем на себя все заботы - от идеи до готового изделия.
      </p>
      <BaseButton
        class="flex mt-5 md:mt-8 lg:mt-12 mx-auto px-6 pt-[16px] pb-[19px]"
        >Заказать услугу</BaseButton
      >
    </div>
    <img
      src="../assets//images/main-bg-desktop.svg"
      alt=""
      class="absolute z-10 top-0 -left-[20%] w-[130%] max-w-[130%] h-auto"
    />
    <img
      src="../assets/images/services-section1-bg1.svg"
      alt=""
      class="absolute z-10 top-1/2 -translate-y-1/2 -right-[4%] md:-right-[8%] w-[32%]"
    />
    <img
      src="../assets/images/services-section1-bg2.svg"
      alt=""
      class="absolute z-10 top-[76%] md:top-0 -translate-y-1/2 md:translate-y-0 -left-[23%] md:rotate-[230deg] md:-left-[26%] w-[40%] md:w-[30%] max-w-[745px]"
    />
  </div>

  <div class="text-black relative overflow-hidden">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Создание лекал
      </h1>
      <p
        class="mt-3 mb-5 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative z-20 bg-orange py-3"
      >
        Мы предлагаем услугу по созданию лекал для пошива детской одежды. Точные
        и грамотно разработанные лекала – это основа качественного и удобного
        изделия. Наши специалисты помогут вам создать лекала любой сложности,
        которые обеспечат идеальную посадку и соответствие всем стандартам
      </p>
      <ServicesList :list="secondaryList" :color-disc="'bg-black'" />
      <BaseButton
        class="flex mt-5 mx-auto px-6 pt-3 pb-[14px] bg-orange text-black stroke-black"
        >Заказать услугу</BaseButton
      >
    </div>
    <img
      src="../assets/images/services-section2-bg1.svg"
      alt=""
      class="absolute z-10 bottom-12 md:top-12 -left-5 md:-left-10 w-[80px] md:w-[200px] lg:w-[262px]"
    />
    <img
      src="../assets/images/services-section2-bg2.svg"
      alt=""
      class="absolute z-10 bottom-0 lg:bottom-2 -right-16 md:-right-[144px] lg:-right-[215px] w-[144px] md:w-[315px] lg:w-[470px]"
    />
    <img
      src="../assets/images/services-section2-bg3.svg"
      alt=""
      class="absolute z-10 bottom-[80px] lg:bottom-[123px] left-4 lg:left-6 hidden md:block w-[240px] lg:w-[358px]"
    />
  </div>

  <div class="bg-green text-white relative z-20 overflow-hidden">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Создание экспериментального образца
      </h1>
      <p
        class="mt-3 mb-5 md:mb-10 lg:mb-16 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-lg lg:leading-[22px] relative"
      >
        Наша компания предлагает услугу создания образца перед запуском
        массового производства. Образец – это ключевой этап разработки изделия,
        позволяющий оценить качество кроя, посадку, внешний вид и удобство
        модели до начала крупносерийного пошива.
      </p>
      <ServicesList :list="thirdList" :color-disc="'bg-white'" />
      <BaseButton
        class="flex mt-5 md:mt-8 lg:mt-12 mx-auto px-6 pt-[16px] pb-[19px]"
        >Заказать услугу</BaseButton
      >
    </div>
    <img
      src="../assets/images/services-section3-bg1.svg"
      alt=""
      class="absolute z-10 right-0 lg:-right-9 top-[171px] w-[348px] md:w-[95%] lg:top-[200px]"
    />
    <img
      src="../assets/images/services-section3-bg2.svg"
      alt=""
      class="absolute z-10 right-8 lg:right-[105px] top-6 lg:top-9 w-[128px] md:w-[280px] lg:w-[418px]"
    />
    <img
      src="../assets/images/services-section3-bg3.svg"
      alt=""
      class="absolute z-10 left-2 md:left-8 lg:left-12 bottom-16 md:bottom-24 lg:bottom-96 w-[100px] md:w-[240px] lg:w-[356px]"
    />
  </div>

  <div class="text-black relative z-20 overflow-hidden">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Массовый пошив от 5 единиц
      </h1>
      <p
        class="mt-3 mb-5 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative bg-orange py-3"
      >
        Наша компания предлагает услугу массового пошива детской одежды партиями
        от 5 единиц. Мы готовы воплотить в жизнь ваши идеи с соблюдением всех
        требований к качеству и срокам. Услуга подходит как для брендов,
        желающих создать ограниченную коллекцию, так и для организаций, которым
        необходима форма или униформа для детей.
      </p>
      <ServicesList :list="fourthList" :color-disc="'bg-black'" />
      <BaseButton
        class="flex mt-5 mx-auto px-6 pt-3 pb-[14px] bg-orange text-black stroke-black"
        >Заказать услугу</BaseButton
      >
    </div>
    <img
      src="../assets/images/services-section4-bg1.svg"
      alt=""
      class="absolute z-10 -left-[55px] md:-left-[130px] lg:-left-[192px] top-[46%] md:top-[39%] w-[118px] md:w-[258px] lg:w-[384px]"
    />
    <img
      src="../assets/images/services-section4-bg2.svg"
      alt=""
      class="absolute z-10 -right-[142px] md:-right-[238px] bottom-[50px] md:bottom-[77px] w-[315px] md:w-[470px] hidden md:block"
    />
    <img
      src="../assets/images/services-section4-bg3.svg"
      alt=""
      class="absolute z-10 -right-[18px] bottom-[10px] w-[102px] md:hidden"
    />
  </div>

  <div class="bg-green text-white">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Выездные замеры и примерки
      </h1>
      <p
        class="mt-3 mb-5 md:mb-10 lg:mb-16 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-lg lg:leading-[22px] relative"
      >
        Для вашего удобства мы предлагаем услугу выездных замеров и примерок на
        дому. Теперь вам не нужно тратить время на поездки в ателье — наши
        специалисты приедут к вам, чтобы провести замеры и организовать примерку
        в комфортной для ребенка обстановке.
      </p>
      <ServicesList :list="fifthList" :color-disc="'bg-white'" />
      <BaseButton
        class="flex mt-5 md:mt-8 lg:mt-12 mx-auto px-6 pt-[16px] pb-[19px]"
        >Заказать услугу</BaseButton
      >
    </div>
  </div>

  <div class="text-black">
    <div :class="classesContainer">
      <h1
        class="text-lg leading-[22px] md:text-[32px] md:leading-[39px] lg:text-5xl lg:leading-[58px] font-bold relative z-20"
      >
        Разработка макетов для печати
      </h1>
      <p
        class="mt-3 mb-5 text-[11px] leading-[13px] md:text-sm md:leading-[17px] lg:text-[21px] lg:leading-[25px] relative bg-orange py-3"
      >
        Наша компания предлагает услуги по разработке макетов для печати. Мы
        создаем уникальные принты, которые подчеркнут индивидуальность вашего
        бренда или коллекции и привлекут внимание покупателей.
      </p>
      <ServicesList :list="sixthList" :color-disc="'bg-black'" />
      <BaseButton
        class="flex mt-5 mx-auto px-6 pt-3 pb-[14px] bg-orange text-black stroke-black"
        >Заказать услугу</BaseButton
      >
    </div>
  </div>
</template>

<script>
import servicesList from '../services'
import BaseButton from './BaseButton.vue'
import ServicesList from './ServicesList.vue'

export default {
  components: {
    BaseButton,
    ServicesList,
  },

  data() {
    return {
      firstList: servicesList.firstList,
      secondaryList: servicesList.secondaryList,
      thirdList: servicesList.thirdList,
      fourthList: servicesList.fourthList,
      fifthList: servicesList.fifthList,
      sixthList: servicesList.sixthList,
    }
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
        'text-center',
        'relative',
      ]
    },
  },
}
</script>
