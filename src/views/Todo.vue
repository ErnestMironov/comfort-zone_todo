<template>
	<div class="todo-page">
		<form
			@submit.prevent="submit"
			action="post"
			class="todo-page__form container"
		>
			<textarea
				class="todo-page__input"
				type="text"
				name="name"
				v-model="name"
				val="name"
				placeholder="Чего изволите?"
				required
				tabindex="0"
			/>
			<button type="submit" class="btn btn_green form__submit">
				<img src="@/assets/images/save.svg" alt="" />
				<span>Сохранить</span>
			</button>
		</form>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			name: "",
		};
	},
	computed: {
		todo() {
			return this.$store.getters.getTodoById(+this.$route.params.id);
		},
	},
	created() {
		this.name = this.todo.name;
	},
	methods: {
		submit() {
			const todo = {
				...this.todo,
				name: this.name,
			};
			this.$store.dispatch("updateTodo", todo);
			this.$router.push("/");
		},
	},
};
</script>

<style lang="scss" scoped>
.todo-page {
	margin-top: 60px;
	&__form {
		display: flex;flex-direction: column;align-items: flex-end;
	}
	&__input {
		font-size: 18px;
		line-height: 21px;
		height: 200px;
		width: 100%;
		padding: 22px 43px;
		transition: all ease-out 0.2s;margin-bottom: 20px;
		border: 0;
		border-radius: 10px;min-width: 0;
		background-color: var(--todo-color);
		color: var(--font-color);
		// filter: var(--default-shadow);
		&::placeholder {
			color: #969696;
		}
		&:focus {
			outline: none;
			box-shadow: inset 0 0 0px 4px var(--main-color);
        }

        @media screen and (max-width: 680px) {
            padding: 20px 10px 20px 20px;
        }
    }

    &__submit {
        @media screen and (max-width: 680px) {
            span {
                display: none;
            }
            img {
                margin-right: 0;
            }
        }
    }
}
</style>
