export type Launch = {
	id: string
	mission_name: string
	launch_date_local: Date

	launch_site: {
		site_name: string
	}
	details?: string
	rocket: {
		rocket: {
			id: string
			name: string
			description: string
			first_flight: Date
			height: {
				meters: number
			}
			diameter: {
				meters: number
			}
			mass: {
				kg: number
			}
			stages: number
		}
	}
}

export type LaunchesProps = {
	launches: Launch[]
}

export type RocketDetail = {
	rocket: {
		id: string
		name: string
		description: string
		first_flight: Date
		height: {
			meters: number
		}
		diameter: {
			meters: number
		}
		mass: {
			kg: number
		}
		stages: number
	}
}
