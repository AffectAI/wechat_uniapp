<template>
	<view class="page22-wrap" style="padding-top: 20px;">
		<!-- <view class="gold">
			<u-image width="35px" height="35px" src="https://dfs.affectai.cn/affect-material/images/page3/pep.png"></u-image> <text style="margin-left:10px ;"> 1500</text>
		</view> -->
		
		<view class="menu22" style="margin-top: 70px;">
			<view class="item22" v-for="(item, index) in foodList" :key="index">
				<u-image width="100%" height="160px" :src="item.url"></u-image> 
				<view class="name" :class="[item.status == true ? 'name-active' : '']">
					<text>{{item.name}}</text>
					<text v-if="!item.status" @click="addFood(item, index)" class="addFood"></text>
					<text v-if="item.status" @click="receFood(item, index)" class="receFood"></text>
					<!-- <u-image v-if="!item.status" width="20px" height="20px"  src="https://dfs.affectai.cn/affect-material/images/page20-1024/img22.png"></u-image>
					<u-image v-if="item.status" width="20px" height="20px"  src="https://dfs.affectai.cn/affect-material/images/page20-1024/img23.png"></u-image> -->
				</view>
			</view>
			
			<view @click="next" style="position: relative;margin: 0 auto;width: 100px;height: 40px;line-height: 40px;background-color: rgba(86,235,155);text-align: center;border-radius: 5px;">
				提前下单
				<view v-if="count>0" style="color: #fff;position: absolute;top: -10px;right: -10px;background-color: red;width: 20px;height: 20px;border-radius: 50%;text-align: center;line-height: 20px;">{{count}}</view>
			</view>
			
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				foodList: [
					{name: '新鲜野菜沙拉￥32', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img27.png', price: '32', status: false},
					{name: '野生蘑菇炖鸡￥88', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img20.png', price: '88',status: false},
					{name: '山珍海鲜汤￥32', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img21.png', price: '32',status: false},
					{name: '山泉冰激凌￥26', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img28b.png', price: '26',status: false},
					{name: '烧烤果蔬拼盘￥96', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img24.png', price: '96',status: false},
					{name: '竹笋烧肉片￥58', url: 'https://dfs.affectai.cn/affect-material/images/page20-1024/img25.png', price: '58',status: false},
				]
			}
		},
		computed: {
			
		},
		methods: {
			next() {
				if(this.count != 2) {
					this.$refs.uToast.show({
						title: '请选择其中两道菜肴！',
						type: 'error',
					})
					return
				}
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page23/index'
				// })
				let food = this.foodList.filter(item => item.status == true).map(item => item.name);
				
				this.$emit('pageEvent', {pageIndex: '23'});
				this.$emit('setFood', {food: food})
			},
			filterActive() {
				let result = this.foodList.filter(item => {
					return item.status
				});	
				this.count = result.length;
			},
			addFood(item, index) {
				this.foodList[index].status = true;
				this.$emit('setAddFood', {price: item.price});
				this.filterActive();
			},
			receFood(item, index) {
				this.foodList[index].status = false;
				this.$emit('setReceFood', {price: item.price});
				this.filterActive();
			}
			
		}
	}
</script>

<style lang="scss">
	.page22-wrap {
		min-height: 100vh;
		// background-image: url(https://dfs.affectai.cn/affect-material/images/page4/bg.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		background-color: beige;
	}
	.addFood, .receFood {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px; /* 根据需要调整大小 */
		height: 20px; /* 根据需要调整大小 */
		background-color: green;
		border-radius: 50%; /* 圆形边框 */
		position: relative;
	}
	.addFood::before {
	    content: '+';
	    color: white;
	    font-size: 20px; /* 根据需要调整大小 */
	    font-weight: bold;
		margin-bottom: 3px;
	}
	.receFood::before {
	    content: '-';
	    color: white;
	    font-size: 20px; /* 根据需要调整大小 */
	    font-weight: bold;
		margin-bottom: 3px;
	  }
	.gold{
		height:40px ;
		width: 110px;
		border: 2px solid rgb(218,148,36);
		background-color: rgba(205,211,169,0.8);
		border-radius: 20px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.menu22{
		padding: 4%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.item22{
			width: 47%;
			// height: 190px;
			background-color: #fff;
			margin-bottom: 30px;
			border-radius: 10px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			
			.name{
				height: 40px;
				padding:0 8px;
				font-size: 12px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}
			.name-active {
				background-color: rgb(86,235,155);
				color: #fff;
			}
		}
	}
	
</style>