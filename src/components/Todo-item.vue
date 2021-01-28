<template>
	<li class="todo">
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
</template>

<script>
export default {
	props: ["todo"],
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
.todo {
	display: flex;
	padding: 18px 40px;
	transition: all ease 0.2s;
	color: black;
	border-radius: 10px;
	background: #fff;
	box-shadow: var(--default-shadow);
	@media screen and(max-width: 600px) {
		padding: 12px;
	}
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
		@media screen and (max-width: 520px) {
			margin-right: 10px;
		}
	}
}
</style>
