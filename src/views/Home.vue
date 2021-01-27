<template>
	<div class="home">
		<Form></Form>
		<TodosList></TodosList>
	</div>
</template>

<script>
import TodosList from "@/components/Todos-list";
import Form from "@/components/Form";

export default {
	components: { TodosList, Form },
	name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
	margin-top: 60px;
}
</style>
