<template>
	<div>
		<div class="select-year">
			<selectLaunches
				select-class="filter-launches"
				label="Filter by year"
				select-type="filter"
				:items="filterLaunches"
				@handle-change="handleChange"
			/>
			<selectLaunches
				select-class="sortLaunches"
				label="Sort by year"
				select-type="sort"
				:items="sortItems"
				@handle-change="handleChange"
			/>
		</div>

		<tableComponent :table-headers="tableHeaders" title="Launches">
			<tr v-for="launch in changeDisplay" :key="launch?.id">
				<td>{{ launch?.mission_name }}</td>
				<td>{{ getFullDate(launch?.launch_date_local) }}</td>
				<td>{{ launch?.launch_site?.site_name }}</td>
				<td>{{ launch?.rocket?.rocket?.name }}</td>
				<td>
					{{ detailDisplay(launch?.details) }}
				</td>
				<td>
					<v-btn
						variant="outlined"
						color="blue"
						@click="
							favorites.addFavorite({
								id: launch?.rocket?.rocket?.id,
								name: launch?.rocket?.rocket?.name,
								description: launch?.rocket?.rocket?.description,
								firstFlight: launch?.rocket?.rocket?.first_flight,
								height: launch?.rocket?.rocket?.height?.meters,
								diameter: launch?.rocket?.rocket?.diameter?.meters,
								mass: launch?.rocket?.rocket?.mass?.kg,
								stages: launch?.rocket?.rocket?.stages,
							})
						"
					>
						Add to Favorite
					</v-btn>
				</td>
			</tr>
		</tableComponent>
	</div>
</template>

<script lang="ts" setup>
import { LaunchesProps } from '../utils/typeProps'

const favorites = useFavorites()
const tableHeaders = [
	'Mission name',
	'Launch date',
	'Launch site name',
	'Rocket name',
	'Details',
	'Favorite Rockets',
]
const sortItems = ['None', 'Ascending', 'Descending']
const yearSelect = ref<string | number>('')
const sortSelect = ref('')

const query = gql`
	query getLaunches {
		launches {
			id
			mission_name
			launch_date_local
			launch_site {
				site_name
			}
			details
			rocket {
				rocket {
					id
					name
					description
					first_flight
					height {
						meters
					}
					diameter {
						meters
					}
					mass {
						kg
					}
					stages
				}
			}
		}
	}
`

const {
	data: { value: launchData },
} = await useAsyncQuery<LaunchesProps>(query)

const changeDisplay = ref(launchData?.launches)

// Filter by year options
const filterLaunches = computed(() => {
	const temp: (string | number)[] = Array.from(
		new Set(
			launchData?.launches.map((e) => {
				return new Date(e.launch_date_local).getFullYear()
			}),
		),
	)
	temp.unshift('None')
	return temp
})

// handle change on select year and sort year
const handleChange = (selectValue: string | number, selectType: string) => {
	if (selectType === 'sort') {
		sortSelect.value = selectValue as string
	} else if (selectType === 'filter') {
		yearSelect.value = selectValue
	}

	let launchFilter = launchData?.launches
	// logic for select - filter by year
	if (typeof yearSelect.value === typeof 1) {
		launchFilter = launchFilter?.filter((e) => {
			return new Date(e.launch_date_local).getFullYear() === Number(yearSelect.value)
		})
	} else if (yearSelect.value === 'None') {
		launchFilter = launchData?.launches
	}
	// logic for select - sort by year
	if (
		sortSelect.value === 'Ascending' ||
		sortSelect.value === 'Descending' ||
		sortSelect.value === 'None'
	) {
		launchFilter?.sort((a, b) => {
			const temp = new Date(a.launch_date_local).getTime() - new Date(b.launch_date_local).getTime()
			const res = Math.abs(temp) / temp
			return sortSelect.value === 'Descending' ? -res : res
		})
	}
	changeDisplay.value = launchFilter
}
// Launch date reformat
const getFullDate = (launchDate: Date) => {
	const dateLaunch = new Date(launchDate)
	return [dateLaunch.getFullYear(), dateLaunch.getMonth() + 1, dateLaunch.getDate()].join('/')
}
</script>

<style scoped>
.select-year {
	display: flex;
	margin: 0 2rem;
}

.filter-launches {
	margin-right: 2rem;
}
</style>
