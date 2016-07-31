<template>
  <div class="list-container">
    <v-top-tab></v-top-tab>
    <v-list :articles="list"></v-list>
    <v-pagin :count="count" :query="{ $limit: limit, $page: page }" @paginate="paginate"></v-pagin>
  </div>
</template>

<script>

import vList from './List'
import vTopTab from './TopTab'
import vPagin from 'coms/Pagin'

import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
      return {
        count: 100,
        limit: 20
      }
    },
    components: {
      vList,
      vTopTab,
      vPagin
    },
    computed: {
      ...mapGetters(['list','page'])
    },
    methods: {
      paginate({page}){
          this.getAticles({ page, limit: this.limit, ...this.$route.query})
          this.setPage(page)
      },
      ...mapActions(['getAticles','setPage'])
    },
    route: {
        data: function (transition) {
          this.getAticles({ page: 1, limit: this.limit, ...this.$route.query})
          this.setPage(1) // 重置分页
          transition.next()
        }
    }
}
</script>

<style>
  .list-container {}
  
  .more-btn {
    font-size: 1.5rem;
    padding: 1rem 0;
    width: 100%;
    border: 0;
    color: #fff;
    background-color: #252e39;
    border: none;
    margin: 10px 0;
    border-radius: .5rem;
    outline: none;
    cursor: pointer;
  }
  
  .more-btn:hover {
    background-color: #455569;
  }
</style>