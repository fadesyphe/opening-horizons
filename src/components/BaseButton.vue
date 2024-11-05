<template>
  <button :class="$attrs.class + ' gap-1 px-3 pt-3 pb-4 bg-white text-[#92A581] text-[8px] md:text-[10px] lg:text-[15px] leading-[10px] lg:leading-[12px] rounded-[7px] hover:bg-orange ease-out duration-500'">
    <slot></slot>
    <BaseIcon name="arrow" viewBox="0 0 7 7" class="stroke-[#92A581] fill-none w-[4px] h-[4px] md:w-[7px] md:h-[7px] translate-y-full md:translate-y-1/2 lg:translate-y-3/4"/>
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  components: {
    BaseIcon
  },
}
</script>
