<template>
	<view class="mainBody">
		<background-one class='backgroundOne'></background-one>
		<background-two class='backgroundTwo'></background-two>
		<background-three class='backgroundThree'></background-three>
		<todo-list class='todoList'></todo-list>
		<week-todo class= 'weekTodo'></week-todo>
		<daily-task class = 'dailyTask'></daily-task>
	</view>
</template>

<script>
	import backgroundOne from '../../components/background/backgroundOne.vue'
	import backgroundTwo from '../../components/background/backgroundTwo.vue'
	import backgroundThree from '../../components/background/backgroundThree.vue'
	import todoList from '../../components/todo/todoList.vue'
	import weekTodo from '../../components/weektodo/weekTodo.vue'
	import dailyTask from '../../components/dailyTask/dailyTask.vue'
	import timeLine from '../../components/timeLine/timeLine.vue'
	export default {
		name:'index',
		components:{
			backgroundOne,
			backgroundTwo,
			backgroundThree,
			todoList,
			weekTodo,
		}
	}
</script>

<style lang="scss" scoped>
	.mainBody{
		position: relative;
		width: 750rpx;
		height: 4864rpx;
		.backgroundOne,.backgroundTwo,.backgroundThree{
			position: absolute;
			z-index: -99;
		}
		.backgroundOne{
			top: 0;
		}
		.backgroundTwo{
			top:1620rpx;
		}
		.backgroundThree{
			top: 3242rpx;
		}
		.todoList{
			position: absolute;
			top: 200rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.weekTodo{
			position: absolute;
			top: 2100rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>