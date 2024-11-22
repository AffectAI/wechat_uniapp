<template>
	<view class="page27-wrap" @click="next">
		<view class="cover" :style="{opacity: opacity}"></view>
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue" >
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					<typewriter
						text="留言完成。其实，每个人都会遇到挑战，但正是这些挑战让我们变得更强大。现在，请放松身心，好好休息。明天会是更美好的一天，晚安！"
						:speed="100"
					></typewriter>
					
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://datastream.affectai.cn/callmaterial/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>
 
<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		data() {
			return {
				opacity: 0,
				time: null,
			}
		},
		props: ['gloAvtorUrl', 'isSuccess'],
		components: {
			typewriter
		},
		beforeDestroy() {
			
			if(this.time) {
				clearInterval(this.time);
			}
			this.time = null;
		},
		methods: {
			nextCover() {
				this.$emit('pageEvent', {pageIndex: '28'})
			},
			next() {
				if(!this.isSuccess) {
					this.$refs.uToast.show({
						title: '请将人脸置于屏幕中间，并确保面部完整显示',
						type: 'error',
					})
					return
				}
				if(!this.time) {
					this.time = setInterval(() => {
						if(this.opacity >= 0.8) {
							this.opacity = 0.8;
							clearInterval(this.time)
							this.$emit('pageEvent', {pageIndex: '28'})
						}
						this.opacity += 0.08;
					}, 200)
				}
				
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page16/index'
				// })
			}
		}
	}
</script>

<style lang="scss">
	.cover {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		opacity: 0;
		top: 0;
		z-index: 305;
		transition: all 0.6s; 
	}
	.page27-wrap {
		width: 100vw;
		min-height: 100vh;
		// background-image: url(https://datastream.affectai.cn/callmaterial/images/page4/bg.png);
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img32.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		
		.dialogue {
			width: 96%;
			margin: 0 auto;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 5px;
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
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>