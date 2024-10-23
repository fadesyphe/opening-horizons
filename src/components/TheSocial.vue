<template>
  <div class="flex items-center justify-center gap-x-3">
    <a v-for="item in list" :href="item.link" :key="item.name" target="_blank">
      <BaseIcon
        :name="item.name"
        :viewBox="item.viewBox"
        class="w-5 h-5 fill-white hover:fill-orange duration-500 ease-out"
      />
    </a>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  components: {
    BaseIcon,
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
