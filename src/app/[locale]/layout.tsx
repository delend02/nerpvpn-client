import { ReactNode } from 'react'

import { NavLayout } from '@/components/Layouts/NavLayout/NavLayout'

export default async function Layout(props: { children: ReactNode; modal: ReactNode }) {
	return (
		<>
			{props.modal}
			<NavLayout>{props.children}</NavLayout>
		</>
	)
}
