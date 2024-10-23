<template>
  <section class="bg-green py-4 text-white">
    <div class="w-full max-w-[1100px] px-3 mx-auto text-center">
      <h2 class="text-2xl leading-none mb-3">
        Открывайте <br />
        новые горизонты <br />
        с нами
      </h2>
      <p class="hidden md:block text-[9px] leading-[10px]">Свяжитесь с нами!</p>
      <p class="text-[9px] leading-[10px]">
        Мы с радостью ответим <br />
        на все ваши вопросы!
      </p>
      <BaseButton class="flex mx-auto text-center my-4">
        Свяжитесь с нами
      </BaseButton>
      <div class="flex items-center justify-center gap-x-3">
          <a v-for="item in list" :href="item.link" :key="item.name" target="_blank">
            <BaseIcon
              :name="item.name"
              :viewBox="item.viewBox"
              class="w-5 h-5 fill-white hover:fill-orange duration-500 ease-out"
            />
          </a>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseIcon,
    BaseButton,
  },

  data() {
    return {
      list: [
        { link: '#', name: 'vk', viewBox: '0 0 512 512' },
        { link: '#', name: 'whatsapp', viewBox: '0 0 512 512' },
        { link: '#', name: 'telegram', viewBox: '0 0 100 100' },
      ]
    }
  }
}
</script>
