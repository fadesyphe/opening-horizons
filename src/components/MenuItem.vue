<template>
  <li class="md:text-[10px] lg:text-[15px] md:leading-[12px] lg:leading-[18px] hover:text-orange ease-out duration-500'">
    <RouterLink :to="'/' + link" @click="$emit('closeMenu')" @keyup.esc="$emit('closeMenu')">
      {{ text }}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: ['link', 'text'],
}
</script>
