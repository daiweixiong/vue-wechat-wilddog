<template>
  <div>
	  <h2 @click="userMng">用户管理</h2>
	  <router-view class="router-view"  keep-alive></router-view>
  </div>
</template>
<script>
    export default {
        methods:{
            userMng() {
                this.$route.router.go({name: 'login'})
            }
        }
    }
</script>