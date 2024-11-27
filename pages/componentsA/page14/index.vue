<template>
	<view class="wrap14">
		<view class="top">
			<view class="m-a">1500</view>
			<view class="m-b">50</view>
		</view>
		<view style="width: 93%;display: flex;margin: 45px auto;align-items: center;">
			<view style="width: 81px;height: 81px;border-radius: 50%;background-color: #fff;margin-right: 17px;">
				<image src="../../../static/images/mine.png" style="width: 81px;height: 81px;border-radius: 50%;" mode=""></image>
			</view>
			<view style="background-color: rgba(255,255,255,0.7);padding: 10px 13px;display: flex;height: 70px;border-radius: 8px;">
				<view style="font-size: 12px;color: #434343">现在我将传授你入门版的捕鸟秘诀！总结来说就是：当新出现的小鸟与上一只完全相同时，立刻捕捉！</view>
				<view style="width: 20px;margin-left: 5px;">
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/shou-3.png" style="width: 28px;height: 28px;" mode=""></image>
					<image src="https://dfs.affectai.cn/affect-material/images/page19-1023/down.png" style="width: 20px;height: 10px;margin-left: 5px;" mode=""></image>
				</view>
			</view>
		</view>
		
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
</template>

<script>
</script>

<style lang="scss" scoped>
	.wrap14 {
		min-height: 100vh;
		background-image: url('https://dfs.affectai.cn/affect-material/images/page18-1022/bird-start-bg.png');
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
				background-image: url('https://dfs.affectai.cn/affect-material/images/page19-1023/m-a.png');
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
				background-image: url('https://dfs.affectai.cn/affect-material/images/page19-1023/m-b.png');
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
	}
</style>