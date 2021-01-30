<template>
	<div class="todo-wrap container">
		<ul class="todo-list" v-if="todos.length">
			<transition-group name="page" mode="out-in">
				<TodoItem
					v-for="todo of todos"
					:key="todo.id"
					:todo="todo"
					draggable="true"
					@dragstart="dragStart(todo.id, $event)"
					@dragover.prevent
					@dragend="dragEnd"
					@drop="dragFinish(todo.id, $event)"
				></TodoItem>
			</transition-group>
		</ul>
		<div v-else class="todo-placeholder" @click="inputFocus">
			Похоже что вы разобрались со всеми своими делами, <br />
			в противном случае добавьте еще!
		</div>
		<div v-if="todos.length" class="trash">
			<div @dragover.prevent @drop="dragFinish(-1, $event)" class="trash__can">
				<img
					class="trash__icon"
					src="@/assets/images/trash-can.svg"
					alt="удалить"
				/>
				<div class="trash__txt">
					<h3 class="trash__title">Корзина</h3>
					<span>
						Перетащите сюда <br />
						для удаления
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TodoItem from "./Todo-item";

export default {
	components: { TodoItem },
	data: () => {
		return {
			newItem: "",
			dragging: -1,
		};
	},
	computed: {
		todos() {
			return this.$store.getters.todos;
		},
		isDragging() {
			return this.dragging > -1;
		},
	},
	methods: {
		inputFocus() {
			document.querySelector(".form__input").focus();
		},
		removeTodo(id) {
			this.$store.dispatch("removeTodo", id);
		},
		dragStart(which, ev) {
			ev.dataTransfer.dropEffect = "move";
			this.dragging = which;
			ev.target.classList.add("in-moution");
		},
		dragEnd(ev) {
			this.dragging = -1;
			ev.target.classList.remove("in-moution");
		},
		dragFinish(to, ev) {
			this.moveItem(to);
		},
		highDeletedElement() {
			document.querySelector(".trash__can").classList.add("high");
			this.movebleItem.classList.add("delete");
		},
		removeHighDeletedElement(ev) {
			ev.target.classList.remove("high");
		},
		moveItem(to) {
			if (to === -1) {
				this.removeTodo(this.dragging);
			}
			// else {
			// 	this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
			// }
		},
	},
};
</script>

<style lang="scss" scoped>
.todo-wrap {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100vh - 200px);
	padding-left: 0;
	@media screen and (max-width: 1000px) {
		height: auto;
		padding: 0 20px 40px;
	}
}
.todo-list {
	overflow: auto;
	max-height: calc(100vh - 400px);
	margin-top: 64px;
	padding: 4px 40px 4px 20px;
	@media screen and (max-width: 1000px) {
		overflow: visible;
		max-height: 100%;
		margin-top: 40px;
		padding: 0;
	}
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
		margin-bottom: 20px;
		@media screen and (max-width: 1000px) {
			margin-bottom: 15px;
		}
	}
}
.todo-placeholder {
	font-size: 35px;
	font-weight: bold;
	width: calc(100% - 20px);
	margin-top: 40px;
	margin-left: 20px;
	padding: 40px;
	padding-left: 20px;
	cursor: pointer;
	text-align: center;
	color: var(--main-color);
	border-radius: 10px;
	border-radius: 10px;
	background: #69ec692e;
	@media screen and (max-width: 1000px) {
		font-size: 20px;
		width: 100%;
		margin-left: 0;
		padding: 20px;
	}
}
.trash {
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;
	&__can {
		display: flex;
		padding: 16px 20px;
		transition: all ease 0.2s;
		color: #fff;
		border-radius: 10px;
		background-color: var(--red);
		&.high {
			box-shadow: 0 0 0px 4px var(--red_light);
		}
	}
	&__txt {
		font-size: 14px;
		line-height: 16px;
	}
	&__title {
		font-size: 24px;
		font-weight: bold;
		line-height: 28px;
		margin-bottom: 3px;
	}
	&__icon {
		max-height: 58px;
		margin-right: 13px;
	}
}
</style>
