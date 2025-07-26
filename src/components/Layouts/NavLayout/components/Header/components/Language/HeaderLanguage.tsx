'use client'

import type { FC } from 'react'

import Language from '@/ui/Language/Language'

import { useDevice } from '@/config/providers/device'

const HeaderLanguage: FC = () => {
	const { isMobile } = useDevice()

	if (isMobile) return null
	return <Language />
}

export default HeaderLanguage
