<template>
	<view class="page34-wrap">
		<view class="cover34">
			<view style="margin-top: 80px;">
				现在，您已经顺利通过心灵之山的重重考验
				<br />
				点击下方按钮，获取您的<text style="text-decoration: underline;">专属测评报告</text>吧！
			</view>
		</view>
		<view @click="next" style="font-size: 16px;width: 250px;height: 50px;line-height: 50px;text-align: center;background-color: #e4b44d;position: absolute;top: 60%;left: 0;right: 0;margin: auto;border-radius: 10px;">洞见真我，查看测评报告</view>
		
	</view>
</template>

<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components: {
			typewriter
		},
		data() {
			return {
				index: 1
			}
		},
		
		methods: {
			
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/32/index'
				// })
				this.$emit('pageEvent', {pageIndex: '35'})
			}
		}
	}
</script>

<style lang="scss">
	.page34-wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page20-1024/results/img4.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.cover34 {
			width: 80%;
			height: 200px;
			position: absolute;
			top: 20%;
			left: 0;
			right: 0;
			margin: auto;
			z-index: 300;
			background-color: rgba(255,255,255,0.6);
			border-radius: 10px;
			text-align: center;
		}
		
		.imgs {
			background-position: initial;
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
		}
		.img1 {
			width: 180px;
			height: 85px;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page25/img1.png);
			// background-image: url(https://dfs.affectai.cn/affect-material/images/flight/img53.png);
			
			position: absolute;
			top: 20px;
			left: 10px;
		}
		.img2 {
			width: 180px;
			height: 85px;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page25/img2.png);
			position: absolute;
			top: 20px;
			right: 10px;
		}
		.img3 {
			width: 180px;
			height: 85px;
			top: 250px;
			left: 10px;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page25/img3.png);

		}
		.img4 {
			width: 180px;
			height: 125px;
			margin: 0 10px;
			top: 227px;
			right: 0;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page25/img4.png);

		}
		.img5 {
			width: 180px;
			height: 85px;
			top: 133px;
			left: 83px;
			background-image: url(https://dfs.affectai.cn/affect-material/images/page25/img5.png);
	
		}
		
		.dialogue {
			position: absolute;
			bottom: 10px;
			left: 0;right: 0;
			width: 96%;
			margin: auto;
			// padding-bottom: 20px;
			
			.top {
				width: 110px;
				height: 36px;
				line-height: 36px;
				background-color: #C8F0FA;
				color: #434343;
				font-size: 18px;
				text-align: center;
				border-top-right-radius: 8px;
				border-top-left-radius: 8px;
			}
			.center {
				display: flex;background-color: #f1f1f4;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				height: 202px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>