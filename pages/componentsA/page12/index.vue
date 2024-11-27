<template>
	<view class="page12">
		<view style="position: absolute;top: 90px;left: 0;right: 0;margin: auto;">
			<view class="tit"></view>
			<view class="progress">
				<view class="total"></view>
				<view class="padding" :style="{width: progress + '%',}"></view>
			</view>
		</view>
		
		<view class="next" @click="next" :style="{background: progress >= 100 ? '#3EDF91' : '#C4C4C4'}">开始</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				progress: 0,
				progressEvent: null,
			}
		},
		props: ['gloAvtorUrl'],
		mounted() {
			this.schedule();
		},
		beforeDestroy() {
			clearInterval(this.progressEvent)
		},
		methods: {
			next() {
				if(this.progress >= 100) {
					// uni.navigateTo({
					// 	url: '/pages/componentsA/page13/index'
					// })
					this.$emit('pageEvent', {pageIndex: 13})
				}
			},
			schedule() {
				let ProNumber = 0; // 初始进度0
				let time = 800; // 定义每500ms
				const SETP = 25; // 每次加25
				
				this.progressEvent = setInterval(() => {
					ProNumber += SETP;
					if(ProNumber >= 100) {
						clearInterval(this.progressEvent)
					}
					this.progress = ProNumber;
				}, time);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page12 {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page18-1022/bird-start-bg.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		.tit {
			height: 180px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page18-1022/tit.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
		}
		
		.progress {
			position: relative;
			width: 80%;
			margin: 86px auto 0 auto;
			height: 25px;border-radius: 25px;
			
			.total {
				width: 100%;
				height: 25px;
				position: absolute;margin: 0 auto;
				left: 0;top: 0;background-color: #fff;
				border-radius: 25px;
				z-index: 601;
			}
			.padding {
				width: 30%;
				height: 25px;
				border-radius: 25px;
				position: absolute;top: 0;left: 0;background-color: #3EDF91;
				z-index: 605;
				text-align: center;
				line-height: 25px;
				color: #fff;
			}
			
		}
		
		.next {
			width: 100px;height: 43px;line-height: 43px;background-color: #C4C4C4;margin: 0 auto;
			position: absolute;bottom: 120px;left: 0;right: 0;text-align: center;font-size: 16px;color: #fff;border-radius: 5px;
		}
	}
</style>