<template>
	<header class="header">
		<div class="container">
			<router-link tag="a" to="/" exact="" active-class="active" v-if="!isHome">
				<img class="header__back" src="@/assets/images/arrow.svg" alt="" />
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
	background-color: var(--main-color);
	padding: 15px 0;
	&__name {
		font-weight: bold;
		color: #fff;
	}

	&__back {
		max-height: 30px;
	}
}
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
