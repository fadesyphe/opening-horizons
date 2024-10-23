<template>
  <TheHomeMain />
  <HomeList :title="clientsTitle" :list="clientsList" />
  <HomeList :title="servicesTitle" :list="servicesList">
    логотипов и лекал
  </HomeList>
  <TheAdvantages />
  <TheHomeWork />
  <TheCarousel />
</template>

<script>
import TheHomeMain from '../components/TheHomeMain.vue'
import HomeList from '../components/HomeList.vue'
import TheAdvantages from '../components/TheAdvantages.vue'
import TheHomeWork from '../components/TheHomeWork.vue'
import TheCarousel from '../components/TheCarousel.vue'

export default {
  components: {
    TheHomeMain,
    HomeList,
    TheAdvantages,
    TheHomeWork,
    TheCarousel,
  },

  data() {
    return {
      clientsTitle: 'Кому <br>мы полезны',
      servicesTitle: 'Наши услуги',
      clientsList: [
        { text: 'Бренды и дизайнеры детской одежды' },
        { text: 'Организаторы мероприятий и кружков' },
        { text: 'Детские сады и школы' },
        { text: 'Корпаративные клиенты' },
        { text: 'Начинающие предприниматели' },
      ],
      servicesList: [
        { text: 'Производство одежды (от 5 единиц)' },
        { text: 'Разработка, создание образцов' },
        { text: 'Разработка дизайна и коллекций' },
        { text: 'Конструирование и градация лекал' },
        { text: 'Разработка печать и нанесение' },
      ],
    }
  },
}
</script>
