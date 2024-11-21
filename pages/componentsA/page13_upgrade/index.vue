<template>
	<view class="wrap">
		<view v-if="!anib" style="width: 93%;display: flex;margin: 45px auto;align-items: center;">
			<view style="width: 81px;height: 81px;border-radius: 50%;background-color: #fff;margin-right: 17px;">
				<image :src="gloAvtorUrl" style="width: 81px;height: 81px;border-radius: 50%;" mode=""></image>
			</view>
			<view style="background-color: rgba(255,255,255,0.7);padding: 10px 13px;display: flex;height: 70px;border-radius: 8px;">
				<view style="min-width: 199px;font-size: 12px;color: #434343">
					<view v-if="dialogueIndex == 1" @click="bindAnimat">
						<typewriter
						  text="hyp，欢迎来到进阶版的捕鸟大作战，这次你将迎来更加艰巨的考验！"
						  :speed="animatTime"
						></typewriter>
					</view>
					<view v-if="dialogueIndex == 2" @click="bindAnimat">
						<typewriter
						  text="因为难度有所提升，所以报酬也将增加：每抓到两只小鸟将奖励40金币，如果抓错小鸟仍会扣除20金币"
					
						  :speed="animatTime"
						></typewriter>
					</view>
					<view v-if="dialogueIndex == 3" @click="bindAnimat">
						<typewriter
						  text="现在我将传授你进阶版的捕鸟秘诀！总结来说就是：当新出现的小鸟与上上只完全相同时，立刻捕捉！"
				
						  :speed="animatTime"
						></typewriter>
					</view>
					<!-- <view v-if="dialogueIndex == 4" @click="bindAnimat">
						<typewriter
						  text="现在我将传授你入门版的捕鸟秘诀!总结来说就是:当新出现的小鸟与上一只完全相同时，立刻捕捉!"
						 
						  :speed="animatTime"
						></typewriter>
					</view> -->
					<view v-if="dialogueIndex == 4" @click="bindAnimat">
						<typewriter
						  text="还是老规矩，跟上我的步骤，来学习一遍吧！"
						
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 5" @click="bindAnimat">
						<typewriter
						  text="第一只小鸟出现了!记住它的样子!然后点击下一只，继续观察下一只小鸟"
						 
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 6" @click="bindAnimat">
						<typewriter
						  text="出现了新的小鸟！不过上一只小鸟已经躲进了草丛里，注意记忆这两只小鸟的样子哦！"
						
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 7" @click="bindAnimat">
						<typewriter
						  text="到了关键部分！这一次捕获小鸟的秘诀在于：当新出现的小鸟与上上只完全相同时，即可捕捉"
						
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 8" @click="bindAnimat">
						<typewriter
						  text="让我们再次透过草丛观察一下现在的三只小鸟，看新出现的这只小鸟与上上只是否相同"
						  
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 9" @click="bindAnimat">
						<typewriter
						  text="可以发现这两只小鸟并不相同，所以我们等一等，再继续察一番"
					
						  :speed="animatTime"
						></typewriter>
					</view>
					
					
					<view v-if="dialogueIndex == 10" @click="bindAnimat">
						<typewriter
						  text="新的小鸟出现了！让我考考你，你还记得上上只小鸟的样子"
					
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 11" @click="bindAnimat">
						<typewriter
						  text="让我们再次透过草丛，观察一下现在的三只小鸟"
				
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 12" @click="bindAnimat">
						<typewriter
						  text="这只小鸟和上上只小鸟是完全一样的，立刻捕捉！"
			
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="dialogueIndex == 13" @click="bindAnimat_end">
						<typewriter
						  text="这样就成功抓到两只小鸟了！"
						
						  :speed="animatTime"
						></typewriter>
					</view>
				</view>
				<view 
				v-if="dialogueIndex == 13 || (dialogueIndex <= 11 && (dialogueIndex != 6 && dialogueIndex != 9 ))" 
				@click="bindAnimat"
				style="width: 20px;margin-left: 5px;">
					<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/shou-3.png" @click="bindAnimat" class="bouncy" style="width: 17px;height: 17px;margin-left: 5px;" mode=""></image>
					<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/down.png" style="width: 17px;height: 8px;margin-left: 5px;" mode=""></image>
				</view>
			</view>
		</view>
		
		<view v-if="dialogueIndex >= 5 && !anib">
			<view style="display: flex;margin-top: 100px;">
				<view style="flex: 1;position: relative;">
					<view style="display: block;text-align: center;min-height: 104px;">
						<image :src="birdList[randNuma-1].url" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					<image v-if="is_success" 
					class="currentBird" 
					src="https://datastream.affectai.cn/callmaterial/images/page19-1023/tit-1.png" style="width: 150px;height: 90px;" mode=""></image>
					<image 
					v-if="is_error" 
					class="currentBird" 
					src="https://datastream.affectai.cn/callmaterial/images/page19-1023/tit-2.png" style="width: 150px;height: 90px;" mode=""></image>
						
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">当前鸟</view>
				</view>
				<view style="flex: 1;">
					<view style="display: block;text-align: center;min-height: 104px;position: relative;">
						
						<!-- <image 
							v-if="dialogueIndex == 13" 
							class="currentBird" 
							src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao-fail.png"
							 style="width: 139px;height: 90px;top: -15px;left: -8px;" mode=""></image> -->
						
						<image 
						v-if="(dialogueIndex == 13 || dialogueIndex == 7 || dialogueIndex == 6 || dialogueIndex == 10 ||  dialogueIndex == 11) && !isError" 
						class="cao" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao.png" 
						style="position: absolute;z-index: 500" mode=""></image>
						
						<image 
						v-if="
						( dialogueIndex == 8 || dialogueIndex == 9  || dialogueIndex == 12)
						 && !isError" 
						class="cao cao-2" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao-2.png" 
						style="position: absolute;z-index: 500" mode=""></image>
						
						<image :src="birdList[randNumb-1].url" style="width: 65px;height: 65px;margin: 0 38px 28px auto;display: block;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>				
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上一只</view>
				</view>
				<view style="flex: 1;">
					<view style="display: block;text-align: center;min-height: 104px;position: relative;">
						<image
						v-if="(dialogueIndex == 7 || dialogueIndex == 10 || dialogueIndex == 11) && !isError" 
						class="cao cao2" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao.png" 
						style="position: absolute;z-index: 500" mode=""></image>
						
						<image 
						v-if="dialogueIndex == 8 || dialogueIndex == 13 || dialogueIndex == 9  || dialogueIndex == 12" 
						class="cao cao-2" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao-2.png" 
						style="position: absolute;z-index: 500" mode=""></image>
						
						<image :src="birdList[randNumc-1].url" style="width: 65px;height: 65px;margin: 0 38px 28px auto;display: block;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>				
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上上一只</view>
				</view>
			</view>
			
			<view style="width: 75%;margin: 68px auto 0 auto;;display: flex;justify-content: space-between;">
				<view 
				
				@click="getBird"
				:class="[( dialogueIndex == 12) ? 'activeNext' : '']"
				style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #8E8E8E;font-size: 16px;text-align: center;position: relative;">
				
				捕捉
				<image
				 v-if="dialogueIndex == 12"
				 class="opactyAnimly"
				 src="https://datastream.affectai.cn/callmaterial/images/page19-1023/shou-2.png"
				  style="width: 80px;height: 80px;display: block;margin: 15px auto 0 auto;position: absolute;top: 25px;left: 15px;right: auto;" mode=""></image>
				  
				</view>
				<view 
					@click="nextBird"
					:class="[( dialogueIndex == 6 || dialogueIndex == 7 || dialogueIndex == 9) ? 'activeNext' : '']"
					style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #fff;font-size: 16px;text-align: center;position: relative;">
				 下一只
				 <image
				 	v-if="
				 	 dialogueIndex == 6 || dialogueIndex == 7 || dialogueIndex == 9
				 	"
				 	class="opactyAnimly"
				 	
				 	src="https://datastream.affectai.cn/callmaterial/images/page19-1023/shou-2.png" 
				 	style="width: 80px;height: 80px;display: block;margin: 15px auto 0 auto;position: absolute;top: 25px;left: auto;right: 0;" mode=""></image>
				 </view>
			</view>
		</view>
		
		<!-- 进阶正式 -->
		<view v-if="anib" style="width: 93%;margin: 45px auto;align-items: center;">
			<view style="display: flex;align-items: center;">
				<view style="width: 81px;height: 81px;border-radius: 50%;background-color: #fff;margin-right: 17px;">
					<image :src="gloAvtorUrl" style="width: 81px;height: 81px;border-radius: 50%;" mode=""></image>
				</view>
				<view style="background-color: rgba(255,255,255,0.7);padding: 10px 13px;display: flex;height: 70px;border-radius: 8px;">
					<view style="min-width: 199px;font-size: 12px;color: #434343">
						<view v-if="dialogueIndex_b == 1" @click="bindAnimat_b">
							<typewriter
							  text="正式开始捕鸟了，要注意对小鸟的样子进行记忆哦！"
							  @finished="finished_b1"
							  :speed="animatTime"
							></typewriter>
						</view>
						<view v-if="dialogueIndex_b >= 2 && successTime != 3 && (!b_success && !b_error)" @click="bindAnimat_b">
							<typewriter
							  text="牢记捕乌秘诀：当前小鸟与上上一只小鸟完全相同时，立刻捕捉！"
							  :speed="animatTime"
							></typewriter>
						</view>
						
						<view v-if="b_success" @click="bindAnimat_b">
							<typewriter
							  text="你很不错！再接再励！"
							  :speed="animatTime"
							></typewriter>
						</view>
						<view v-if="b_error" @click="bindAnimat_b">
							<typewriter
							  text="不要心急，注意记忆小鸟的样子"
							  :speed="animatTime"
							></typewriter>
						</view>
						<view v-if="successTime == 3" @click="bindAnimat_end">
							<typewriter
							  text="恭喜你完成了所有的捕鸟任务，捕鸟结束啦！"
							></typewriter>
						</view>
					</view>
					<!-- <view style="width: 20px;margin-left: 5px;">
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/shou-3.png" style="width: 17px;height: 17px;margin-left: 5px;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/down.png" style="width: 17px;height: 8px;margin-left: 5px;" mode=""></image>
					</view> -->
				</view>
			</view>
			
			<view style="display: flex;margin-top: 100px;">
				<view style="flex: 1;position: relative;">
					<view style="display: block;text-align: center;min-height: 104px;">
						<image :src="birdList[randNuma-1].url" style="width: 65px;height: 65px;margin: 0 38px 28px auto;display: block;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					<image v-if="b_success" class="currentBird" src="https://datastream.affectai.cn/callmaterial/images/page19-1023/tit-1.png" style="width: 150px;height: 90px;" mode=""></image>
					<image v-if="b_error" class="currentBird" src="https://datastream.affectai.cn/callmaterial/images/page19-1023/tit-2.png" style="width: 150px;height: 90px;" mode=""></image>
						
					<!-- <view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">当前鸟{{dialogueIndex_b}}</view> -->
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">当前鸟</view>
				</view>
				<view style="flex: 1;position: relative;">
					
					<!-- (dialogueIndex_b == 5 || dialogueIndex_b == 4 || dialogueIndex_b == 2) && !isError -->
					
					<image
						v-if="dialogueIndex_b > 1"
						class="cao cao2"
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao.png" style="position: absolute;z-index: 500" mode=""></image>
						
					<view style="display: block;text-align: center;min-height: 104px;">
						<image :src="birdList[randNumb-1].url" style="width: 65px;height: 65px;margin: 0 38px 28px auto;display: block;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					
					<!-- <view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上一只{{randNumb}}</view> -->
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上一只</view>
					
				</view>
				<view style="flex: 1;position: relative;">
					<image
						v-if="caoFail" 
						class="currentBird" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao-fail.png"
						style="width: 139px;height: 90px;top: -15px;left: -8px;" mode=""></image>
					
					<image
						v-if="caoFlag"
						 class="cao cao2"
						 src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao.png" 
						 style="position: absolute;z-index: 500;left: -2px !important;" mode=""></image>
									
					<image
						v-if="
						(b_success || successTime == 3)
						 && !caoFail" 
						class="cao" 
						src="https://datastream.affectai.cn/callmaterial/images/page19-1023/cao-2.png" 
						style="position: absolute;z-index: 500" mode=""></image>
						
					<view style="display: block;text-align: center;min-height: 104px;">
						<image :src="birdList[randNumc-1].url" style="width: 66px;height: 75px;display: block;margin: 0 auto 19px 35px;" mode=""></image>
						<image src="https://datastream.affectai.cn/callmaterial/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					
					<!-- <view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上上一只{{randNumc}}</view> -->
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上上一只</view>
					
				</view>
			</view>
			
			<view style="width: 85%;margin: 68px auto 0 auto;;display: flex;justify-content: space-between;">
				<view 
				@click="thisBird_b" 
				style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #8E8E8E;font-size: 16px;text-align: center;">捕捉</view>
				<view 
				v-if="dialogueIndex_b>=1"
				:class="[(dialogueIndex_b >= 1) ? 'activeNext':'']"
				@click="nextBird_b" 
				style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #fff;font-size: 16px;text-align: center;">
					下一只</view>
			</view>
		</view>
		
		<!-- 结束弹框 -->
		<view class="endModel" v-if="dialogueIndex == 14">
			<view class="dialogueModel">
				
				<view style="display: flex;margin-top: 30px;margin-bottom: 80px;height: 50px;">
					<u-image width="50px" height="50px" style="width: 45px;height: 45px;border-radius: 50%;;background-color: #fff;"
					 :src="gloAvtorUrl"></u-image>
					 <view style="margin-left: 15px;">进阶版的教学就到这里了。现在，你准备好正式开始捕鸟了吗？</view>
				</view>
				<view style="display: flex;width: 85%;margin: 0 auto;justify-content: space-between;">
					<view @click="nextPage" 
					style="border-radius: 5px;width: 110px;height: 45px;line-height: 45px;text-align: center;color: #434343;font-size: 16px;background-color: #76de69;">准备好了</view>
					<view @click="tryAgrin" style="border-radius: 5px;width: 110px;height: 45px;line-height: 45px;text-align: center;color: #434343;font-size: 16px;background-color: #76de69;">在学一次</view>
				</view>
			</view>
		</view>
		
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import { Script } from "vm";
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components:{typewriter},
		props: ['gloAvtorUrl'],
		data() {
			return {
				dialogueIndex: 1,
				dialogueIndex_b: 1,
				tipsText: '',
				is_success: false,
				is_error: false,
				
				ania: false,
				anib: false,
				seta: false,
				setb: false,
				b_success: false,
				b_error: false,
				
				back_game_1: [], // 第1次捕鸟记录
				back_game_2: [], // 第2次捕鸟记录
				animatTime: 100, // 字动画时间
				goldCoin: 1500, // 金币数
				playNum: 3, // 次数
				randNuma: 0, // 当前只
				randNumb: 0, // 上一只
				randNumc: 0, // 上上只
				birdList: [
					{index: 1, name: 'bird-1', url: 'https://datastream.affectai.cn/callmaterial/images/page19-1023/bird-1.png'},
					{index: 2, name: 'bird-2', url: 'https://datastream.affectai.cn/callmaterial/images/page19-1023/bird-2.png'},
					{index: 3, name: 'bird-3', url: 'https://datastream.affectai.cn/callmaterial/images/page19-1023/bird-3.png'},
					{index: 4, name: 'bird-4', url: 'https://datastream.affectai.cn/callmaterial/images/page19-1023/bird-4.png'},
					{index: 5, name: 'bird-5', url: 'https://datastream.affectai.cn/callmaterial/images/page19-1023/bird-5.png'},
					
				],
				clickTime: 0,
				clickTag: '', // 半透明状态
				isThisBird: false, // true 是当前鸟，false不是当前鸟
				isError: false, // 选错的状态
				caoFail: false,
				caoFlag: false,
				successTime: 0, // 成功次数
				
				innerAudioContext_success: null,
				innerAudioContext_fail: null,
				innerAudioContext_n: null,
			}
		},
		created() {
			// 捕获成功音效
			this.innerAudioContext_success = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_fail = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			// 捕获成功音效
			this.innerAudioContext_success.src = 'https://datastream.affectai.cn/callmaterial/images/audio/a1.mp3';
			// 捕获失败音效
			this.innerAudioContext_fail.src = 'https://datastream.affectai.cn/callmaterial/images/audio/a2.mp3';
			
			// 下一步音频
			this.innerAudioContext_n = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_n.src = 'https://datastream.affectai.cn/callmaterial/images/audio/a3.mp3';
			
		},
		beforeDestroy() {
			this.innerAudioContext_success && this.innerAudioContext_success.destroy();
			this.innerAudioContext_fail && this.innerAudioContext_fail.destroy();
			this.innerAudioContext_n && this.innerAudioContext_n.destroy();
		},
		methods: {
			bindAnimat() {
				this.is_success = false;
				this.is_error = false;
				if(this.dialogueIndex == 12) return;
				if(this.dialogueIndex == 14) return;
				
				this.dialogueIndex += 1;
				if(this.dialogueIndex == 5) {
					// 显示固定第3个
					// 第一个
					this.randNuma = 3;
				}
				if(this.dialogueIndex == 6) {
					// 第二个鸟
					this.randNumb = 3;
					this.randNuma = 2
				}
				if(this.dialogueIndex == 7) {
					// 第3个鸟
					this.randNumc = 3;
					this.randNumb = 2;
					this.randNuma = 1
				}
				if(this.dialogueIndex == 8) {
					
					this.randNumc = 3;
					this.randNumb = 2;
					this.randNuma = 1
				}
				
				if(this.dialogueIndex == 10) {
					this.randNuma = 3
				}
				
				console.log(this.dialogueIndex);
			},
			nextBird() {
				this.innerAudioContext_n.play();
				this.is_success = false;
				this.is_error = false;
				if(this.dialogueIndex == 12) return;
				if(this.dialogueIndex == 14) return;
				
				this.dialogueIndex++;
				 
				if(this.dialogueIndex == 5) {
					// 显示固定第3个
					// 第一个
					this.randNuma = 3;
				}
				if(this.dialogueIndex == 6) {
					// 第二个鸟
					this.randNumb = 3;
					this.randNuma = 2
				}
				if(this.dialogueIndex == 7) {
					// 第3个鸟
					this.randNumc = 3;
					this.randNumb = 2;
					this.randNuma = 1
				}
				if(this.dialogueIndex == 8) {
					
					this.randNumc = 3;
					this.randNumb = 2;
					this.randNuma = 1
				}
				
				if(this.dialogueIndex == 9) {
					
				}
				if(this.dialogueIndex == 10) {
					this.randNuma = 3
				}
				
				
				console.log(this.dialogueIndex);
				
			},
			getBird() {
				if(this.randNuma === this.randNumc) {
					this.innerAudioContext_success.play();
					this.isThisBird = true;
					this.dialogueIndex += 1;
					this.goldCoin += 40;
					this.is_success = true;
					this.is_error = false
					
					this.seta = false;
					this.setb = false;
					// TODO 金币是否重置
					this.$emit('setGoldCoin', {goldCoin: this.goldCoin});
				} 
				
				if(this.dialogueIndex == 12 && (this.randNuma !== this.randNumb)) {
					this.innerAudioContext_fail.play();
					this.dialogueIndex += 1;
					this.isError = true;
					this.is_success = false;
					this.is_error = true
					this.goldCoin -= 20;
					this.$emit('setGoldCoin', {goldCoin: this.goldCoin, playNum: this.playNum});
				}
			},
		
			bindAnimatBird () {
				this.isThisBird = false;
				this.dialogueIndex += 1;
			},
			nextPage() {
				this.dialogueIndex = 1;
				this.isThisBird = false;
				this.isError = false
				this.goldCoin = 3;
				this.goldCoin = 1500;
				this.randNuma = 0; // 当前只
				this.randNumb = 0; // 上一只
				this.randNumc = 0; // 上上只
				this.anib = true;
				// 记录 进阶正式开始 时间
				this.$emit('birdRm_start', '')
			},
			tryAgrin() {
				this.dialogueIndex = 1;
				this.isThisBird = false;
				this.isError = false
				this.goldCoin = 3;
				this.goldCoin = 1500;
				this.randNuma = 0; // 当前只
				this.randNumb = 0; // 上一只
				this.randNumc = 0; // 上上只
				
			},
			// b-----进阶正式
			finished_b1() {
				this.randNuma = Math.floor(Math.random() * 5) + 1;
			},
			thisBird_b() {
				if(this.dialogueIndex_b == 1) return;
				if(this.playNum <= 0 ) {
					this.$refs.uToast.show({
						title: '次数用完了！',
						type: 'error'
					});
					this.$emit('birdRm_end', '')
					this.$emit('pageEvent', {pageIndex: '15'})
					
					return
				}
				if(this.successTime >= 2) {
					this.b_success = false
					this.successTime = 3;
					return
				}
				if(this.randNuma == this.randNumc) {
					this.innerAudioContext_success.play();
					this.b_error = false;
					this.caoFail = false
					this.b_success = true;
					this.caoFlag = false;
					this.dialogueIndex_b += 1;
					this.successTime += 1;
					this.goldCoin += 40;
					this.playNum --;
					
					this.back_game_2.push(1)
					this.$emit('setJourney2',{back_game_2: this.back_game_2});
					this.$emit('setGoldCoin', {goldCoin: this.goldCoin, playNum: this.playNum});
				} else {
					this.innerAudioContext_fail.play();
					this.b_success = false;
					this.b_error = true;
					this.caoFail = true; // 捕捉失败
					this.caoFlag = false; // 草，正常绿色，无透明度
					this.dialogueIndex_b += 1;
					this.goldCoin -= 20;
					this.playNum --;
					
					this.back_game_2.push(0);
					this.$emit('setJourney2',{back_game_2: this.back_game_2});
					this.$emit('setGoldCoin', {goldCoin: this.goldCoin, playNum: this.playNum});
					
				}
			},
			nextBird_b() {
				this.innerAudioContext_n.play();
				if(this.successTime == 3) {
					// uni.navigateTo({
					// 	url: '/pages/componentsA/page15/index'
					// })
					this.$emit('birdRm_end', '')
					this.$emit('pageEvent', {pageIndex: '15'})
				}
				if(this.successTime >= 2) {
					this.b_success = false
					this.successTime = 3;
					return
				}
				this.dialogueIndex_b ++;
				this.caoFlag = true;
				this.caoFail = false;
				this.b_error = false
				this.b_success = false
				// dialogueIndex_b为2时，只能通过捕捉点击
				if(this.dialogueIndex_b == 2) {
					this.randNumc = this.randNuma;
					return;
				}
				
				if(this.dialogueIndex_b == 4) {
					this.b_success = false;
				}
				if(this.dialogueIndex_b == 6) {
					this.b_success = false;
				}
				if(this.dialogueIndex_b != 2) {
					this.randNumc = this.randNuma;
					this.randNuma = Math.floor(Math.random() * 5) + 1;
				}
				
			},
			bindAnimat_end() {
				this.$emit('pageEvent', {pageIndex: 15})
			}
		},
		mounted() {
			this.seta = true;
		}
	}
	
</script>
<style lang="scss">
	.wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page18-1022/bird-start-bg.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		overflow-y: scroll;
		
		.top {
			// position: absolute;
			padding-top: 10px;
			display: flex; 
			width: 90%;
			top: 15px;
			left: 0;
			right: 0;
			margin: auto;
				
			.m-a {
				width: 110px;
				height: 45px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page19-1023/m-a.png);
				background-position: center;
				background-size: 100%;
				background-repeat: no-repeat;
				display: flex;
				align-items:  center;
				text-align: center;
				padding-left: 55px;
			}
			.m-b {
				width: 110px;
				height: 45px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page19-1023/m-b.png);
				background-position: center;
				background-size: 100%;
				background-repeat: no-repeat;
				margin-left: 15px;
				display: flex;
				align-items:  center;
				text-align: center;
				padding-left: 55px;
			}
		}
		.currentBird {
			width: 155px;
			height: 101px;
			position: absolute;
			top: -95px;
			left: 70px;
			z-index: 300;
		}
		.cao {
			width: 130px;
			height: 88px;
			top: -12px;
			left: -4px;
			z-index: 500;
			
		}
		.cao2 {
			left: 2px !important;
		}
	}
	
	.endModel {
		width: 100vw;
		height: 100vh;
		background-color: rgba(255,255,255,0.5);
		backdrop-filter: blur(5px);
		position: fixed;
		top: 0;left: 0;z-index: 200;
		// display: none;
	}
	.dialogueModel {
		width: 85vw;
		height: 35vh;
		border: 3px solid #f5bb6f;
		border-radius: 30px;
		position: absolute;
		top: 0;right: 0;left: 0;bottom: 0;
		margin: 50% auto;
		z-index: 300;
		background-color: rgba(255,255,255,0.6);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 10px;
	}
	
	@keyframes bounce {
	    0%, 100% { transform: translateY(0); }
	    50% { transform: translateY(-10px); }
	}
	.bouncy {
	    animation: bounce 1s infinite;
	}
	@keyframes opactyAnim {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	  }
	}
	@keyframes fadeOut {
	  to {
	    opacity: 0;
	    visibility: hidden; /* 使元素在透明度为0后仍然占据原来的空间 */
	  }
	}
	.opactyAnimly {
	    animation: opactyAnim 1s infinite;
		animation-iteration-count: 3;
		animation-fill-mode: forwards;
	}
	.activeNext {
		background: #62c672 !important;
		color: #fff;
	}
</style>