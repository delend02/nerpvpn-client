export const getByKeyString = (obj: any, keyString: string) => {
	if (!keyString) return null

	const keys = keyString.split('.')
	let result = obj
	for (const key of keys) {
		if (result.hasOwnProperty(key)) result = result[key]
		else return undefined
	}
	return result
}
