<template>
  <div :class="classesWrapper">
    <h3 :class="classesTitle">
      {{ this.title }}
    </h3>
    <img
      :class="classesDecoration"
      src="../assets/images/title-decoration.svg"
      alt="Подчеркивание заголовка"
    />
  </div>
</template>

<script>
export default {
  props: {
    classesDecoration: Array,
    classesTitle: Array,
    title: String,
  },

  computed: {
    classesWrapper() {
      return [
        'relative',
        'z-20',
        this.title === 'Индивидуальный подход:' ? 'md:mt-10' : '',
      ]
    },
  },
}
</script>
