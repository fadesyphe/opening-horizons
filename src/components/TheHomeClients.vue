<template>
  <section
    class="pt-9 w-full max-w-[282px] md:max-w-[949px] px-5 mx-auto md:flex md:items-end md:justify-between md:gap-6"
  >
    <div class="text-center md:text-left font-bold md:-mb-14">
      <div class="relative z-20 w-fit mx-auto md:ml-0 md:w-full">
        <h2 class="inline-block text-[21px] leading-none relative z-20 md:text-[38px] md:leading-[46px]">
          Кому <br /><span class="pl-3">мы полезны</span>
        </h2>
        <img
          :class="titleDecoration"
          src="../assets/images/title-decoration.svg"
          alt="Подчеркивание заголовка"
        />
      </div>
      <HomeList :list="list"></HomeList>
    </div>
    <img
      src="../assets/images/home-clients.jpg"
      alt="Платье"
      class="hidden h-auto md:block md:w-[380px] lg:w-[482px]"
    />
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
        { text: 'Бренды и дизайны детской одежды' },
        { text: 'Детские сады и школы' },
        { text: 'Организаторы мероприятий и кружков' },
        { text: 'Корпаративные клиенты' },
        { text: 'Начинающие предприниматели' },
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
  }
}
</script>
