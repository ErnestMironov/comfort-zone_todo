<template>
	<div class="todo-wrap container">
		<ul class="todo-list">
			<transition-group name="page" mode="out-in">
				<li class="todo" v-for="todo of todos" :key="todo.id">
					<label class="checkbox">
						<input
							type="checkbox"
							name="completed"
							:checked="todo.complete"
							@click="completeTodo(todo.id)"
						/>
						<span>
							<img src="@/assets/images/complete.svg" alt="Удалить контакт" />
						</span>
					</label>
					<h2 class="todo__name">{{ todo.name }}</h2>
					<div class="btns-row">
						<router-link
							tag="div"
							tabindex="0"
							class="btn btn_s btn_yellow"
							:to="'/' + todo.id"
						>
							<img src="@/assets/images/pencil.svg" alt="Изменить контакт" />
						</router-link>
						<div
							@click="removeTodo(todo.id)"
							tabindex="0"
							type="submit"
							class="btn btn_s btn_red"
						>
							<img src="@/assets/images/times.svg" alt="Удалить контакт" />
						</div>
					</div>
				</li>
			</transition-group>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		todos() {
			return this.$store.getters.todos;
		},
	},
	methods: {
		removeTodo(id) {
			this.$store.dispatch("removeTodo", id);
		},
		completeTodo(id) {
			this.$store.dispatch("completeTodo", id);
		},
	},
};
</script>

<style lang="scss" scoped>
.todo-wrap {
	padding-left: 0;
}
.todo-list {
	overflow: auto;
	max-height: calc(100vh - 260px);
	margin-top: 64px;
	padding: 4px 40px 4px 20px;
	&::-webkit-scrollbar {
		width: 8px;
		border-radius: 5px;
		background-color: var(--grey);
	}
	&::-webkit-scrollbar-thumb {
		width: 100%;
		border-radius: 5px;
		background: var(--main-color);
	}
	.todo:not(:last-child) {
		margin-bottom: 30px;
	}
}
.todo {
	display: flex;
	padding: 18px 40px;
	transition: all ease 0.2s;
	color: black;
	border-radius: 10px;
	background: #fff;
	box-shadow: var(--default-shadow);
	&__name {
		font-size: 18px;
		font-weight: normal;
		line-height: 21px;
		display: flex;
		align-items: center;
		flex: auto;
		margin: 0 21px;
	}
}
.btns-row {
	display: flex;
	.btn:not(:last-child) {
		margin-right: 21px;
	}
}
</style>
