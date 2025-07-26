export type ServerSideProps = {
	params: Promise<{ locale: string; slug?: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export interface ResponseType<T = any> {
	success: boolean
	status: any
	data: T
}
