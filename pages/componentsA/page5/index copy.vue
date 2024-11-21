<template>
	<view class="page1-wrap">
		<!-- 心湖倒影 -->
		<view style="color: #000;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">心湖倒影</view>
		<view class="tips"> <u-image src="https://datastream.affectai.cn/callmaterial/images/page5/icon1.png" width="12px" height="11px" style="margin-right: 4px;"></u-image> 请将人脸置于屏幕之内，并确保面部完整显示</view>
		
		<view  style="position: relative;width: 317px;height: 350px;margin: 25px auto 0 auto;background-image: url(https://datastream.affectai.cn/callmaterial/images/page5/icon4.png);background-position: center;background-repeat: no-repeat;background-size: 100%;">
			<view 
				style="width: 270px; height: 290px;margin: auto;border-radius: 50%;position: absolute;top: 18px;right: 0;left: 0;bottom: 0;overflow: hidden;"
				v-if="cameraShow">
				<camera
					mode="normal" 
					device-position="front" flash="off" @error="error" 
					style="width: 270px; height: 290px;margin: auto;border-radius: 50%;"></camera>
			</view>
		</view>
		
		<view class="start" @click="chooseVideo">开始拍摄</view>
	</view>
</template>

<script>
	export default {
		name: 'index',
		components: {
		},
		data() {
			return {
				tipsText: '', // 错误文案提示
				tempImg: '', // 本地图片路径
				BASE_API: '’',
				cameraEngine: null, // 相机引擎
				devicePosition: false, // 摄像头朝向
				isAuthCamera: true, // 是否拥有相机权限
			}
		},
 
		onLoad(options) {
			this.initData()
		},
		mounted(){
		},
		methods: {
			// 初始化相机引擎
			initData() {
				// #ifdef MP-WEIXIN
				// 1、初始化人脸识别
				wx.initFaceDetect()
				// 2、创建 camera 上下文 CameraContext 对象
				this.cameraEngine = wx.createCameraContext()
				// 3、获取 Camera 实时帧数据
				const listener = this.cameraEngine.onCameraFrame((frame) => {
					if (this.tempImg) {
						return;
					}
					// 4、人脸识别，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据
					wx.faceDetect({
						frameBuffer: frame.data,
						width: frame.width,
						height: frame.height,
						enablePoint: true,
						enableConf: true,
						enableAngle: true,
						enableMultiFace: true,
						success: (faceData) => {
							let face = faceData.faceInfo[0]
							if (faceData.x == -1 || faceData.y == -1) {
								this.tipsText = '检测不到人'
							}
							if (faceData.faceInfo.length > 1) {
								this.tipsText = '请保证只有一个人'
							} else {
								const {
									pitch,
									roll,
									yaw
								} = face.angleArray;
								const standard = 0.5
								if (Math.abs(pitch) >= standard || Math.abs(roll) >= standard ||
									Math.abs(yaw) >= standard) {
									this.tipsText = '请平视摄像头'
								} else if (face.confArray.global <= 0.8 || face.confArray.leftEye <=
									0.8 || face.confArray.mouth <= 0.8 || face.confArray.nose <= 0.8 ||
									face.confArray.rightEye <= 0.8) {
									this.tipsText = '请勿遮挡五官'
								} else {
									this.tipsText = '请拍照'
									// 这里可以写自己的逻辑了
								}
							}
						},
						fail: (err) => {
							console.log('222222');
							if (err.x == -1 || err.y == -1) {
								this.tipsText = '检测不到人'
							} else {
								this.tipsText = err.errMsg || '网络错误，请退出页面重试'
							}
						},
					})
				})
				// 5、开始监听帧数据
				listener.start()
				// #endif
			},
			// 切换设备镜头
			handleChangeCameraClick() {
				this.devicePosition = !this.devicePosition;
			},
			// 图片上传
			handleChooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album','camera'],
					success: (res) => {
						console.log(res,'打印res，哈哈哈哈哈')
						if (res.errMsg === 'chooseImage:ok') {
							uni.showLoading({
								title: '照片上传中...'
							})
							const tempFilePaths = res.tempFilePaths[0]
							  this.upLoad(res.tempFilePaths);
						}
					},
					fail: (res) => {
					},
				});
			},
            // 拍照点击
			handleTakePhotoClick() {
				if (this.tipsText != "" && this.tipsText != "请拍照") {
					return;
				}
				uni.getSetting({
					success: (res) => {
						if (!res.authSetting['scope.camera']) {
							this.isAuthCamera = false
							uni.openSetting({
								success: (res) => {
									if (res.authSetting['scope.camera']) {
										this.isAuthCamera = true;
									}
								}
							})
						}
					}
				})
				this.cameraEngine.takePhoto({
					quality: "high",
					success: ({
						tempImagePath
					}) => {
						this.tempImg = tempImagePath
					}
				})
			},
			// 点击确定上传
			handleOkClick() {
                //  这里的 this.tempImg 是经过人脸检测后  拍照拿到的路径  
				this.upLoadOne(this.tempImg)
				uni.navigateBack({
					delta: 1
				});
			},
			upLoad(tempFilePaths) {
                // #  注意  这里上传图片拿到的tempFilePaths是一个数组啊
			    // 图片上传
			    uni.showLoading({
			        title: "上传中，请稍后...",
			    });
			    let proAll = [];
			    tempFilePaths.forEach((item) => {
					console.log(item,'打印item')
			        proAll.push(this.upLoadOne(item));
			    });
			    Promise.all(proAll).then((res) => {
			        // 上传完成
			        uni.hideLoading();
			    });
			},
			upLoadOne(imgPath) {
			    //  然后这里imgPath 传过来的是 要上传的临时本地图片的路径
                //  具体上传方法根据自己的请求方式   请求自己的接口
			},
			// 点击 - 取消上传
			handleCancelClick() {
				this.tempImg = ''
			},
			// 点击 - 人脸安全保障按钮
			handleJumpSecurityClick() {
				uni.showToast({
					icon: "none",
					title: "假装跳转人脸安全保障",
					duration: 2000,
				})
			},
		}
	}
</script>

<style lang="scss">
	.page1-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page5/bg.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.start {
			position: absolute;
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
			z-index: 500;
			background-color: #6fcbeb;
			border-radius: 5px;
		}
		.tips {
			width: 289px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: rgba(255, 255, 255, 0.7);;
			font-size: 12px;
			border-radius: 25px;
			display: flex;
			justify-content: center;
			margin: 0 auto;
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