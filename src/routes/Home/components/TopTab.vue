<template>
	<div class="topic-header">
		<a v-for='d in list' 
			v-link="{ name: 'index', query: { tab: d.tab} }" 
			:class="['topic-tab', isCurrent(d.tab)]">{{d.label}}</a>
	</div>
</template>
<script>
import { TOPIC_OPTIONS } from 'store/constants'
	export default{
		data(){
			return {
				list: TOPIC_OPTIONS
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