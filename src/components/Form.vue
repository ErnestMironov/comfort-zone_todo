<template>
	<form @submit.prevent="submit" action="post" class="form container">
		<input
			class="form__input"
			type="text"
			name="name"
			v-model="name"
			placeholder="Чего изволите?"
			required
		/>
		<button type="submit" class="btn btn_green form__submit">
			<img src="@/assets/images/plus.svg" alt="" />
			<span>Добавить</span>
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
			this.name = "";
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
		border-radius: 10px;min-width: 0;
		background-color: #fff;
		// filter: var(--default-shadow);
		&::placeholder {
			color: #969696;
		}
		&:focus {
			outline: none;
			box-shadow: inset 0 0 0px 4px var(--main-color);
        }

        @media screen and (max-width: 680px) {
            padding: 15px 10px 15px 20px;
            margin-right: 15px;
            font-size: 16px;
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
