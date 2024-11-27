<template>
	<view class="page35-wrap">
		<view class="tit35"></view>
		<view class="charts-box">
			<view style="color: #fff;font-size: 16px;text-align: center;padding-top: 20px;padding-bottom: 20px;">BFI-10五大人格结果</view>
		    <qiun-data-charts 
		      type="radar"
		      :opts="opts"
		      :chartData="chartData"
		    />
			<view style="margin: 0 auto;width: 90%;padding: 15px;box-sizing: border-box;height: 390px;overflow-y: scroll">
				<view style="margin-bottom: 20px;color: #fff;">
					参考值范围：0-50为低分，50-100为高分 <br />
					1.开放性（0）<br />您的得分：{{scale_type_record ? scale_type_record.BFI_10_O || 0 : 0}}<br />
					开放性高的人：往往喜欢艺术、音乐和文学。他们极具创造力、异想天开、富有洞察力。他们倾向于智力讨论和处理新想法。顾名思义，开放性的人喜欢新的体验，包括参观新的地方，尝试新的食物，听到新的想法。正因为如此，开放的人往往在政治上更自由。高度开放的人可能会花更多的时间来反思他们的想法和感受，因此，他们可能有更大的自我洞察力。
				</view>
				<view style="margin-bottom: 20px;color: #fff;">
					2.尽责性（C）<br />您的得分：{{scale_type_record ? scale_type_record.BFI_10_C || 0 : 0}}<br />
					高度尽责的人：是有组织的、负责任的、有秩序的、尽职的。他们倾向于尊重权威，遵守规则。因为他们有条理，有责任心，所以他们往往会准时参加会议。	
				</view>
				<view style="margin-bottom: 20px;color: #fff;">
					3.外向性（E）<br />您的得分：{{scale_type_record ? scale_type_record.BFI_10_E || 0 : 0}}<br />
					外向度高的人：健谈，善于交际，喜欢和人在一起。他们喜欢冒险，喜欢冒险，通常把生活看作一个游乐场。他们倾向于体验积极的情绪。
				</view>
				<view style="margin-bottom: 20px;color: #fff;">
					4.宜人性 （A）<br />您的得分：{{scale_type_record ? scale_type_record.BFI_10_A || 0 : 0}}<br />
					亲和性高的人：有动力维持积极的社会关系。他们有同情心，有爱心，没有偏见，为了更好地与他人相处，他们可能会隐藏自己的情绪。
				</view>
				<view style="margin-bottom: 20px;color: #fff;">
					5.神经质 （N）<br />您的得分：{{scale_type_record ? scale_type_record.BFI_10_N || 0 : 0}}<br />
					高度神经质的人：可能经常经历负面情绪，包括压力、焦虑和低自我价值感。另一方面，高度神经质的人可能会经历更丰富的情绪。他们也更加警惕地发现周围的危险—-无论是真实的还是想象的。
				</view>
			</view>
		</view>
		
		<!-- PHQ-9 焦虑-->
		<view class="charts-box2" style="margin: 20px auto;">
			<view style="color: #fff;font-size: 16px;text-align: center;padding-top: 20px;padding-bottom: 45px;">PHQ-9抑郁症自我评估结果</view>
			<view style="margin: 0 auto;width: 90%;padding: 15px;box-sizing: border-box;height: 95px;">
				<view class="phq2">
					<view class="score_bg2" :style="{left: leftComputed2 + '%'}">总分：{{person_info ? person_info.PHQ_9 || 0 : 0}}分</view>
				</view>
			</view>
		</view>
		
		<!-- GAD-7 抑郁症-->
		<view class="charts-box2" style="margin: 20px auto;">
			<view style="color: #fff;font-size: 16px;text-align: center;padding-top: 20px;padding-bottom: 45px;">GAD-7 焦虑症筛查结果</view>
			<view style="margin: 0 auto;width: 90%;padding: 15px;box-sizing: border-box;height: 95px;">
				<view class="phq">
					<view class="score_bg" :style="{left: leftComputed + '%'}">总分：{{person_info ? person_info.GAD_7 || 0 : 0}}分</view>
				</view>
			</view>
		</view>
		
		<view class="charts-box3" style="margin: 20px auto;">
			<view style="color: #fff;font-size: 16px;text-align: center;padding-top: 20px;padding-bottom: 20px;">BDRS-20双相情感障碍评估结果</view>
			<view style="margin: 0 auto;width: 100%;padding: 15px;box-sizing: border-box;position: relative;">
				<view class="phq5">
					<view class="score_bg" :style="{bottom: bottomComputed3+'px',left: leftComputed3 + '%'}">总分：{{person_info ? person_info.BDRS_20 || 0 : 0}}分</view>
				</view>
				
			</view>
			<!-- <qiun-data-charts 
				style="width: 95%;;margin: 0 auto;"
			    type="mix"
			    :opts="opts2"
			    :chartData="chartData2"
			/> -->
		</view>
		
	</view>
</template>

<script>
	import typewriter from "@/pages/componentsA/jp-typewriter/index.vue"
	export default {
		components: {
			typewriter
		},
		props: ['scale_type_record', 'person_info'],
		data() {
			return {
			   index: 1,
			   chartData: {},
			   chartData2: {},
				opts: {
					color: ["#66dcb0","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
					padding: [5,5,5,5],
					dataLabel: false,
					fontColor: '#ffffff',
					animation: true,
					enableScroll: false,
					legend: {
					  show: false,
					  position: "right",
					  lineHeight: 25
					},
					extra: {
					  radar: {
						gridType: "circle",
						gridColor: "#ffffff",
						gridCount: 5,
						opacity: 0.2,
						max: 200,
						labelShow: true,
						border: true,
						borderWidth: 4
					  }
					}
				},
				opts2: {
					color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
					padding: [15,15,15,15],
					enableScroll: false,
					fontColor: '#ffffff',
					xAxis: {
					  axisLine: true,
					  axisLineColor: '#ffffff',
					  gridColor: '#ffffff',
					  titleFontColor: '#ffffff',
					  fontColor: '#ffffff',
					  calibration: true
					  
					},
					yAxis: {
					  gridType: "dash",
					  dashLength: 2,
					  gridColor: '#ffffff',
					  title: '风险程度',
					  data: [
						{
							axisLine: false
						}
					  ],
					},
					categories: {
						addPoint: true
					},
					legend: {
					  show: true,
					  lineHeight: 25
					},
					extra: {
					  line: {
						type: "straight",
						width: 2,
						activeType: "hollow"
					  }
					}
				}
			}
		},
		async onReady() {
			
		},
		mounted() {
			
			this.getServerData();
			// this.getServerData2();
		},
		computed: {
			// 0-21
			leftComputed2() {
				if(this.person_info != undefined && this.person_info.PHQ_9 != undefined) {
					if(this.person_info.PHQ_9 >=0 && this.person_info.PHQ_9 <= 4) {
						return 0;
					}
					if(this.person_info.PHQ_9 >=5 && this.person_info.PHQ_9 <= 9) {
						return 15;
					}
					if(this.person_info.PHQ_9 >=10 && this.person_info.PHQ_9 <= 14) {
						return 35;
					}
					if(this.person_info.PHQ_9 >= 15 && this.person_info.PHQ_9 <= 21) {
						return 55;
					}
					if(this.person_info.PHQ_9 >= 15 && this.person_info.PHQ_9 <= 21) {
						return 75;
					}
				} else {
					return 0
				}
			},
			// 0-27
			leftComputed() {
				console.log(this.person_info, '---person_info');
				if(this.person_info != undefined && this.person_info.GAD_7 != undefined) {
					if(this.person_info.GAD_7 >=0 && this.person_info.GAD_7 <= 4) {
						return 0;
					}
					if(this.person_info.GAD_7 >=5 && this.person_info.GAD_7 <= 9) {
						return 25 ;
					}
					if(this.person_info.GAD_7 >=10 && this.person_info.GAD_7 <= 14) {
						return 50;
					}
					if(this.person_info.GAD_7 >= 15 && this.person_info.GAD_7 <= 21) {
						return 70;
					}
				} else {
					return 0
				}
			},
			
			// 0-60
			leftComputed3() {
				if(this.person_info != undefined && this.person_info.BDRS_20 != undefined) {
					// 0
					if(this.person_info.BDRS_20 == 0) {
						return '-4';
					}
					
					if(this.person_info.BDRS_20 > 0 && this.person_info.BDRS_20 <= 5) {
						return 1;
					}
					if(this.person_info.BDRS_20 > 5 && this.person_info.BDRS_20 <= 10) {
						return parseFloat(this.person_info.BDRS_20) - 1;
					}
					if(this.person_info.BDRS_20 > 10 && this.person_info.BDRS_20 <= 20) {
						return parseFloat(this.person_info.BDRS_20);
					}
					if(this.person_info.BDRS_20 > 20 && this.person_info.BDRS_20 <= 25) {
						return parseFloat(this.person_info.BDRS_20) + 1;
					}
					if(this.person_info.BDRS_20 > 25 && this.person_info.BDRS_20 <= 30) {
						return parseFloat(this.person_info.BDRS_20) + 3;
					}
					if(this.person_info.BDRS_20 > 30 && this.person_info.BDRS_20 <= 35) {
						return parseFloat(this.person_info.BDRS_20) + 3;
					}
					if(this.person_info.BDRS_20 > 35 && this.person_info.BDRS_20 <= 40) {
						return parseFloat(this.person_info.BDRS_20) + 4;
					}
					if(this.person_info.BDRS_20 > 40 && this.person_info.BDRS_20 <= 45) {
						return parseFloat(this.person_info.BDRS_20) + 5;
					}
					if(this.person_info.BDRS_20 > 45 && this.person_info.BDRS_20 <= 50) {
						return parseFloat(this.person_info.BDRS_20) + 8;
					}
					if(this.person_info.BDRS_20 > 50 && this.person_info.BDRS_20 <= 60) {
						return parseFloat(this.person_info.BDRS_20) + 10;
					}
				} 
				if(this.person_info.BDRS_20 == undefined) {
					return '-4';
				}
			},
			bottomComputed3() {
				if(this.person_info.BDRS_20 == undefined) {
					return 40;
				}
				
				if(this.person_info.BDRS_20 > 0 && this.person_info.BDRS_20 <= 5) {
					return 60;
				}
				
				if(this.person_info.BDRS_20 > 10 && this.person_info.BDRS_20 <= 20) {
					return 80;
				}
				if(this.person_info.BDRS_20 > 20 && this.person_info.BDRS_20 <= 30) {
					return 90;
				}
				if(this.person_info.BDRS_20 > 40 && this.person_info.BDRS_20 <= 50) {
					return 120;
				}
				if(this.person_info.BDRS_20 > 50 && this.person_info.BDRS_20 <= 60) {
					return 140;
				}
			},
		},
		methods: {
			next32() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/32/index'
				// })
				this.$emit('pageEvent', {pageIndex: '34'})
			},
			getServerData() {
				console.log(this.scale_type_record, '====.scale_type_record');
			 
			  setTimeout(() => {
				
				let res = {
					categories: ["N 神经质","C 尽责性","A 宜人性","O 开放性","E 外向性"],
					series: [
					  {
						name: "",
						data: [
							this.scale_type_record.BFI_10_O,
							this.scale_type_record.BFI_10_C,
							this.scale_type_record.BFI_10_A,
							this.scale_type_record.BFI_10_N,
							this.scale_type_record.BFI_10_E
						]
					  }
					]
				  };
				this.chartData = JSON.parse(JSON.stringify(res));
			  }, 10);
			},
			getServerData2() {
			 
			  setTimeout(() => {
				
				let res = {
					categories: ["0","10", '20', '30', '40', '50', '60'],
					series: [
					  {
						name: "风险程度",
						data: ["0","10", '20', '30', '40', '50', '60']
					  },
					  {
						  name: "点",
						  index: 2,
						  type: "point",
						  color: "#f04864",
						  data: [0,0,0,3,0,0]
						}
					]
				  };
				this.chartData2 = JSON.parse(JSON.stringify(res));
			  }, 10);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page35-wrap {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img4.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		.charts-box {
		    width: 100%;
		    min-height: 370px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img18.png');
			background-position: center;
			background-size: 90% 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		.charts-box2 {
			width: 100%;
			min-height: 130px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img19.png');
			background-position: center;
			background-size: 90% 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		.charts-box3 {
			width: 100%;
			min-height: 210px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img19.png');
			background-position: center;
			background-size: 95% 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		
		.phq {
			width: 100%;
			height: 40px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img12.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;
			
			.score_bg {
				width: 80px;
				height: 40px;
				background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img9.png');
				background-position: center;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				position: absolute;
				left: 0;
				top: -35px;
				font-size: 12px;
				color: #fff;
				padding-top: 5px;
				text-align: center;
			}
		}
		.phq2 {
			width: 100%;
			height: 40px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img24.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;
			
			.score_bg2 {
				width: 80px;
				height: 40px;
				background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img9.png');
				background-position: center;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				position: absolute;
				left: 0;
				top: -35px;
				font-size: 12px;
				color: #fff;
				padding-top: 5px;
				text-align: center;
				
			}
		}
		.phq3 {
			width: 100%;
			height: 40px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img25.png');
			background-position: center;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		.phq4 {
			width: 100%;
			height: 105px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img25.png');
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			position: relative;
		}
		.phq5 {
			width: 100%;
			min-height: 150px;
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			position: relative;
			padding-bottom: 20px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img25.png');
			
			.score_bg {
				width: 80px;
				height: 40px;
				background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img9.png');
				background-position: center;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				position: absolute;
				left: 0;
				bottom: 57px;
				font-size: 12px;
				color: #fff;
				padding-top: 5px;
				text-align: center;
			}
		}
		
		.tit35 {
			background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/results/img15.png');
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			height: 40px;
			width: 80%;
			padding-top: 20%;
			margin-left: auto;
			margin-right: auto;
		}
		
		.imgs {
			background-position: initial;
			background-size: 100%;
			background-repeat: no-repeat;
			position: absolute;
		}
		.img1 {
			width: 180px;
			height: 85px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page25/img1.png');			
			position: absolute;
			top: 20px;
			left: 10px;
		}
		.img2 {
			width: 180px;
			height: 85px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page25/img2.png');
			position: absolute;
			top: 20px;
			right: 10px;
		}
		.img3 {
			width: 180px;
			height: 85px;
			top: 250px;
			left: 10px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page25/img3.png');

		}
		.img4 {
			width: 180px;
			height: 125px;
			margin: 0 10px;
			top: 227px;
			right: 0;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page25/img4.png');

		}
		.img5 {
			width: 180px;
			height: 85px;
			top: 133px;
			left: 83px;
			background-image: url('https://dfs.affectai.cn/affect-material/images/page25/img5.png');
	
		}
		
		.dialogue {
			position: absolute;
			bottom: 10px;
			left: 0;right: 0;
			width: 96%;
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
				height: 202px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
</style>
