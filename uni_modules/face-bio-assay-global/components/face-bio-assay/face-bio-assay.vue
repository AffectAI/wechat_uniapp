<template>
	<view class="page2-wrap" >
		
		<!-- <view class="start" @click="chooseVideo">开始拍摄</view> -->
		
		<view  style="position: relative;width: 60px;height: 60px;background-image: url(https://datastream.affectai.cn/callmaterial/images/page5/icon4.png);background-position: center;background-repeat: no-repeat;background-size: 100%;">
			<view 
				class="camera-cover">
				<camera class="camera"  v-if="cameraShow" mode="normal"  flash="off" device-position="front" resolution="high" @stop="stop" @error="error"
					style="width: 60px; height: 60px;margin: auto;border-radius: 50% !important;">
					<cover-view class="cover">
						<cover-view class="cover-top cover-item">
							<template>	
								<slot>
									<cover-view v-if="isDev && face">
										<cover-view :style="Math.abs(face.pitch)>0.5?'color:red':''">
											{{ face.pitch ? face.pitch.toFixed(2): 'null'}}
										</cover-view>
										<cover-view :style="Math.abs(face.roll)>0.5?'color:red':''">
											{{ face.roll ? face.roll.toFixed(2):'null'}}
										</cover-view>
										<cover-view :style="Math.abs(face.yaw)>0.5?'color:red':''">
											{{ face.yaw ? face.yaw.toFixed(2):'null'}}
										</cover-view>
									</cover-view>
								</slot>
							</template>
							<!-- <cover-view class="detectInfo">{{ isSuccess ? '人脸检测成功' : tipsText}}</cover-view> -->
						</cover-view>
						<!-- <cover-view class="camera">
							<cover-image class="camera" src="https://datastream.affectai.cn/callmaterial/images/page5/icon4.png"></cover-image>
						</cover-view>
						<cover-view class="cover-bottom cover-item"></cover-view> -->
					</cover-view>
				</camera>
			</view>
		</view> 
		
		
	</view>
</template>

<script>
	// 人脸检测
	/**
	 * @event {Function} photoChange 拍照完成事件
	 * @event {Function} detectFailed 人脸检测失败
	 * @event {Function} detectOver 人脸检测结束
	 * @method {Function} initData 初始化人脸检测
	 */
	import {
		NodHead,
		StraightenHead,
		ShakeHead
	} from './actions/index.js'
	import ActionContainer from './ActionContainer.js'

	export default {
		name: 'face-detect',
		data() {
			return {
				cameraShow: false,
				show: false,
				tipsText: '请将人脸置于屏幕之内，并确保面部完整显示',
				isSuccess: false, //是否检测完成
				face: {},
				actionsList: null,
				context: "",
				tipsTextCss: "tipsTextCss",
				listener: null,
				timeEvent: null,
				ctx: null,
				recordTime: 0,
				videoTempList: [],
				
				isSuccess: false, //是否检测完成
				isVerify: false,
				isClick: false,
				screenWidth: 0,
				screenHeight: 0,
			}
		},
		props: {
			buildActionContainer: Function,
			actions: () => {
				return []
			},
			isDev: false,
		},
		beforeDestroy() {
			this.timeEvent && clearTimeout(this.timeEvent);
			this.timeEvent = null;
			this.stopRecord();
		},
		mounted() {
			//console.log('----face monted');
			this.chooseVideo();
			this.initData();
			// 处理录像
			this.ctx = uni.createCameraContext();
			this.startRecord();
			
			// uni.initFaceDetect()
			// this.onCameraFrame()
		},
		onShow() {
			this.isVerify = false;
			this.tipsText = "";
			this.isFlag = true;
		},
		destroyed() {

		},
		methods: {
			chooseVideo() {
				this.cameraShow = true
			},
			getCurrentFormattedTime() {  
			    // 获取当前时间  
			    const now = new Date();  
			  
			    // 获取年、月、日、小时、分钟和秒  
			    const year = now.getFullYear();  
			    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并补零  
			    const day = String(now.getDate()).padStart(2, '0'); // 补零  
			    const hours = String(now.getHours()).padStart(2, '0'); // 补零  
			    const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零  
			    const seconds = String(now.getSeconds()).padStart(2, '0'); // 补零  
			  
			    // 格式化时间字符串  
			    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;  
			  
			    return formattedTime;  
			},  
			setMaxFace(faceData) {
				const faces = faceData.faceInfo // 获取到所有人脸信息
				let maxFaceIndex = 0
				let maxFaceSize = 0
				// 遍历所有人脸信息，找到最大的人脸
				for (let i = 0; i < faces.length; i++) {
					const face = faces[i]
					const faceSize = face.width * face.height
					if (faceSize > maxFaceSize) {
						maxFaceSize = faceSize
						maxFaceIndex = i
					}
				}
				// 返回最大的那张脸的坐标信息
				const maxFace = faces[maxFaceIndex]
				faceData.faceInfo = [maxFace]
			},
			onCameraFrame() {
				//console.log('--onCameraFrame--');
				uni.initFaceDetect()
				let time = new Date().getTime()
				this.context = uni.createCameraContext()
				this.listener = this.context.onCameraFrame((frame) => {
					uni.faceDetect({
						frameBuffer: frame.data,
						width: frame.width,
						height: frame.height,
						enablePoint: true,
						enableConf: true,
						enableAngle: true,
						enableMultiFace: true,
						success: (faceData) => {
							let face = faceData.faceInfo[0];
							var centerWidth = 250;
							var centerHeight = 250;
							if (face.x > (frame.width - centerWidth) / 2 && face.x < (frame.width - centerWidth) / 2 + centerWidth && face.y > (frame.height - centerHeight) / 2 && face.y < (frame.height - centerHeight) / 2 + centerHeight) {
								
								this.isVerify = true;
								this.isSuccess = true;
								this.tipsText = '';
								this.$emit('setFaceStatus', {status: true, msg: '人脸检测成功'});
								// if(!this.timeEvent) { } 
								
							} else {
								this.isSuccess = false;
								this.isVerify = false;
								this.tipsText = '请将人脸置于屏幕中间，并确保面部完整显示';
								this.$emit('pageEvent', false);
								this.$emit('setFaceStatus', {status: false, msg: '请将人脸置于屏幕中间，并确保面部完整显示'});
							}
							// if(face.angleArray.pitch >= 0.1 || face.angleArray.roll >= 0.1 || face.angleArray.yaw >= 0.1) {
							// 	this.tipsText = '请平视摄像头';
							// 	this.$emit('setFaceStatus', {status: false, msg: '请平视摄像头'});
							// }
							// if(faceData.faceInfo.length > 1) {
							//     this.tipsText = '请保证只有一人做核验'
							// } else {
							//     if(face.angleArray.pitch >= 0.1 || face.angleArray.roll >= 0.1 || face.angleArray.yaw >= 0.1) {
							//         this.tipsText = '请平视摄像头'
							//     } else if(face.confArray.global <= 0.8 || face.confArray.leftEye <= 0.8 || face.confArray.mouth <= 0.8 || face.confArray.nose <= 0.8 || face.confArray.rightEye <= 0.8) {
							//         this.tipsText = '请勿遮挡五官'
							//     } else {
							       
							//     }
							// }
							
							// time = new Date().getTime()
							// this.setMaxFace(faceData)
							// this.showData(faceData)
							// this.actionsList.next(faceData)
							// this.tipsText = this.actionsList.tip;
							// if(!this.timeEvent) {
							// 	this.tipsText = '人脸检测成功';
							// 	this.$emit('setFaceStatus', {status: true, msg: '人脸检测成功'});
							// }
						},
						fail: (err) => {
							if ((time + 10 * 1000) < new Date().getTime()) {
								this.tipsText = '检测不到人脸'
								this.cameraError();
								this.$emit('setFaceStatus', {status: false, msg: '检测不到人脸'});
								return
							}
							if (err.x == -1 || err.y == -1) {
								this.tipsText = '检测不到人脸'
								this.$emit('setFaceStatus', {status: false, msg: '检测不到人脸'});
							}
							
							clearTimeout(this.timeEvent);
							this.timeEvent = null;
							
						}
					})
				})
				this.listener.start()
			},
			error() {
				this.tipsText = '相机异常'
				this.cameraError()
			},
			stop() {
				this.tipsText = '相机异常'
				this.cameraError()
			},
			// 核验失败
			cameraError(e) {
				// this.t = setTimeout(() => {
				// 	clearTimeout(this.t)
				// 	this.hideModal()
				// 	this.$emit('detectFailed')
				// }, 2000);
			},
			close() {
				// clearTimeout(this.t)
				// this.hideModal()
				// this.$emit('detectFailed')
			},
			// 关闭
			hideModal() {
				// uni.stopFaceDetect()
				// this.show = false
				this.tipsText = '检测不到人脸'
				this.face = {}
				// this.isSuccess = false
			},
			// 拍照
			takePhoto() {
				this.context.takePhoto({
					quality: 'high',
					success: (res) => {
						this.$emit('photoChange', res.tempImagePath)
					},
					fail: (e) => {
						console.log(e)
					},
					complete: (e) => {
						console.log(e)
					}
				});
			},
			// 检测完成
			detectOver() {
				this.isSuccess = true
				let t = setTimeout(() => {
					this.hideModal()
					clearTimeout(t)
					this.$emit('detectOver')
				}, 3000);
			},

			initData() {
				uni.getSetting({
					success: (res) => {
						//console.log(res.authSetting['scope.camera'], '===ca');
						if (res.authSetting['scope.camera'] === true) {
							this.onCameraFrame()
							this.faceDetect()
							
							// this.chooseVideo();
							// this.initData();
						} else if(res.authSetting['scope.camera']=== false) {
							this.getCameraAuth()
						} else {
							this.onCameraFrame()
							this.faceDetect()
						}
					}
				})
			},

			getCameraAuth() {
				uni.showModal({
					title: '温馨提示',
					content: '需要获取您摄像头权限才能更好的为您服务！是否授权摄像头权限？',
					confirmText: '授权',
					confirmColor: '#f94218',
					success: (res) => {
						if (res.confirm) {
							// 选择弹框内授权
							uni.openSetting({
								success: (res) => {
									if (res.authSetting[
											'scope.camera'
										]) {
										this.onCameraFrame()
										this.faceDetect()
									} else {
										this.tipsText = "您未授权摄像头权限"
										this.cameraError()
									}
								}
							})
						} else if (res.cancel) {
							this.tipsText = "您未授权摄像头权限"
							this.cameraError()
						}
					}
				})
			},

			showData(faceData) {
				this.$emit("showData", faceData)
				if (this.isDev) {
					let face = faceData.faceInfo[0].angleArray
					this.face = face
				}
			},

			buildActions() {
				if (this.buildActionContainer) {
					return this.buildActionContainer()
				}
				let actions = []
				if (!this.actions?.length) {
					let nodHead = new NodHead()
					const fun = (state) => {
						if (state === 'success') {
							this.takePhoto()
						}
					}
					let straightenHead = new StraightenHead(10000000000, fun)
					let straightenHead2 = new StraightenHead(1000000000)
					let shakeHead = new ShakeHead()
					// actions = [straightenHead2, nodHead, shakeHead, straightenHead]
					actions = [straightenHead2,nodHead, shakeHead, straightenHead]
				} else {
					actions = this.actions
				}
				let act = new ActionContainer(actions)
				act.end(() => {
					this.detectOver()
				}).fail(() => {
					this.cameraError()
				})
				return act
			},

			// 初始化人脸检测
			faceDetect() {
				this.show = true
				this.actionsList = this.buildActions()
			},
			
			startRecord() {
				let startTime = this.getCurrentFormattedTime();
				console.log('开始时间：', startTime);
				let ctx = this.ctx;
				const that = this;
				ctx.startRecord({
					timeout: 290, // 4分半 290
					timeoutCallback : (res) => { // 录像超30S或onHide时结束录像
						// console.log(`startRecord timeoutCallback 30s videoInfo:${JSON.stringify(res)}`)
						if(this.recordTime >= 10) {
							this.stopRecord();
							return;
						}
						this.recordTime++;
						let endTime = this.getCurrentFormattedTime();
						// console.log('次数' , this.recordTime,'结束时间：', endTime);
						that.$emit('uploadVideo', {file: res.tempVideoPath,audioType: 'video', start_time: startTime, times: this.recordTime})
						if(this.recordTime <= 2) {
							this.startRecord();
						}
						
					},
					success: (res) => {
					 // console.log('startRecord success', res)
					},
					fail: (err) => {
					  // console.log(`startRecord fail:${JSON.stringify(err)}`)
						// that.startRecord() // 启动失败，重新
					}
				});
			},
			stopRecord () {
				var that = this
				let ctx = this.ctx;
				if(ctx) {
					ctx.stopRecord({
						compressed: true, // 是否启动视频压缩
						success: (res) => {
							// console.log(`stopRecord1 success videoInfo:${JSON.stringify(res)}`)
						},
						fail: (err) => {
							// console.log(`stopRecord fail videoInfo:${JSON.stringify(err)}`)
						}
					})
				}
				
			},

		}
	}
</script>

<style lang="scss" scoped>
	.page2-wrap {
		width: 60px;
		height: 60px;
		position: fixed;
		top: 5px;
		right: 5px;
		z-index: 999;
		
		.camera-cover {
			width: 60px; height: 60px;margin: auto;border-radius: 50% !important;
			position: absolute;
			top: 1px;right: -1px;
			overflow: hidden;
			z-index: 999;
			 overflow: hidden;
			-webkit-backface-visibility: hidden;
			-webkit-transform: translate3d(0, 0, 0);
		}
		.start {
			position: fixed;
			width: 100px;
			height: 43px;
			left: 0;
			right: 0;
			top: 701px;
			bottom: 150px;
			margin: auto;
			color: #000;
			font-size: 14px;
			font-weight: 400;
			text-align: center;
			line-height: 40px;
			z-index: 999;
			background-color: #6fcbeb;
			border-radius: 5px;
		}
		.tips {
			position: fixed;
			top: 20px;
			left: 0;
			right: 0;
			margin: auto;
			width: 289px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: rgba(255, 255, 255, 0.7);;
			font-size: 12px;
			border-radius: 25px;
			display: flex;
			justify-content: center;
		}
		.dialogue {
			width: 96%;
			margin: 0 auto;
			position: fixed;
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

	.modal::before {
		content: "\200B";
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.modal.show {
		opacity: 1;
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}

	.modal.bottom-modal::before {
		vertical-align: bottom;
	}

	.modal.bottom-modal .dialog {
		width: 100%;
		border-radius: 0;
	}

	.modal.bottom-modal {
		margin-bottom: -1000rpx;
	}

	.modal.bottom-modal.show {
		margin-bottom: 0;
	}

	.dialog {
		position: fixed;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		/* width: 680rpx; */
		height: 100vh;
		width: 100vw;
		max-width: 100%;
		background-color: #f8f8f8;
		border-radius: 10rpx;
		overflow: hidden;
		left: 0;
		top: 0;
	}

	.bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 180rpx;
		height: 180rpx;
		padding: 0rpx 40rpx;
		justify-content: space-between;
	}

	.bg-white {
		background-color: #fff0;
		color: #666666;
	}

	.action {
		color: #0081ff;
		font-size: 35rpx;
		padding: 10rpx;
	}

	.detectInfo {
		padding: 20rpx 0rpx;
		font-size: 34rpx;
		text-align: center;
		animation-duration: 1.5s;
		color: #000000;
		z-index: 999;
	}

	.faceContent {
		height: 700rpx;
		position: relative;
	}

	.tipsTextCss {
		animation: 1.5s tipsTextAnimation;
		animation-duration: 1.5s;
	}

	@keyframes tipsTextAnimation {
		0% {
			transform: scale(1);
		}

		20% {
			transform: scale(1.5);
		}

		70% {
			transform: scale(1.5);
		}

		100% {
			transform: scale(1);
		}
	}

	.cover {
		// width: 100vw;
		// height: 100vh;
		width: 60px; height: 60px;overflow: hidden;border-radius: 50%;
		display: flex;
		flex-direction: column;
	}

	.cover-item {
		// flex: 1;
		width: 60px; height: 60px;overflow: hidden;border-radius: 50%;
		background-color: #fff0;
	}

	.camera {
		width: 60px; height: 60px;overflow: hidden;border-radius: 50%;
	}
</style>
