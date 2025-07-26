'use client'

import { HeroUIProvider as Providers } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<ToastProvider placement="bottom-right" toastOffset={0} />
			{children}
		</Providers>
	)
}
