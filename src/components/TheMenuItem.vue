<template>
  <li class="menu-item">
    <RouterLink :to="'/' + link">
      {{ text }}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: ['link', 'text'],
}
</script>
