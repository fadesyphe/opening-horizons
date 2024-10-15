<template>
  <button class="flex items-center gap-1 ml-16 px-3 pt-3 pb-4 bg-white text-[#92A581] text-xs leading-[0.875rem] rounded-[7px]">
    <slot></slot>
    <BaseIcon name="arrow" viewBox="0 0 7 7" class="stroke-[#92A581] fill-none w-[7px] h-[7px] translate-y-1/2"/>
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  components: {
    BaseIcon
  }
}
</script>

  border: none;

  transition: 0.5s ease;
