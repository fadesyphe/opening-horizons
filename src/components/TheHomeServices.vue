<template>
  <section
    class="w-full max-w-[282px] md:max-w-[981px] px-4 md:px-5 lg:px-6 mx-auto pt-8 md:flex md:flex-row-reverse md:items-start md:pt-16 md:justify-center"
  >
    <div class="text-center md:text-left font-bold lg:-ml-4">
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
        'md:translate-x-0',
        'md:-translate-y-16',
        'md:ml-0',
        'md:-mr-2',
        'md:h-[343px]',
        'lg:h-[511px]',
        'lg:-translate-y-20'
      ]
    },
  },
}
</script>
