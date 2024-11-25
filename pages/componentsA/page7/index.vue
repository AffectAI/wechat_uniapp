<template>
	<view class="page7-wrap">
		<!-- 心湖倒影 -->
		<view 
		style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">
		心镜内观自我 
		</view>

		<view style="padding: 0 23px;margin-top: 45px;">
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">1. 您是保守的？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30"  v-model="value1" @change="radioGroupChange">
						<u-radio
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">2. 您通常是信任他人的？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value2" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">3. 您是倾向于懒惰的人？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value3" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">4. 你是放松的、能很好的应付压力的人？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value4" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">5. 您对艺术的兴趣不大？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value5" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">6. 您是一个外向、善于交际的人？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value6" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">7. 您是一位喜欢挑别人毛病的人？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value7" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">8. 您是一位做事认真彻底的人？</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value8" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">9. 您很容易紧张?</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value9" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">10. 您是一位想象力丰富的人?</view>
				<view >
					<u-radio-group width="110px" active-color="#007EAE" label-size="50rpx" size="30" v-model="value10" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view class="nextPage" @click="next">完成</view>
			<!-- <view style="width: 280px;display: flex;margin: 0 auto;justify-content: space-between;">
				<view class="nextPage" v-if="nextIndex != 1" @click="prePage"> 上一页 </view>
				<view class="nextPage" v-if="nextIndex != 5" @click="nextPage"> 下一页 </view>
				<view class="nextPage" v-if="nextIndex == 5" @click="next">完成</view>
			</view> -->
			
			
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	
	export default {
		components: {
			
		},
		props: ['gloAvtorUrl'],
		data() {
			return {
				nextIndex: 1, // 默认第一个
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
					{name: '很不同意', value: '1'},
					{name: '不同意', value: '2'},
					{name: '中立', value: '3'},
					{name: '同意', value: '4'},
					{name: '很同意', value: '5'},
				]
			}
		},
		methods: {
			radioGroupChange() {},
			next() {
				// console.log(this.value1,this.value2,this.value3,this.value4,this.value5,this.value6,this.value7,this.value8,this.value9,this.value10);
				if(this.value1 && this.value2 && this.value3 && this.value4 && this.value5 && this.value6 && this.value7 && this.value8 && this.value9 && this.value10) {
					let BFI_10 = {
						'B1_T1': this.value1,
						'B1_T2': this.value2,
						'B1_T3': this.value3,
						'B1_T4': this.value4,
						'B1_T5': this.value5,
						'B1_T6': this.value6,
						'B1_T7': this.value7,
						'B1_T8': this.value8,
						'B1_T9': this.value9,
						'B1_T10': this.value10,
					}
					this.$emit('pageEvent', {pageIndex: 8})
					this.$emit('setData', {'BFI_10': BFI_10, pageIndex: 7});
					
				} else {
					this.$refs.uToast.show({
						title: '选项请选择完整',
						type: 'error',
					})
				}
			},
			prePage() {
				if(this.nextIndex <= 1) {
					this.nextIndex = 1
					return
				}
				this.nextIndex -= 1;
			},
			nextPage() {
				if(this.nextIndex >= 5) {
					this.nextIndex = 5
					return
				}
				this.nextIndex += 1;
			}
			
		}
	}
</script>

<style lang="scss">
	.nextPage {
		width: 110px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-radius: 5px;
		background-color: #6fcbeb;
		color: #000;
		font-size: 14px;
		font-weight: 400;
		margin: 50px auto;
	}
	.page7-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page5/bg.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
	
		.submit1 {
			width: 100px;
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-radius: 5px;
			background-color: #6fcbeb;
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