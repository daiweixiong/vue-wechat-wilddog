<template>
	<div class='container'>
		<v-progress :progress="progress"></v-progress>
		<v-navbar :routes="routes"></v-navbar>
		<router-view class="router-view" transition="slide-up" transition-mode="out-in" keep-alive></router-view>
		<slot></slot>
	</div>
</template>
<script>
	import vProgress from '../../components/Progress'
	import vNavbar from '../../components/Navbar'
	
	import { routes } from '../../routes'
	import { mapGetters } from 'vuex'

	export default {
		name: 'v-layout',
		data(){
			return {
				routes
			}
		},
		computed: {
			...mapGetters(['progress'])
		},
		components: {
			vProgress,
			vNavbar
		}
	}
</script>
<style src="./styles.css"></style>