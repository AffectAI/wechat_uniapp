<template>
	<view class="page1-wrap" @click="next">
		<!-- 心湖 旅行伙伴2 -->
		
		<view class="dialogue" >
			<view class="top">旅行伙伴</view>
			<view class="center" style="height: 200px;">
				<view style="width: 114px;">
					<u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 0 15px">
					<typewriter
						v-if="index == 1"
						speed="100"
						text="恭喜你通过了入门版的考验！但不要松懈，因为接下来的陷阱将会提升难度，这更加考验你的专注力与记忆力！"
						@finished="finished"
					></typewriter>
					<typewriter
						v-if="index == 2"
						speed="100"
						text="难度有所提升，但相应的报酬也会提升哦！还是老规矩，我会先向你展示进阶版的捕鸟秘诀，跟我来吧！"
						
					></typewriter>
				</view>
				<view style="width: 22px;display: flex;background-image: url(https://dfs.affectai.cn/affect-material/images/page3/down.png);background-size: 70%;background-repeat: no-repeat;background-position: center bottom;">
				</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components: {
			typewriter
		},
		props: ['gloAvtorUrl'],
		data() {
			return {
				index: 1
			}
		},
		methods: {
			finished() {
				this.index++;
			},
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page13_next_loading/index'
				// });
				this.$emit('pageEvent', {pageIndex: 'page13_next_loading'})
			}
		}
	}
</script>

<style lang="scss">
	.page1-wrap {
		min-height: 100vh;
		// background-image: url(https://dfs.affectai.cn/affect-material/images/page4/bg.png);
		background-image: url(https://dfs.affectai.cn/affect-material/images/page18-1022/lieren.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		
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