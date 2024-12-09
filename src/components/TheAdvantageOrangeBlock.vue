<template>
  <div :class="classesBlock">
    <TheAdvantageBlockTitle
      :classes-decoration="classesDecoration"
      :classes-title="classesTitle"
      :title="'Высокое качество:'"
    />
    <p
      class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-7 mt-3 font-medium"
    >
      Мы соблюдаем строгие стандарты качества, <br />
      чтобы ваша одежда была не только красивой, <br />
      но и долговечной
    </p>
  </div>
</template>

<script>
import TheAdvantageBlockTitle from './AdvantageBlockTitle.vue'

export default {
  components: {
    TheAdvantageBlockTitle,
  },

  props: {
    classesDecoration: Array,
    classesTitle: Array,
  },

  computed: {
    classesBlock() {
      return [
        '-mt-6',
        'mb-5',
        'bg-orange',
        'py-1',
        '-ml-6',
        'pl-6',
        'max-w-[242px]',
        'md:mt-2',
        'lg:mt-4',
        'md:mb-0',
        'md:ml-auto',
        'md:max-w-[413px]',
        'md:py-8 md:pl-3',
        'lg:max-w-[588px]',
        'lg:-mr-[4.5rem]',
        'lg:pb-[51px]',
        'lg:pt-10',
      ]
    },
  },
}
</script>
