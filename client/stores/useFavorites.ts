interface Rocket {
	id: string
	name: string
	description: string
	firstFlight: Date
	height: number
	diameter: number
	mass: number
	stages: number
}

interface Props {
	favoritesData: Rocket[]
}

export const useFavorites = defineStore('favorites', {
	state: (): Props => ({ favoritesData: [] }),

	actions: {
		addFavorite(rocket: Rocket) {
			let keyVal: string[] = []
			if (this.favoritesData.length) {
				keyVal = this.favoritesData.map((e) => e.id)
			}
			if (!keyVal.includes(rocket.id)) {
				this.favoritesData.push(rocket)
				return alert('added successfully')
			}
			alert(`${rocket.name} is already in the favorites`)
		},
		removeFavorite(index: number) {
			this.favoritesData.splice(index, 1)
			alert(`removed successfully`)
		},
	},
})
