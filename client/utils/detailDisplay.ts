export const detailDisplay = (detail: String | undefined) => {
	if (detail) {
		return detail.length > 50 ? detail.slice(0, 50) + '...' : detail
	}
	return ''
}
