<template>
  <section class="py-8">
    <div class="w-full max-w-[1100px] px-3 mx-auto relative">
      <swiper
        :modules="modules"
        :slides-per-view="slides"
        :space-between="20"
        :loop="true"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="px-4"
      >
        <swiper-slide v-for="item in list" :key="item">
          <img :src="item.image" alt="" class="mx-auto" />
        </swiper-slide>
      </swiper>
      <button ref="prev" :class="[classes, 'left-[18px]', 'rotate-180']" @mouseenter="hoverButton">
        <BaseIcon
          name="sliderArrow"
          viewBox="0 0 20 20"
          class="stroke-black fill-none w-5 h-5"
        />
      </button>
      <button ref="next" :class="[classes, 'right-[18px]']" @mouseenter="hoverButton">
        <BaseIcon
          name="sliderArrow"
          viewBox="0 0 20 20"
          class="fill-none w-5 h-5"
        />
      </button>
    </div>
  </section>
</template>

<script>
import slider1 from '@/assets/images/slides/slider1.jpg'
import slider2 from '@/assets/images/slides/slider2.jpg'
import slider3 from '@/assets/images/slides/slider3.jpg'
import slider4 from '@/assets/images/slides/slider4.jpg'
import slider5 from '@/assets/images/slides/slider5.jpg'
import slider6 from '@/assets/images/slides/slider6.jpg'
import slider7 from '@/assets/images/slides/slider7.jpg'
import slider8 from '@/assets/images/slides/slider8.jpg'
import slider9 from '@/assets/images/slides/slider9.jpg'
import slider10 from '@/assets/images/slides/slider10.jpg'
import slider11 from '@/assets/images/slides/slider11.jpg'
import slider12 from '@/assets/images/slides/slider12.jpg'

import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BaseIcon,
  },

  data() {
    return {
      width: 0,
      list: [
        { image: slider1 },
        { image: slider2 },
        { image: slider3 },
        { image: slider4 },
        { image: slider5 },
        { image: slider6 },
        { image: slider7 },
        { image: slider8 },
        { image: slider9 },
        { image: slider10 },
        { image: slider11 },
        { image: slider12 },
      ],
    }
  },

  setup() {
    const prev = ref(null)
    const next = ref(null)
    const onSwiper = swiper => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      prev,
      next,
    }
  },

  created() {
    const onResize = () => (this.width = window.innerWidth)
    onResize()
    window.addEventListener('resize', () => {
      onResize()
    })
  },

  computed: {
    slides() {
      if (this.width < 540) {
        return 1
      } else if (this.width < 768) {
        return 2
      } else {
        return 3
      }
    },

    classes() {
      return [
        'w-10',
        'aspect-square',
        'flex',
        'justify-center',
        'items-center',
        'bg-orange',
        'rounded-full',
        'border',
        'border-black',
        'md:border-0',
        'absolute',
        'z-50',
        'top-1/2',
        '-translate-y-1/2',
        'stroke-black',
        'duration-500',
        'ease-out',
        'hover:stroke-white',
      ]
    },
  },
}
</script>
