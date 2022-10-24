<template>
	<view class="daily-main">
		<button class="dailyBtn" @click="changeTimeLineState">今日打卡</button>
	</view>
</template>

<script>
	export default{
		name:'dailyTask',
		data(){
			return{
				
			}
		},
		methods:{
			changeTimeLineState(){
				this.$store.commit('timeLine/changeTimeLineState',true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.daily-main{
		position: relative;
		width: 600rpx;
		height: 1000rpx;
		background-color: rgba(255, 255, 255, .7);
		border-radius: 50rpx;
		.dailyBtn{
			position: absolute;
			left: 6%;
			top: 6%;
			font-size: 60rpx;
			font-family: 'yuan';
			font-weight: 700;
			width: 350rpx;
			height: 120rpx;
			line-height: 100rpx;
			border: 10rpx solid black;
			border-radius: 50rpx;
			cursor: pointer;
			background-color: #87CEFF;
		}
	}
</style>