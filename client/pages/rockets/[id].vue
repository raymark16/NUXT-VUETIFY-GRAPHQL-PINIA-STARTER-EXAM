<template>
	<div class="rocket-details">
		<rocketCard :rocket="rocket.rocket" />
	</div>
</template>

<script setup lang="ts">
import { RocketDetail } from '~~/client/utils/typeProps'

const { id } = useRoute().params

const query = gql`
	query getRocket($id: ID!) {
		rocket(id: $id) {
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
`

const {
	data: { value: rocket },
} = await useAsyncQuery<RocketDetail>(query, { id })

if (!rocket) {
	throw createError({ statusCode: 404 })
}
</script>

<style scoped>
.rocket-details {
	height: 70vh;
}
</style>
