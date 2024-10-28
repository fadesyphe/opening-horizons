<template>
  <section
    class="pt-9 w-full max-w-[282px] md:max-w-[949px] px-5 mx-auto md:flex md:flex-row-reverse md:items-start md:pt-16 md:justify-start"
  >
    <div class="text-center md:text-left font-bold">
      <HomeListTitle :title="title" />
      <HomeList :list="list"> логотипов и принтов </HomeList>
    </div>
    <img
      src="../assets/images/home-services.svg"
      alt=""
      :class="imageClasses"
    />
  </section>
</template>

<script>
import HomeListTitle from './HomeListTitle.vue'
import HomeList from './HomeList.vue'

export default {
  components: {
    HomeList,
    HomeListTitle,
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
      title: 'Наши услуги',
    }
  },

  computed: {
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
