<template>
	<div class="table-data">
		<v-chip color="black" class="title">{{ title }}</v-chip>

		<v-table fixed-header height="600px">
			<thead>
				<tr>
					<th v-for="tableHead in tableHeaders" :key="tableHead" class="text-left">
						{{ tableHead }}
					</th>
				</tr>
			</thead>
			<tbody>
				<slot />
			</tbody>
		</v-table>
	</div>
</template>

<script setup lang="ts">
defineProps({
	tableHeaders: { type: Array<string>, default: () => [] },
	title: { type: String, default: '' },
})
</script>

<style scoped>
.table-data {
	margin: 15px 50px;
	height: 80vh;
	padding: 30px;
	border: solid 2px black;
	border-radius: 20px;
}

.title {
	font-weight: bold;
	height: 50px;
	font-size: 2rem;
}
</style>
