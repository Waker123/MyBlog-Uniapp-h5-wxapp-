<template>
	<view class="time-main">
		<u-popup :show="timeLineState" mode='top'>
		    <u-scroll-list :indicator="indicator" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
		        <view v-for="(item, index) in list" :key="index">
					iiiiiiiiiiiii+{{$nbsp}}
		        </view>
		    </u-scroll-list>
		</u-popup>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:'timeLine',
		data(){
			return{
				indicator: true,
				list:[1,2,3,4,5,6,7,8,9,10,11,22]
			}
		},
		computed:{
			...mapState('timeLine',['timeLineState'])
		},
		
		
	}
</script>

<style lang="scss" scoped>
	.time-main{
		width: 750rpx;
	}
</style>