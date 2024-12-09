<template>
  <div :class="classesContainer">
    <div
      class="flex md:flex-row gap-6 md:gap-x-0 md:gap-y-8 flex-wrap justify-center md:justify-between -mt-[30px] md:-mt-[115px] lg:-mt-[172px] mb-9"
    >
      <img
        v-for="(item, idx) in images"
        :key="idx"
        :src="item.image"
        alt="Portfolio image"
        class="w-[260px] md:w-[30%] lg:w-[300px] bg-blue"
      />
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/images/slides/slider1.jpg'
import image2 from '@/assets/images/portfolio/image2.jpg'
import image3 from '@/assets/images/portfolio/image3.jpg'
import image4 from '@/assets/images/portfolio/image4.jpg'
import image5 from '@/assets/images/portfolio/image5.jpg'
import image6 from '@/assets/images/slides/slider3.jpg'
import image7 from '@/assets/images/portfolio/image7.jpg'
import image8 from '@/assets/images/portfolio/image8.jpg'
import image9 from '@/assets/images/portfolio/image9.jpg'
import image10 from '@/assets/images/portfolio/image10.jpg'
import image11 from '@/assets/images/slides/slider6.jpg'
import image12 from '@/assets/images/portfolio/image12.jpg'
import image13 from '@/assets/images/portfolio/image13.jpg'
import image14 from '@/assets/images/slides/slider4.jpg'
import image15 from '@/assets/images/portfolio/image15.jpg'

export default {
  data() {
    return {
      images: [
        { image: image1 },
        { image: image2 },
        { image: image3 },
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image7 },
        { image: image8 },
        { image: image9 },
        { image: image10 },
        { image: image11 },
        { image: image12 },
        { image: image13 },
        { image: image14 },
        { image: image15 },
      ],
    }
  },

  computed: {
    classesContainer() {
      return [
        'w-full',
        'max-w-[981px]',
        'px-4',
        'md:px-5',
        'lg:px-6',
        'mx-auto',
        'text-white',
        'text-center',
        'relative',
        'z-30',
      ]
    },
  },
}
</script>
