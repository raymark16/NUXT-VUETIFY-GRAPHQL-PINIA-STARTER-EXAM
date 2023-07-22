<template>
	<tableComponent :table-headers="tableHeaders" title="Favorite Rockets">
		<tr v-for="(rocket, i) in favorites.favoritesData" :key="rocket?.id">
			<td>{{ rocket?.name }}</td>
			<td>{{ detailDisplay(rocket?.description) }}</td>
			<td>{{ rocket?.firstFlight }}</td>
			<td>{{ rocket?.height }}</td>
			<td>{{ rocket?.diameter }}</td>
			<td>
				{{ rocket?.mass }}
			</td>
			<td>
				{{ rocket?.stages }}
			</td>
			<td style="display: flex">
				<v-btn class="my-2 mr-2" variant="outlined" color="blue" @click="handleView(rocket?.id)">
					View
				</v-btn>
				<v-btn class="my-2" variant="outlined" color="blue" @click="favorites.removeFavorite(i)">
					Remove
				</v-btn>
			</td>
		</tr>
	</tableComponent>
</template>

<script setup lang="ts">
const favorites = useFavorites()
const tableHeaders: string[] = [
	'Rocket name',
	'Description',
	'First flight date',
	'Height',
	'Diameter',
	'Mass',
	'Number of stages',
	'Action',
]

const handleView = async (id: string) => {
	await navigateTo(`/rockets/${id}`)
}
</script>
