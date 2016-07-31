<template>
  <div :class="['v-loading', class]">
    <div class="v-loading-snake"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-loading',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/loading"></style>