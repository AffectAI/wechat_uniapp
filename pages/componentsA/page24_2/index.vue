<template>
	<view class="page24-2-wrap">
		<!-- 心湖倒影 -->
		<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">解忧日记第三卷</view>

		<view style="padding: 0 23px;margin-top: 45px;">
			
			<view v-if="index == 1">
				
			</view>
			<view v-if="index == 2">
				
			</view>
			<view v-if="index == 3">
				
			</view>
			<view v-if="index == 4">
				
			</view>
			<view v-if="index == 5">
				
			</view>
			<view v-if="index == 6">
				
			</view>
			<view v-if="index == 7">
				
			</view>
	
		</view>
		
		<view style="width: 280px;display: flex;margin: 0 auto;justify-content: space-between;">
			<view class="nextPage" v-if="index != 1" @click="prePage"> 上一页 </view>
			<view class="nextPage" v-if="index != 7" @click="nextPage"> 下一页 </view>
			
			<view class="nextPage" v-if="index == 7" @click="next">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				value7: '',
				value8: '',
				value9: '',
				value10: '',
				list1: [
					{name: '完全不会', value: '0'},
					{name: '有几天', value: '1'},
					{name: '一半以上的日子', value: '2'},
					{name: '几乎每天', value: '3'},
				],
				index: 1,
			}
		},
		created() {
			this.$nextTick(() => {
				uni.pageScrollTo({
					scrollTop: 0,//滚动到页面的目标位置
					duration: 300
				});
			})
			
		},
		methods: {
			radioGroupChange() {},
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page25/index'
				// })
				this.$emit('pageEvent', {pageIndex: '25'})
			},
			prePage() {
				if(this.index <= 1) {
					this.index = 1
					return
				}
				this.index -= 1;
			},
			nextPage() {
				if(this.index >= 7) {
					this.index = 7
					return
				}
				this.index += 1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nextPage {
		width: 110px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-radius: 5px;
		background-color: #f8d164;
		color: #000;
		font-size: 14px;
		font-weight: 400;
		margin: 50px auto;
	}
	.page24-2-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/img34.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		padding-bottom: 20px;
		
	
		.submit1 {
			width: 140px;
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-radius: 5px;
			background-color: #f8d164;
			color: #000;
			font-size: 14px;
			font-weight: 400;
			margin: 20px auto 50px auto;

		}
		
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