import { NavLayout } from '@/components/Layouts/NavLayout/NavLayout'

export default async function Layout(props: any) {
	return (
		<>
			{props.modal}
			<NavLayout>{props.children}</NavLayout>
		</>
	)
}
