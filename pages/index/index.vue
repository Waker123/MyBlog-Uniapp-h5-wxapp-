<template>
	<view class="mainBody">
		<background-one class='backgroundOne'></background-one>
		<background-two class='backgroundTwo'></background-two>
		<background-three class='backgroundThree'></background-three>
	</view>
</template>

<script>
	import backgroundOne from '../../components/background/backgroundOne.vue'
	import backgroundTwo from '../../components/background/backgroundTwo.vue'
	import backgroundThree from '../../components/background/backgroundThree.vue'
	export default {
		name:'index',
		components:{
			backgroundOne,
			backgroundTwo,
			backgroundThree,
		}
	}
</script>

<style lang="scss" scoped>
	.mainBody{
		position: relative;
		width: 750rpx;
		.backgroundOne,.backgroundTwo,.backgroundThree{
			position: absolute;
			z-index: -99;
		}
		.backgroundOne{
			top: 0;
		}
		.backgroundTwo{
			top:1626rpx;
		}
		.backgroundThree{
			top: 3252rpx;
		}
	}
</style>