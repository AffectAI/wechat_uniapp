<template>
	<view class="page1-wrap">
		<!-- 心湖倒影 -->
		<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">解忧日记第一卷</view>

		<view style="padding: 0 23px;margin-top: 45px;">
			<view v-if="index == 1">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">1. 在过去的两周里, 您感到紧张、焦虑或烦躁？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value1" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">2. 在过去的两周里, 您感到无法停止或控制担心？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value2" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
			
			<view v-if="index == 2">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">3. 在过去的两周里, 您对各类事情过分担心？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value3" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">4.  在过去的两周里, 您感到很难放松下来？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value4" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
			
			<view v-if="index == 3">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">5. 在过去的两周里, 您感到焦躁不安，以至于难以安静地坐着？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value5" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">6.  在过去的两周里, 您变得容易烦恼或急躁？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value6" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				
			</view>
			<view v-if="index == 4">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 16px;text-align: left;font-weight: 500;margin-bottom: 19px;">7. 在过去的两周里, 您担心因为有什么可怕的事情要发生而感到害怕？</view>
					<view >
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value7" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
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
						<u-radio-group width="160px" active-color="#007EAE" label-size="28" size="30" v-model="value8" @change="radioGroupChange">
							<u-radio 
								
								v-for="(item, index) in list1" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
	
		</view>
		

		<view style="width: 280px;display: flex;margin: 0 auto;justify-content: space-between;">
			<view class="nextPage" v-if="index != 1" @click="prePage"> 上一页 </view>
			<view class="nextPage" v-if="index != 4" @click="nextPage"> 下一页 </view>
			
			<view class="nextPage" v-if="index == 4" @click="next">下一卷</view>
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
		methods: {
			radioGroupChange() {},
			next() {
				uni.navigateTo({
					url: '/pages/componentsA/page24_1/index'
				})
			},
			prePage() {
				if(this.index <= 1) {
					this.index = 1
					return
				}
				this.index -= 1;
			},
			nextPage() {
				if(this.index >= 4) {
					this.index = 4
					return
				}
				this.index += 1;
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
		background-color: #f8d164;
		color: #000;
		font-size: 14px;
		font-weight: 400;
		margin: 50px auto;
	}
	.page1-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img34.png);
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
			// box-shadow: -1px 2px 5px 0px rgb(179, 179 ,179);

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