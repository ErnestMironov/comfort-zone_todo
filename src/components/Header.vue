<template>
	<header class="header">
		<div class="container">
			<router-link
				tag="a"
				to="/"
				exact=""
				active-class="active"
				class="header__back"
				v-if="!isHome"
				tabindex="1"
			>
				<img class="header__back-img" src="@/assets/images/arrow.svg" alt="" />
			</router-link>
			<h1 class="header__name">
				Список дел
			</h1>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isHome() {
			return this.$route.path === "/";
		},
	},
};
</script>
vue
<style scoped lang="scss">
.header {
	padding: 15px 0;
	background-color: var(--main-color);
	&__name {
		font-weight: bold;
		color: #fff;
	}
	&__back {
		&:focus {
			outline: none;
			img {
				filter: drop-shadow(0 0 5px #fff);
			}
		}
	}
	&__back-img {
		max-height: 30px;
	}
}
.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
