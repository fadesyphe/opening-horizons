<template>
  <li :class="$attrs.class + ' line-height-[18.52px] hover:text-orange ease-out duration-500'">
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
