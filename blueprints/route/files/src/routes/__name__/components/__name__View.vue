<template>
  <div class="v-<%= dashesEntityName %>">
    <h1>
      <%= pascalEntityName %>
    </h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-<%= dashesEntityName %>',
}
</script>