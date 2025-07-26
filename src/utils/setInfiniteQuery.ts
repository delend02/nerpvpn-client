export const getInfiniteSelect = <T>(value: any) => {
	return (value?.pages?.flat()?.filter((item: any) => typeof item !== 'undefined') || []) as T
}
export const getInfiniteReverseSelect = <T>(value: any) => {
	const newValue = { ...value, pages: [...(value?.pages || [])] }

	return (
		newValue.pages
			?.reverse()
			?.flat()
			?.filter((item: any) => typeof item !== 'undefined') || []
	)?.reverse() as T
}

export const getInfiniteNextPageParam = (lastPage: any, AllPages: any) => {
	return (lastPage?.length ? AllPages?.length + 1 : undefined) as number | undefined
}

export const getInfiniteSelectTransactionHistory = <T>(value: any) =>
	(value || [])
		?.flatMap((page: any) => page?.items?.map((item: any) => ({ ...item, key: item.id })))
		?.filter((item: any) => typeof item !== 'undefined') as (T & { key: string })[]
