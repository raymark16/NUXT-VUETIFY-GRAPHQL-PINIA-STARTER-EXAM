<template>
	<v-tabs class="bg-black mb-5 tab" color="deep-purple-accent-4" align-tabs="center">
		<NuxtLink to="/" class="nlink">Home</NuxtLink>
		<NuxtLink to="/launches" class="nlink">Launches</NuxtLink>
		<NuxtLink to="/rockets/favorites" class="nlink">Favorites</NuxtLink>
	</v-tabs>
</template>

<style scoped>
.nlink {
	text-decoration: none;
	align-self: center;
	color: white;
	margin: 20px;
	font-size: 1.4rem;
}

.tab {
	height: 10vh;
	display: flex;
}

.router-link-active {
	font-size: 1.5rem;
	text-decoration: underline;
}
</style>
