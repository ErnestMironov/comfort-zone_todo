<template>
	<form @submit.prevent="submit" action="post" class="form container">
		<input
			class="form__input"
			type="text"
			name="name"
			v-model="name"
			placeholder="Чего изволите?"
		/>
		<button type="submit" class="btn btn_green">
			<img src="@/assets/images/plus.svg" alt="" />
			Добавить
		</button>
	</form>
</template>

<script>
export default {
	data: () => {
		return {
			name: "",
		};
	},
	methods: {
		submit() {
			const todo = {
				name: this.name,
				id: Date.now(),
				complete: false,
			};
			this.$store.dispatch("createTodo", todo);
		},
	},
};
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	justify-content: space-between;

	&__input {
		font-size: 18px;
		line-height: 21px;
		flex: auto;
		margin-right: 23px;
		padding: 22px 43px;
		transition: all ease-out 0.2s;
		border: 0;
		border-radius: 10px;
		background-color: #fff;
		// filter: var(--default-shadow);
		&::placeholder {
			color: #969696;
		}
		&:focus {
			outline: none;
			box-shadow: inset 0 0 0px 4px var(--main-color);
		}
	}
}
</style>
