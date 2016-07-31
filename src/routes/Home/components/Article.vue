<template>
	<article class="list-item">
		<div class="item-preview" :style="{'background-image': 'url('+ data.author.avatar_url +')'}"></div>
		<p class="item-title">
			<template v-if='data.top || data.good'>
				<span v-show='data.top' class="put_top">置顶</span>
				<span v-show='data.good' class="put_good">精华</span>
			</template>
			<template v-else>
				<span v-show='data.tab == "ask"' class="topiclist-tab">问答</span>
				<span v-show='data.tab == "share"' class="topiclist-tab">分享</span>
				<span v-show='data.tab == "job"' class="topiclist-tab">招聘</span>
			</template>
			{{data.title}}
		</p>
	</article>
</template>

<script>
	
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                cloudSrc: require('../assets/Duck.jpg')
            }
        }
    }
</script>
<style>
	.list-item {
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		background-color: #fff;
		width: 18.5rem;
		padding: 14rem 1rem 1rem 1rem;
		margin: .5rem;
		text-align: left;
	}
	
	.item-preview {
		position: absolute;
		height: 14rem;
		width: 100%;
		top: 0;
		left: 0;
		background-size: cover;
	}
	
	.item-title {
		height: 4rem;
		padding: .5rem;
		margin: 0;
		overflow: hidden;
	}
	
	.item-description {
		text-align: left;
		font-size: 1rem;
		line-height: 1.6;
	}
	
	@media all and (max-width: 768px) {
		.list-item {
			width: 100%;
			padding: 1rem 6rem 1rem .5rem;
			box-sizing: border-box;
			margin: .5rem 0;
		}
		.item-preview {
			position: absolute;
			width: 4rem;
			right: .5rem;
			top: .5rem;
			left: inherit;
			height: 4rem;
			border-radius: 50px;
		}
	}
	
	.put_good,
	.put_top {
		background: #80bd01;
		padding: 2px 4px;
		border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		-o-border-radius: 3px;
		color: #fff;
		font-size: 12px;
	}
	
	.topiclist-tab {
		background-color: #e5e5e5;
		color: #999;
		padding: 2px 4px;
		border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		-o-border-radius: 3px;
		font-size: 12px;
	}
</style>