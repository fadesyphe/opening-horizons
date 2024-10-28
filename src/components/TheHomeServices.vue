<template>
  <section
    class="pt-9 w-full max-w-[282px] md:max-w-[949px] px-5 mx-auto md:flex md:flex-row-reverse md:items-start md:pt-16 md:justify-start"
  >
    <div class="text-center md:text-left font-bold">
      <div class="relative z-20 w-fit mx-auto md:ml-0 md:w-full">
        <h2
          class="inline-block text-[21px] leading-none relative z-20 md:text-[38px] md:leading-[46px]"
        >
          Наши услуги
        </h2>
        <img
          :class="titleDecoration"
          src="../assets/images/title-decoration.svg"
          alt="Подчеркивание заголовка"
        />
      </div>
      <HomeList :list="list"> логотипов и принтов </HomeList>
    </div>
    <img src="../assets/images/home-services.svg" alt="" :class="imageClasses" />
  </section>
</template>

<script>
import HomeList from './HomeList.vue'

export default {
  components: {
    HomeList,
  },

  data() {
    return {
      list: [
        { text: 'Производство одежды (от 5 единиц)' },
        { text: 'Разработка, создание образцов' },
        { text: 'Разработка дизайна и коллекций' },
        { text: 'Конструирование и градация лекал' },
        { text: 'Разработка печать и нанесение' },
      ],
    }
  },

  computed: {
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[155px]',
        'left-1/2',
        '-translate-x-1/2',
        '-bottom-1',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[232px]',
        'md:w-[308px]',
        'md:-bottom-[10px]',
      ]
    },

    imageClasses() {
      return [
        'ml-auto',
        '-translate-y-6',
        'translate-x-11',
        'h-[140px]',
        'md:h-[380px]',
        'md:translate-x-0',
        'md:-translate-y-[4.5rem]',
        'md:ml-0',
        'lg:h-[512px]',
      ]
    },
  },
}
</script>
