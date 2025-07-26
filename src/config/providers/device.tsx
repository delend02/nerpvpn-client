'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import Cookies from 'js-cookie'

import { CookiesNamespace } from '@/config/namespaces'

const DeviceContext = createContext({
	isMobile: false,
	isTablet: false,
	isDesktop: false,
})

export type DeviceType = 'desktop' | 'tablet' | 'mobile'

const getDevice = (width: number) => {
	if (width < 768) return 'mobile'
	if (width < 1024) return 'tablet'
	return 'desktop'
}

export function DeviceProvider({ device, children }: { device?: DeviceType; children: ReactNode }) {
	const [curDevice, setCurDevice] = useState(device)
	const isCurrentCookie = (value: string): boolean => curDevice === value

	useEffect(() => {
		const setCookieDevice = () => {
			const newDevice = getDevice(window.innerWidth)
			if (!isCurrentCookie(newDevice)) {
				setCurDevice(newDevice)
				Cookies.set(CookiesNamespace.DEVICE, newDevice)
			}
		}

		setCookieDevice()

		window?.addEventListener('resize', setCookieDevice)
		return () => window?.removeEventListener('resize', setCookieDevice)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [curDevice])

	if (!curDevice)
		return (
			<div className="w-full h-full flex-center-center">
				{/* <Image
					className="animate-fade"
					src={TTLogo}
					alt="NerpVPNLogo"
					width={200}-
					height={200}
					priority
					draggable={false}
				/> */}
			</div>
		)

	return (
		<DeviceContext.Provider
			value={{
				isMobile: isCurrentCookie('mobile'),
				isTablet: isCurrentCookie('tablet'),
				isDesktop: isCurrentCookie('desktop'),
			}}
		>
			{children}
		</DeviceContext.Provider>
	)
}

export function useDevice() {
	return useContext(DeviceContext)
}
