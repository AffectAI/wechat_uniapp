<template>
	<view class="page30-wrap">
		<!-- 开始游戏按钮 -->
		<u-image @click="startGame" v-if="isStart" width="160px" height="50px" class="startBtn" src="https://datastream.affectai.cn/callmaterial/images/page23/img12.png"></u-image>
		<!-- 退出游戏 --> 
		<u-image @click="overGame" v-if="isOver" width="160px" height="50px" class="startBtn" src="https://datastream.affectai.cn/callmaterial/images/page23/img3.png"></u-image>
		
		<!-- translatex：{{translatex}},bridBottom:{{bridBottom}},{{inFlight}}，volumeSize：{{volumeSize}} -->
		<!-- 飞行的小鸟 -->
		<view class="brid" v-show="!isOut" :style="{bottom: bridBottom + 'px', left: bridLeft + 'px'}"></view>
		
		<!-- 掉落的小鸟 -->
		<view class="outBrid" v-show="isOut" :style="{bottom: outBottom + 'px', left: bridLeft + 'px'}"></view>
		
		<view class="scene" :style="{transform: 'translateX(-'+translatex+'px)'}">
			
			<!-- 地面 -->
			<div class="ground"></div>
			
			<!-- 树 -->
			<view class="tree">
				<view class="tree1"></view>
				<view class="tree2"></view>
				<view class="tree3"></view>
				<view class="tree4"></view>
				<view class="tree5"></view>
			</view>
			
			<!-- 两片云朵 -->
			<u-image src="https://datastream.affectai.cn/callmaterial/images/page23/img8.png" width="225px" height="55px" style="width: 225px;height: 55px; position: absolute;top: 20px;left: 40px;"></u-image>
			<u-image src="https://datastream.affectai.cn/callmaterial/images/page23/img9.png" width="225px" height="55px" style="width: 225px;height: 55px; position: absolute;top: 20px;left: 400px;"></u-image>
		</view>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isOver: false, // 是否结束,false 未结束
				isStart: true,
				time: null,
				timeoutEvent: null,
				translatex: 0,
				bridBottom: 160,
				outBottom: 160,
				bridLeft: 10,
				recorder: null,
				isRejectRecord: null, // 是否拒绝录音，false 同意录音，true 拒绝录音
				volumeSize: 0, // 音量大小
				inFlight: 'stop', //是否停下， 飞行中 flight， 停下 stop
				isOut: false,  //是否掉落。true 掉落， false 未掉落
				outTime: 0, // 经过树的时候 掉落的次数，如果超过1次就直接飞过了
				isSound: false, // 是否有声音，有声音为true
				isSoundEvent: null,
				innerAudioContext: null,
			}
		},
		props: ['gloAvtorUrl'],
		mounted() {
			uni.authorize({
			    scope: 'scope.record',
			    success: () => {
					this.isRejectRecord = false;
			        this.authRecord();
			    },
				fail: (err) => {
					console.log(err);
					this.isRejectRecord = true;
				}
			});
			
			this.innerAudioContext = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			  loop: true
			});
			this.innerAudioContext.src = 'https://datastream.affectai.cn/callmaterial/images/audio/a4.mp3';
			
		},
		beforeDestroy() {
			if(this.time) {
				clearInterval(this.time)
			}
			this.innerAudioContext.destroy();
		},
		methods: {
			authRecord() {
				let recorder = uni.getRecorderManager();
				const audioCtx = uni.createWebAudioContext()
				const analyser = audioCtx.createAnalyser();
				recorder.onFrameRecorded(listener => {
				  if (listener.isLastFrame) {
					// console.log('soundIntensity', 0)
					// this.data.wave.input(4096, 0)
					// this.startGame();
				  } else {
					audioCtx.decodeAudioData(listener.frameBuffer, buffer => {
					  let source = audioCtx.createBufferSource()
					  source.buffer = buffer
					  source.connect(analyser)
					  source.start()
					  let n = new Uint8Array(analyser.frequencyBinCount)
					  analyser.getByteTimeDomainData(n)
					  let i = 0,
						r = 0,
						s = 0
					  r = Math.max.apply(null, n)
					  s = Math.min.apply(null, n)
					  i = (r - s) / 128
					  i = Math.round(i * 100 / 2)
					  i = i > 100 ? 100 : i;
					
					  this.volumeSize = i;
					  if (i > 15) {
						this.isSound = true
						this.startGame();
					  }
					  
					  // 第一个树
					  if(this.bridBottom >= 560) {
						  this.bridBottom = 560;
					  } else {
						  // 低于20 +10
						 //  if(this.volumeSize <= 20) {
							//   // this.bridBottom += 30;
						 //  }
						 //  if(this.volumeSize > 15 && this.volumeSize < 50) {
							// // this.bridBottom += 50;
							//  this.bridBottom = 295;
						 //  }
						 //  if(this.volumeSize >= 50 && this.volumeSize < 80) {
						 //  	// this.bridBottom += 150;
							//  this.bridBottom = 350;
						 //  }
						 //  if(this.volumeSize >= 80) {
						 //  	this.bridBottom = 450;
						 //  }
						 //  if(this.volumeSize > 80) {
						 //  	this.bridBottom = 500;
						 //  }
						 if(this.volumeSize >= 15) {
							this.bridBottom += (this.volumeSize + 30)
						 }
						
					  }
					  this.outBottom = 130
					  // 第二个树
					  
					  /**
					   * 控制小鸟飞行
					   * 音量大于40直接升起
					   */ 
					  
					  // this.data.wave.input(4096, listener.isLastFrame ? 0 : i, 16000)
					}, err => {
						// this.startGame();
					  console.error('decodeAudioData fail', err)
					})
				  }
				});
				
				this.recorder = recorder;
				this.recorder.onStop( (res) => {
				  console.log('recorder stop tempFilePath' + JSON.stringify(res.tempFilePath));
				  // this.uploadRecording(res.tempFilePath);  
				  this.$emit('setBirdRecore', {recoreTempPath: res.tempFilePath, audioType: 'audio', start_time: startTime,postion: 'bird_flight'});
				  this.ctx && this.ctx.stop();
				  
				});
			},
			/**
			 *  飞行的规则 
			 * 	树的位置： 第一位置 小树， 第二位置 松树， 第三大树， 第四大树（球状），第五大松树， 
			 * 
			 *	第一位置：x: -300px
			 * 	第二位置：x: -600px
			 * 	第三位置：x: -900px
			 *  ....
			 * 	相距300px
			*/
			startGame() {
				this.isStart = false;
				this.recorder.start({
				  duration: 600000,   // 30s
				  sampleRate: 16000, //采样率
				  numberOfChannels: 1, //录音通道数
				  encodeBitRate: 96000, //编码码率
				  format: 'mp3', //音频格式，有效值 aac/mp3
				  frameSize: 1
				})
				if(this.isRejectRecord === true) {
					this.$refs.uToast.show({
						title: '请授权录音功能',
						type: 'error',
					});
					uni.getSetting({
						success(res) {
							if (!res.authSetting['scope.record']) {
								uni.authorize({
								    scope: 'scope.record',
								    success: () => {
										this.isRejectRecord = false;
								        this.authRecord();
								    },
									fail: (err) => {
										console.log(err);
										this.isRejectRecord = true;
									}
								})
							}
						}
					})
					// uni.authorize({
					//     scope: 'scope.record',
					//     success: () => {
					// 		this.isRejectRecord = false;
					//         this.authRecord();
					//     },
					// 	fail: (err) => {
					// 		console.log(err);
					// 		this.isRejectRecord = true;
					// 	}
					// })
					return
				}
				this.inFlight = 'flight';
				if(this.time) {
					// clearInterval(this.time)
					// this.time = null;
					return
				}
				this.time = setInterval(() => {
					// 小鸟下降
					if(this.bridBottom <= 160) {
						this.bridBottom = 160;
					}
					if(this.isSound = false) {
						this.bridBottom > 160 ? this.bridBottom -= 30 : this.bridBottom = 160;
						this.isSoundEvent && clearTimeout(this.isSoundEvent);
						this.isSoundEvent = null;
					}
					this.isSoundEvent = setTimeout(() => {
						this.isSound = false;
						this.bridBottom > 160 ? this.bridBottom -= 30 : this.bridBottom = 160;
					}, 1000);
					
					
					// 重置状态
					this.inFlight = 'flight';
					this.isOut = false;
					this.timeoutEvent = null;
					clearTimeout(this.timeoutEvent);
					
					if(this.translatex == 140) {
						console.log('经过第1个树前');
						this.inFlight = 'stop';
						clearInterval(this.time)
						this.time = null;
					}
					
					// 第1个树，定义区间：	150 <= x < 200
					if(this.translatex >= 200 && this.translatex < 320) {
						if(this.bridBottom < 290 && (this.volumeSize < 15)) {
							if(this.outTime == 0) {
								this.isOut = true;
								this.inFlight = 'stop';
								
								this.innerAudioContext.play();
								clearInterval(this.time)
								this.time = null;
								this.outTime += 1;
								this.timeoutEvent = setTimeout(() => {
									
									this.isOut = false;
									this.inFlight = 'flight'
									this.startGame();
								}, 3000);
							}
						} else {
							// 飞过第一个树 开始时间
							this.$emit('tree_start', '')
						}
						console.log('第1个区间');
					}
					if(this.translatex >= 320 && this.translatex < 550) {
						this.outTime = 0;
						clearTimeout(this.timeoutEvent);
						this.timeoutEvent = null;
						
					}
					
					if(this.translatex == 550) {
						console.log('经过第2个树');
						this.inFlight = 'stop';
						clearInterval(this.time)
						this.time = null;
					}
					// 第2个区间：500 <= x < 680
					if(this.translatex >= 680 && this.translatex < 770) {
						if(this.bridBottom < 340 && (this.volumeSize < 15)) {
							if (this.outTime == 0) {
								this.isOut = true;
								this.inFlight = 'stop';
								this.innerAudioContext.play();
								clearInterval(this.time);
								this.time = null;
								this.outTime += 1;
													
								this.timeoutEvent = setTimeout(() => {
									this.isOut = false;
									this.inFlight = 'flight';
									this.startGame();
								}, 600);
							}
						}
					}
					if(this.translatex >= 770 && this.translatex < 900) {
						this.outTime = 0;
						clearTimeout(this.timeoutEvent);
						this.timeoutEvent = null;
					}
					
					if(this.translatex == 970) {
						console.log('经过第3个树');
						this.inFlight = 'stop';
						clearInterval(this.time)
						this.time = null;
						
					}
					// 第3个区间：900 <= x < 1000
					if(this.translatex >= 1070 && this.translatex < 1300) {
						if(this.bridBottom < 360 && (this.volumeSize < 15)) {
							if(this.outTime == 0) {
								this.isOut = true;
								this.inFlight = 'stop';
								this.innerAudioContext.play();
								clearInterval(this.time);
								this.time = null;
								this.outTime += 1;
								
								this.timeoutEvent = setTimeout(() => {
									this.isOut = false;
									this.inFlight = 'flight'
									this.startGame();
								}, 600);
							}
						}
						console.log('第3个区间');
					}
					if(this.translatex >= 1370 && this.translatex < 1400) {
						this.outTime = 0;
						clearTimeout(this.timeoutEvent);
						this.timeoutEvent = null;
					}
					
					if(this.translatex == 1600) {
						console.log('经过第4个树');
						this.inFlight = 'stop';
						clearInterval(this.time)
						this.time = null;
					}
					// 第4个区间：
					if(this.translatex >= 1700 && this.translatex < 2030) {
						console.log('第4个区间');
						if(this.bridBottom < 440 && (this.volumeSize < 15)) {
							if(this.outTime == 0) {
								this.isOut = true;
								this.inFlight = 'stop';
								this.innerAudioContext.play();
								clearInterval(this.time);
								this.time = null;
								this.outTime += 1;
								
								this.timeoutEvent = setTimeout(() => {
									this.isOut = false;
									this.inFlight = 'flight';
									this.startGame();
								}, 600);
							}
						}
					}
					if(this.translatex >= 2030 && this.translatex < 2100) {
						this.outTime = 0;
						clearTimeout(this.timeoutEvent);
						this.timeoutEvent = null;
					}
					
					if(this.translatex == 2300) {
						console.log('第5个树');
						this.inFlight = 'stop';
						clearInterval(this.time)
						this.time = null;
					}
					// 第5个区间：
					if(this.translatex >=2400 && this.translatex < 2740) {
						if(this.bridBottom < 475 && (this.volumeSize < 15)) {
							if(this.outTime == 0) {
								this.isOut = true;
								this.inFlight = 'stop';
								this.innerAudioContext.play();
								clearInterval(this.time)
								this.time = null;
								this.outTime += 1;
								
								this.timeoutEvent = setTimeout(() => {
									this.isOut = false;
									this.inFlight = 'flight'
									this.startGame();
								}, 600);
							}
						} else {
							
						}
						console.log('第5个区间');
					}
					if (this.translatex >= 2740 && this.translatex < 2800) {
						this.outTime = 0;
					}
					
					if(this.translatex >= 2900) {
						this.recorder && this.recorder.stop();	
						this.inFlight = 'stop';
						clearInterval(this.time);
						clearTimeout(this.timeoutEvent);
						this.timeoutEvent = null;
						this.time = null;
						this.isOver = true;
						this.isStart = false
						// 飞过第一个树 结束时间
						this.$emit('tree_end', '')
						return
					}
					
					this.translatex += 10;
				}, 90)
			},
			overGame() {
				this.$emit('pageEvent', {pageIndex: '31'})
			}
		}
	}
</script>

<style lang="scss">
	.page30-wrap {
		min-width: 100wh;
		height: 100vh;
		position: relative;
		overflow: hidden;
	
		.startBtn {
			width: 160px;height: 50px;position: absolute;top: 0;right: 0;left: 0;bottom: 0;margin: auto;z-index: 300;
		}
		
		.brid {
			width: 120px;
			height: 100px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/brid.gif);
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			position: absolute;
			margin: auto;
			z-index: 400;
			transition: all 0.3s;
		}
		
		.outBrid {
			width: 120px;
			height: 100px;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img19.png);
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			position: absolute;
			margin: auto;
			z-index: 400;
			transition: all 0.3s;
		}
		
		
		.scene {
			width: 1000vw;
			height: 100vh;
			background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1.png);
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			transform: translateX(0px);
			transition: all 0.3s; 
			
			.ground {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				width: 1000vw;
				height: 90px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img10.png);
				background-position: center;
				background-repeat: repeat-x;
				background-size: contain;
			}
			.tree1 {
				position: absolute;
				bottom: 0;
				left: 300px;
				width: 230px;
				height: 349px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1-1.png);
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.tree2 {
				position: absolute;
				bottom: 35px;
				left: 700px;
				width: 232px;
				height: 335px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1-2.png);
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.tree3 {
				position: absolute;
				bottom: 0px;
				left: 1160px;
				width: 373px;
				height: 460px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1-3.png);
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.tree4 {
				position: absolute;
				bottom: 10px;
				left: 1800px;
				width: 385px;
				height: 490px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1-4.png);
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.tree5 {
				position: absolute;
				bottom: 0;
				left: 2500px;
				width: 349px;
				height: 555px;
				background-image: url(https://datastream.affectai.cn/callmaterial/images/page23/img1-5.png);
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
		}
	}
</style>