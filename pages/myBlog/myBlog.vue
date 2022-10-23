<template>
	<view style="padding: 20px;">
			  <input
			    confirm-type="search" 
				@confirm="addTodo"
			    class="new-todo"
			    placeholder="What needs to be done?"
			    autocomplete="off"
			    v-model="input"
			  />
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true,
			input:'',
		};
	},
	methods:{
		addTodo(){
			console.log(this.input)
		}
	}
};
</script>
