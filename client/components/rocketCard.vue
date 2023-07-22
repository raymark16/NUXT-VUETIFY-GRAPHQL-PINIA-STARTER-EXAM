<template>
	<v-card class="card mx-auto my-12 bg-grey-lighten-3">
		<v-card-title class="card-title">{{ rocket?.name }}</v-card-title>
		<div class="detail-container">
			<p class="detail">
				<span class="span-title">Description:</span>
				{{ rocket?.description }}
			</p>
			<p class="detail">
				<span class="span-title">First flight:</span>
				{{ rocket?.firstFlight }}
			</p>
			<p class="detail">
				<span class="span-title">Height:</span>
				{{ rocket?.height?.meters }} meters
			</p>
			<p class="detail">
				<span class="span-title">Diameter:</span>
				{{ rocket?.diameter?.meters }} meters
			</p>
			<p class="detail">
				<span class="span-title">Mass:</span>
				{{ rocket?.mass?.kg }} kg
			</p>
			<p class="detail">
				<span class="span-title">Stages:</span>
				{{ rocket?.stages }}
			</p>
		</div>
	</v-card>
</template>

<script setup lang="ts">
defineProps({
	rocket: { type: Object, default: () => {} },
})
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 30vw;
	height: 60vh;
}

.span-title {
	font-size: 1.5rem;
}

.detail {
	font-size: 1rem;
}

.card-title {
	text-align: center;
	margin: 10px 20px;
	font-size: 3rem;
}

.detail-container {
	margin: 10px 30px;
}
</style>
