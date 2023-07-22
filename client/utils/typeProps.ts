export type Launch = {
	id: string
	mission_name: String
	launch_date_local: Date

	launch_site: {
		site_name: String
	}
	details?: String
	rocket: {
		rocket: {
			id: string
			name: String
			description: String
			first_flight: Date
			height: {
				meters: Number
			}
			diameter: {
				meters: Number
			}
			mass: {
				kg: Number
			}
			stages: Number
		}
	}
}

export type LaunchesProps = {
	launches: Launch[]
}

export type RocketDetail = {
	rocket: {
		id: string
		name: String
		description: String
		first_flight: Date
		height: {
			meters: Number
		}
		diameter: {
			meters: Number
		}
		mass: {
			kg: Number
		}
		stages: Number
	}
}
