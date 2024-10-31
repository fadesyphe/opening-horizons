<template>
  <section
    class="pt-9 w-full max-w-[282px] md:max-w-[1200px] px-5 mx-auto md:flex md:items-end md:justify-center gap-4"
  >
    <div class="text-center md:text-left font-bold md:-mb-14">
      <HomeListTitle :title="title" />
      <HomeList :list="list"></HomeList>
    </div>
    <img
      src="../assets/images/home-clients.jpg"
      alt="Платье"
      class="hidden h-auto md:block md:w-[323px]"
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
        { text: 'Бренды и дизайны детской одежды' },
        { text: 'Детские сады и школы' },
        { text: 'Организаторы мероприятий и кружков' },
        { text: 'Корпаративные клиенты' },
        { text: 'Начинающие предприниматели' },
      ],
      title: 'Кому <br /><span class="md:pl-3">мы полезны</span>'
    }
  },
}
</script>
