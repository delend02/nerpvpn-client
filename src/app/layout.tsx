import { ReactNode, Suspense } from 'react'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { Spinner } from '@/ui/Spinner/Spinner'

import { clsx } from '@/utils/clsx'
import { getCurrentDir } from '@/utils/isRTL'

import { CookiesNamespace } from '@/config/namespaces'
import { HeroUIProvider } from '@/config/providers/HeroUIProvider'
import { DeviceProvider, DeviceType } from '@/config/providers/device'

import './globals.css'

import { sfProDisplay, unbounded } from '@/fonts'
import { I18nProviderClient } from '@/locales/client'
import { DEFAULT_LOCALE, LocaleType } from '@/locales/config'

export const metadata: Metadata = {
	title: 'Nerp VPN',
	// description: '',
	// keywords: ['nerp vpn', 'nerp vpn app', 'nerp vpn app download', 'nerp vpn download', 'vpn'],
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const locale = ((await cookies()).get(CookiesNamespace.NEXT_LOCALE)?.value ||
		DEFAULT_LOCALE) as LocaleType

	const device = (await cookies()).get(CookiesNamespace.DEVICE)?.value as DeviceType

	return (
		<html
			lang={locale}
			dir={getCurrentDir(locale)}
			className={clsx(sfProDisplay.variable, unbounded.variable, 'font-sf_pro antialiased')}
		>
			<body>
				<Suspense fallback={<Spinner center hFull />}>
					<DeviceProvider device={device}>
						<HeroUIProvider>
							{/* <QueryProvider> */}
							<I18nProviderClient locale={locale}>{children}</I18nProviderClient>
							{/* </QueryProvider> */}
						</HeroUIProvider>
					</DeviceProvider>
				</Suspense>
			</body>
		</html>
	)
}
