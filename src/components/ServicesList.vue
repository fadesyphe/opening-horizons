<template>
  <h2 class="text-xs md:text-2xl lg:text-3xl mb-4 md:mb-10 lg:mb-12">
    Что входит в услугу:
  </h2>
  <ul class="flex flex-col gap-y-8 mb-8 md:mb-12 lg:mb-16 max-w-[77%] mx-auto">
    <li v-for="item in list" :key="item.title">
      <div
        class="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3 justify-center"
      >
        <span
          :class="
            `inline-block w-[3px] md:w-[5px] lg:w-[7px] aspect-square rounded-full ` +
            colorDisc
          "
        ></span>
        <h3 class="text-xs md:text-2xl lg:text-3xl">{{ item.title }}</h3>
      </div>
      <p class="text-[9px] md:text-base lg:text-xl leading-none">
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
    colorDisc: String,
  },
}
</script>
