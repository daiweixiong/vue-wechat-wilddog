<template>
	<div class="topic-header">
		<a v-for='d in list'
		   v-link="{ name: d,params: { page:1} ,query:{tab:d}}"
			:class="['topic-tab', 'current-tab']">{{d}}</a>
	</div>
</template>
<!--append:d=='news',query:{tab:d}-->
<script>
import { TOPIC_OPTIONS } from 'store/constants'
let list = ['newsview','userview','itemview']
	export default{
		data(){
			return {
				list: list
			}
		},
		methods:{
			isCurrent(tab){
				return this.$route.query.tab === tab ? 'current-tab':'' 
			}
		},
		ready () {
			this.$route.router.go({name: 'newsview'})
		},
	}
</script>
<style>
	.topic-header {
		padding: 10px;
		background-color: #f6f6f6;
		border-radius: 3px 3px 0 0;
	}
	
	.current-tab {
		background-color: #80bd01;
		color: #fff;
		padding: 3px 4px;
		border-radius: 3px;
	}
	
	.topic-tab {
		margin: 0 10px;
		color: #80bd01;
	}
</style>