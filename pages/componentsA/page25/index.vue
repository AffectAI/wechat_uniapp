<template>
	<view class="page25-wrap" >
		
		<u-image 
			width="100%" 
			height="240px"
			style="width: 100%;height: 240px;position: absolute;top: 200px;left: 0;right: 0;margin: auto;z-index: 300;" 
			src="https://datastream.affectai.cn/callmaterial/images/page20-1024/img46.png"></u-image>
	
		<!-- 心湖 旅行伙伴2 -->
		<view class="dialogue">
			<view style="text-align: center;color: #fff;font-size: 20px;;" v-if="clickStatus == true">{{recordTime}}</view>
			<view @click="next" class="liuyan" v-if="dialogueIndex > 1" :class="[(dialogueIndex > 1 || clickStatus == true) ? 'liuyancorlo':'']">请点击留言</view>
			<view style="width: 100%;display: flex;justify-content: space-between;">
				<view class="top">旅行伙伴</view>
				
				<u-image
					v-if="dialogueIndex <= 5"
					width="80px" 
					height="25px" 
					@click="addIndex"
					style="width: 80px;height: 25px;border-radius: 5px;position: absolute;bottom: 5px;right: 5px;"
					src="https://datastream.affectai.cn/callmaterial/images/page20-1024/img28.png">
				</u-image>
			</view>
			<view class="center">
				<view style="width: 114px;">
					<u-image  width="114px" height="138px" :src="gloAvtorUrl"></u-image>
				</view>
				<view style="flex: 1;margin: 15px 0">
					<typewriter
					  v-if="dialogueIndex == 1"
					  text="解忧日记让您了解了自己最近的状态。其实，在这座旅馆里还有一面语音留言墙，来这里的旅人都可以在这儿，把自己感到不开心的事倾诉出来。"
					  :speed="100"
					  @finished="finisheda"
					></typewriter>
					<typewriter
					  v-if="dialogueIndex == 2"
					  text="比如，可以和我说说，您最近一次睡眠不好、失眠的原因是什么？"
					  :speed="100"
					  @finished="finisheda"
					></typewriter>
					<typewriter
					  v-if="dialogueIndex == 3"
					  text="比如，可以和我说说，您最近一次心情不好是因为什么？"
					  :speed="100"
					  @finished="finisheda"
					></typewriter>
					<typewriter
					  v-if="dialogueIndex == 4"
					  text="比如，可以和我说说，您上一次和人吵架的原因是什么？"
					  :speed="100"
					  @finished="finisheda"
					></typewriter>
					<typewriter
					  v-if="dialogueIndex == 5"
					  text="比如，可以和我说说，您最近遇到的工作/学习上的挫折是什么？"
					  :speed="100"
					  @finished="finisheda"
					></typewriter>
					<view  v-if="dialogueIndex == 6" @click="next">
						<typewriter
						  text="比如，可以和我说说，您最近一次心情不好是因为什么呢？"
						  :speed="100"
						  @finished="finishedend"
						></typewriter>
					</view>
					
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
				roomIndex: null,
				bgImg: null,
				roomList: [],
				dialogueIndex: 1,
				ctx: null,
				recordTimeInterval: null,
				clickStatus: false,
				recordTime: 30, // 30s
				innerAudioContext_1: null,
				innerAudioContext_2: null,
				innerAudioContext_3: null,
				innerAudioContext_4: null,
				innerAudioContext_5: null,
			}
		},
		beforeDestroy() {
			this.innerAudioContext_1.destroy();
			this.innerAudioContext_2.destroy();
			this.innerAudioContext_3.destroy();
			this.innerAudioContext_4.destroy();
			this.innerAudioContext_5.destroy();
		},
		created(options) {
			this.innerAudioContext_1 = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_2 = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_3 = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_4 = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_5 = uni.createInnerAudioContext({
			  useWebAudioImplement: false,
			  obeyMuteSwitch: false,
			});
			this.innerAudioContext_1.src = 'https://datastream.affectai.cn/callmaterial/images/audio/share_questions/a1.mp3';
			this.innerAudioContext_2.src = 'https://datastream.affectai.cn/callmaterial/images/audio/share_questions/a2.mp3';
			this.innerAudioContext_3.src = 'https://datastream.affectai.cn/callmaterial/images/audio/share_questions/a3.mp3';
			this.innerAudioContext_4.src = 'https://datastream.affectai.cn/callmaterial/images/audio/share_questions/a4.mp3';
			this.innerAudioContext_5.src = 'https://datastream.affectai.cn/callmaterial/images/audio/share_questions/a5.mp3';
		},
		mounted() {
			
		},
		methods: {
			addIndex() {
				if(this.dialogueIndex >= 6) {
					this.dialogueIndex = 6;
				}
				this.dialogueIndex += 1;
				console.log(this.dialogueIndex);
				
				this.innerAudioContext_1.stop();
				this.innerAudioContext_2.stop();
				this.innerAudioContext_3.stop();
				this.innerAudioContext_4.stop();
				this.innerAudioContext_5.stop();
				
				if(this.dialogueIndex == 2) {
					this.innerAudioContext_1 && this.innerAudioContext_1.play();
				}
				if(this.dialogueIndex == 3) {
					this.innerAudioContext_2 && this.innerAudioContext_2.play();
				}
				if(this.dialogueIndex == 4) {
					this.innerAudioContext_3 && this.innerAudioContext_3.play();
				}
				if(this.dialogueIndex == 5) {
					this.innerAudioContext_4 && this.innerAudioContext_4.play();
				}
				if(this.dialogueIndex == 6) {
					this.innerAudioContext_5 && this.innerAudioContext_5.play();
				}
			},
			finisheda() {
				
			},
			message() {
				this.clickStatus = true;
			},
			next() {
				let text = '';
				if(this.dialogueIndex == 2) {
					text = '您最近一次睡眠不好、失眠的原因是什么？'
				}
				if(this.dialogueIndex == 3) {
					text = '您最近一次心情不好是因为什么？'
				}
				if(this.dialogueIndex == 4) {
					text = '您上一次和人吵架的原因是什么？'
				}
				if(this.dialogueIndex == 5) {
					text = '您最近遇到的工作/学习上的挫折是什么'
				}
				if(this.dialogueIndex == 5) {
					text = '您上次被人误解是因为什么？'
				}
				this.$emit('pageEvent', {pageIndex: '26', text: text})
			},
			finishedend() {
				
			},
			
		}
	}
</script>

<style lang="scss">
	.page25-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img35.png);
		background-position: inherit;
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
			
			.liuyan {
				width: 110px;
				height: 45px;
				line-height: 45px;
				background-color: #f1f1f4;
				border-radius: 5px;
				text-align: center;
				margin: 0 auto;
			}
			.liuyancorlo {
				background-color: #5aa7f4;
				color: #434343;
			}
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
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>