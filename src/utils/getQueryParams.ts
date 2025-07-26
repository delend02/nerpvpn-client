export type QueryParamsProps = {
	pageNumber?: number
	query?: string
}

export const getQueryKeysArray = (query: any) => {
	if (!query) return []

	return Object.entries(query)
		.filter(([key, value]) => {
			if (
				typeof value === 'undefined' ||
				(typeof value === 'string' && !value.length) ||
				(key === 'sortType' && value === 0)
			)
				return false

			return true
		})
		.map(([key, value]) => `${key}_${value}`)
}
