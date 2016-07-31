<template>
	<div class="topic-header">
		<a v-for='d in list'
		   v-link="{ path: d,params: { page:1},append:d=='news',query:{tab:d} }"
			:class="['topic-tab', isCurrent(d)]">{{d}}</a>
	</div>
</template>
<script>
import { TOPIC_OPTIONS } from 'store/constants'
let list = ['news','user','item']
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
		}
	}
</script>
<style>
	.topic-header {
		padding: 10px;
		background-color: #f6f6f6;
		border-radius: 3px 3px 0 0;
	}
	
	.topic-tab.current-tab {
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