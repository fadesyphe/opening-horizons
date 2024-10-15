<template>
  <Router-Link :to="'/'+ link" class="button button--menu">
    <slot></slot>
    <svg viewBox="0 0 7.01 7.01" class="arrow-icon">
      <path d="M.32,3.51h6.38" />
      <path d="M3.51.32l3.19,3.19-3.19,3.19" />
    </svg>
  </Router-Link>
</template>

<script>
export default {
  props: ['link']
}
</script>
