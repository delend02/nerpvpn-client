'use client'

import type { FC } from 'react'

import { Button } from '@/ui/Button/Button'

import { useDevice } from '@/config/providers/device'

import styles from './Header.module.css'

import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import { useScopedI18n } from '@/locales/client'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	const tB = useScopedI18n('ui.button')
	const { isMobile } = useDevice()

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Logo />
				{!isMobile ? (
					<>
						<div className="flex-center-center">
							<Navigation className={styles.navigation} />
						</div>
						<Button className={styles.button}>{tB('buyVpn')}</Button>
					</>
				) : (
					<BurgerMenu />
				)}
			</div>
		</div>
	)
}
