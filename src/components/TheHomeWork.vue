<template>
  <section
    class="w-full max-w-[934px] px-3 mx-auto bg-green pt-5 pb-6 mt-8 text-white text-center"
  >
    <h2 class="text-2xl mb-2">Наши работы</h2>
    <p class="leading-none text-[11px]">В этом альбоме вы можете увидеть</p>
    <p class="leading-none text-[11px]">
      замечательные результаты наших трудов!
    </p>

    <RouterLink to="/portfolio">
      <BaseButton class="flex mx-auto mt-6">Перейти в альбом</BaseButton>
    </RouterLink>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
}
</script>
