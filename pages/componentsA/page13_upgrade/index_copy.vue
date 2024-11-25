<template>
	<view class="wrap">
		<view class="top">
			<view class="m-a">{{goldCoin}}</view>
			<view class="m-b">{{playNum}}</view>
		</view>
		<view style="width: 93%;display: flex;margin: 45px auto;align-items: center;">
			<view style="width: 81px;height: 81px;border-radius: 50%;background-color: #fff;margin-right: 17px;">
				<image src="../../../static/images/mine.png" style="width: 81px;height: 81px;border-radius: 50%;" mode=""></image>
			</view>
			<view style="background-color: rgba(255,255,255,0.7);padding: 10px 13px;display: flex;height: 70px;border-radius: 8px;">
				<view style="min-width: 199px;font-size: 12px;color: #434343">
					<typewriter
					  v-if="seta"
					  text="hyp，欢迎来到捕鸟大作战，你将迎来一场对专注力和记忆力的修炼!"
					  @finished="finished1"
					  @click="finished1"
					  :speed="animatTime"
					></typewriter>
					<typewriter
					  v-if="setb"
					  text="我将根据你的捕鸟情况给出相应报酬:每抓到两只小鸟奖励20金币，不过如果抓错小鸟将会扣除20金币"
					  @finished="finished2"
					  @click="finished2"
					  :speed="animatTime"
					></typewriter>
					<typewriter
					  v-if="setc"
					  text="同时，你只有三次捕捉小鸟的机会!因此为了得到更多的报酬，你需要更加专心哦"
					  @finished="finished3"
					  :speed="animatTime"
					></typewriter>
					<typewriter
					  v-if="setd"
					  text="现在我将传授你入门版的捕鸟秘诀!总结来说就是:当新出现的小鸟与上一只完全相同时，立刻捕捉!"
					  @finished="finished4"
					  :speed="animatTime"
					></typewriter>
					<typewriter
					  v-if="sete"
					  text="这么说你可能不理解，别担心!先跟着我来学习一遍吧!"
					  @finished="finished5"
					  :speed="animatTime"
					></typewriter>
					
					<view v-if="setf" @click="finished61">
						<typewriter
						  text="第一只小鸟出现了!记住它的样子!然后点击下一只，继续观察下一只小鸟"
						  @finished="finished6"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="setg" @click="finished71">
						<typewriter
						  text="出现了新的小鸟！不过上一只小鸟已经躲进了草丛里，你还记得上一只小鸟是什么样吗？"
						  @finished="finished7"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set11" @click="finished81">
						<typewriter
						  text="先别急着观察下一只，让我们先透过草丛看一看，现在这两只小鸟是否相同"
						  @finished="finished8"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set15" @click="finished85">
						<typewriter
						  text="这两只小鸟并不相同，所以还不能捕捉，因此我们要继续观察下一只"
						  @finished="finished8"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set14" @click="finished104">
						<typewriter
						  text="新出现了一只小鸟，它和上一只是完全一样的！赶紧捕捉！"
						  @finished="finished14"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					
					<view v-if="isThisBird" @click="finished91">
						<typewriter
						  text="这样就成功抓到两只小鸟了！你也将获得20金币作为报酬！"
						  @finished="finished9"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set12" @click="finished101">
						<typewriter
						  text="让我们再继续看看，如果不小心抓错了小鸟会发生什么"
						  @finished="finished11"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set13" @click="finished102">
						<typewriter
						  text="新出现的这只小鸟明显与前一只不同，如果我们此时点击捕捉就会发现……"
						  @finished="finished12"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					<view v-if="set16" @click="finisheddone">
						<typewriter
						  text="不仅会显示你捕获失败，还会扣除20金币作为惩罚！因此在捕鸟过程中一定要认真记忆哦！"
						  @finished="finished12"
						  :speed="animatTime"
						></typewriter>
					</view>
					
					
					
				</view>
				<view style="width: 20px;margin-left: 5px;">
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/shou-3.png" style="width: 28px;height: 28px;" mode=""></image>
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/down.png" style="width: 20px;height: 10px;margin-left: 5px;" mode=""></image>
				</view>
			</view>
		</view>
		
		<view v-if="ania">
			<view style="display: flex;margin-top: 100px;">
				<view style="flex: 1;position: relative;">
					<view style="display: block;text-align: center;min-height: 104px;">
						<image :src="birdList[randNuma-1].url" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					<image v-if="isThisBird" class="currentBird" src="https://dfs.affectai.cn/affect-material/images/page19-1023/tit-1.png" style="width: 150px;height: 90px;" mode=""></image>
					<image v-if="isError" class="currentBird" src="https://dfs.affectai.cn/affect-material/images/page19-1023/tit-2.png" style="width: 150px;height: 90px;" mode=""></image>
						
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">当前鸟{{randNuma}}</view>
				</view>
				<view style="flex: 1;">
					<view style="display: block;text-align: center;min-height: 104px;position: relative;">
						
						<image 
						v-if="isError" 
						class="currentBird" 
						src="https://dfs.affectai.cn/affect-material/images/page19-1023/cao-fail.png"
						 style="width: 139px;height: 90px;top: -15px;left: -8px;" mode=""></image>
						
						
						<image v-if="clickTime == 1 && clickTag != 'finished81' && !isError" class="cao" src="https://dfs.affectai.cn/affect-material/images/page19-1023/cao.png" style="position: absolute;z-index: 500" mode=""></image>
						<image v-if="clickTag == 'finished81' || clickTag == 'finished91' && !isError" class="cao" src="https://dfs.affectai.cn/affect-material/images/page19-1023/cao-2.png" style="position: absolute;z-index: 500" mode=""></image>
						
						<image :src="birdList[randNumb-1].url" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>				
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上一只{{randNumb}}</view>
				</view>
				<view style="flex: 1;">
					<view style="display: block;text-align: center;min-height: 104px;position: relative;">
						<image v-if="clickTag == 'finished81' || clickTag == 'finished91'" class="cao" src="https://dfs.affectai.cn/affect-material/images/page19-1023/cao-2.png" style="position: absolute;z-index: 500" mode=""></image>
						
						<image :src="birdList[randNumc-1].url" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>				
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上上一只{{randNumc}}</view>
				</view>
			</view>
			
			<view style="width: 75%;margin: 68px auto 0 auto;;display: flex;justify-content: space-between;">
				<view @click="getBird" style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #8E8E8E;font-size: 16px;text-align: center;">捕捉</view>
				<view @click="nextBird" style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #fff;font-size: 16px;text-align: center;">下一只</view>
			</view>
		</view>
		
		<view v-if="anib">
			<view style="">
				<view style="display: block;text-align: center;">
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/bird-2.png" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
				</view>
				<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">当前只</view>
			</view>
			
			<view style="display: flex; margin-top: 42px;">
				<view style="flex: 1;">
					<view style="display: block;text-align: center;">
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/cao.png" style="width: 110px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上一只</view>
				</view>
				<view style="flex: 1;">
					<view style="display: block;text-align: center;">
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/bird-2.png" style="width: 76px;height: 79px;display: block;margin: 0 auto;" mode=""></image>
						<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/img-1.png" style="width: 76px;height: 10px;display: block;margin: 15px auto 0 auto;" mode=""></image>
					</view>
					<view style="margin-top: 15px;display: flex;justify-content: center;align-items: center;">上上一只</view>
				</view>
			</view>
			
			<view style="width: 85%;margin: 68px auto 0 auto;;display: flex;justify-content: space-between;">
				<view style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #8E8E8E;font-size: 16px;text-align: center;">捕捉</view>
				<view style="border-radius: 5px;width: 100px;height: 43px;line-height: 43px;background: #C4C4C4;color: #fff;font-size: 16px;text-align: center;">下一只</view>
			</view>
		</view>
		
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components:{typewriter},
		data() {
			return {
				ania: false,
				anib: false,
				tipsText: '',
				seta: false,
				setb: false,
				setc: false,
				setd: false,
				sete: false,
				setf: false,
				setg: false,
				set11: false,
				set12: false,
				set13: false,
				set14: false,
				set15: false,
				set16: false,
				
				setf2: false,
				setf3: false,
				setf4: false,
				animatTime: 5, // 字动画时间
				goldCoin: 1500, // 金币数
				playNum: 3, // 次数
				randNuma: 0, // 当前只
				randNumb: 0, // 上一只
				randNumc: 0, // 上上只
				birdList: [
					{index: 1, name: 'bird-1', url: 'https://dfs.affectai.cn/affect-material/images/page19-1023/bird-1.png'},
					{index: 2, name: 'bird-2', url: 'https://dfs.affectai.cn/affect-material/images/page19-1023/bird-2.png'},
					{index: 3, name: 'bird-3', url: 'https://dfs.affectai.cn/affect-material/images/page19-1023/bird-3.png'},
					{index: 4, name: 'bird-4', url: 'https://dfs.affectai.cn/affect-material/images/page19-1023/bird-4.png'},
					{index: 5, name: 'bird-5', url: 'https://dfs.affectai.cn/affect-material/images/page19-1023/bird-5.png'},
					
				],
				clickTime: 0,
				clickTag: '', // 半透明状态
				isThisBird: false, // true 是当前鸟，false不是当前鸟
				isError: false, // 选错的状态
			}
		},
		created() {
			
		},
		methods: {
			nextBird() {
				this.clickTime++;
				console.log(this.set13, 'set13');
				if(this.set13 == true) {
					this.randNuma = this.randNumb;
				} else {
					if(this.clickTime >= 2) {
						this.randNumc  = this.randNumb;
						
						this.clickTag = 'finished81'
					}
					if (this.clickTime >= 3) {
						this.clickTag = 'finished91'
					}
					this.randNumb = this.randNuma;
					this.randNuma = Math.floor(Math.random() * 5) + 1;
				}
				
				
				
			},
			getBird() {
				if(this.randNuma === this.randNumb) {
					this.isThisBird = true;
					this.goldCoin += 20;
					
					this.seta = false;
					this.setb = false;
					this.setc = false;
					this.setd = false;
					this.sete = false;
					this.setf = false;
					this.setg = false;
					this.set11 = false;
					this.set15 = false;
					this.set14 = false;
					this.set12 = false;
					this.set13 = false;
					this.set16 = false;
				} else {
					if(this.playNum <= 0) {
						this.$refs.uToast.show({
							title: '次数用完了',
							type: 'error',
						})
						return
					}
					this.isThisBird = false;
					this.isError = true;
					this.goldCoin -= 20;
					this.playNum -= 1
				}
			},
			finished1() {
				// 第二个
				this.seta = false;
				this.setb = true;
				this.setc = false;
				this.setd = false;
				this.sete = false;
				this.clickTag = 'finished1';
			},
			finished2() {
				// 第三个
				this.seta = false;
				this.setb = false;
				this.setc = true;
				this.setd = false;
				this.sete = false;
				this.clickTag = 'finished1';
			},
			finished3() {
				// 第四个
				this.seta = false;
				this.setb = false;
				this.setc = false;
				this.setd = true;
				this.sete = false;
				this.clickTag = 'finished3';
				
			},
			finished4() {
				this.seta = false;
				this.setb = false;
				this.setc = false;
				this.setd = false;
				this.sete = true;
				this.clickTag = 'finished4';
			},
			finished5() {
				this.seta = false;
				this.setb = false;
				this.setc = false;
				this.setd = false;
				this.sete = false;
				this.setf = true;
				this.ania = true;
				this.clickTag = 'finished5';
			},
			finished6() {
				console.log('finished6');
				this.seta = false;
				this.setb = false;
				this.setc = false;
				this.setd = false;
				this.sete = false;
				this.setf = true;
				this.ania = true;
				this.clickTag = 'finished6'
				this.randNuma = Math.floor(Math.random() * 5) + 1;
			},
			finished61() {
				this.setf = false;
				this.setg = true;
				this.clickTag = 'finished7'
			},
			finished7() {
				console.log('finished7');
				this.seta = false;
				this.setb = false;
				this.setc = false;
				this.setd = false;
				this.sete = false;
				this.setf = false;
				this.setg = true;
				this.clickTag = 'finished7'
			},
			finished71() {
				this.setg = false;
				this.set11 = true;
			},
			finished8() {},
			finished81() {
				// this.clickTag = 'finished81'
				this.set11 = false
				this.set15 = true;
			},
			finished85() {
				// this.clickTag = 'finished81'
	
				this.set15 = false
				this.set14 = true;
			},
			finished9() {},
			finished91() {
				this.set11 = false;
				this.set14 = false;
				this.set12 = true;
				this.isThisBird = false;
				
			},
			finished11() {},
			finished101() {
				// TODO 此处要做 不是一样的处理，这里提示的是不一样的小鸟，但这里随机的 可能会出现相等的
				this.set11 = false;
				this.set12 = false;
				this.set13 = true;
			},
			finished12() {},
			finished102() {
				this.set13 = false
				this.set16 = true
			},
			finished13() {},
			finished14() {},
			finished104() {
				this.set14 = false
				this.isThisBird = true
			},
			finisheddone() {
				this.isThisBird = false
				this.isThisBird = false
				this.isError = false
			}
		},
		mounted() {
			this.seta = true;
			// setTimeout(() => {
			// 	this.tipsText = 'hyp，欢迎来到捕鸟大作战，你将迎来一场对专注力和记忆力的修炼!'
			// 	this.seta = true;
			// 	this.setb = false;
			// 	this.setc = false;
			// 	this.setd = false;
			// 	this.sete = false;
				
			// }, 3)
			// setTimeout(() => {
			// 	this.seta = false;
			// 	this.setb = true;
			// 	this.setc = false;
			// 	this.setd = false;
			// 	this.sete = false;
			// }, 2500)
			// setTimeout(() => {
			// 	this.seta = false;
			// 	this.setb = false;
			// 	this.setc = true;
			// 	this.setd = false;
			// 	this.sete = false;
			// }, 4000)
			// setTimeout(() => {
			// 	this.seta = false;
			// 	this.setb = false;
			// 	this.setc = false;
			// 	this.setd = true;
			// 	this.sete = false;
			// }, 5000)
			// setTimeout(() => {
			// 	this.seta = false;
			// 	this.setb = false;
			// 	this.setc = false;
			// 	this.setd = false;
			// 	this.isNext = true;
			// 	this.sete = true;
			// }, 6000)
			// setTimeout(() => {
			// 	this.seta = false;
			// 	this.setb = false;
			// 	this.setc = false;
			// 	this.setd = false;
			// 	this.sete = false;
			// 	this.setf = true;
			// 	this.ania = true
			// }, 7000)
		},
	}
</script>

<style lang="scss">
	.wrap {
		min-height: 100vh;
		background-image: url(https://dfs.affectai.cn/affect-material/images/page18-1022/bird-start-bg.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
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
				background-image: url(https://dfs.affectai.cn/affect-material/images/page19-1023/m-a.png);
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
				background-image: url(https://dfs.affectai.cn/affect-material/images/page19-1023/m-b.png);
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
			left: 0;
			z-index: 500;
			
		}
	}
</style>