export const detailDisplay = (detail: string | undefined) => {
	if (detail) {
		return detail.length > 50 ? detail.slice(0, 50) + '...' : detail
	}
	return ''
}
