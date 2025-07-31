'use client'

import { type FC, useState } from 'react'

import { Button } from '@/ui/Button/Button'

import { clsx } from '@/utils/clsx'

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
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.header, { [styles.openBurger]: isOpen && isMobile })}>
				<Logo />
				{!isMobile ? (
					<>
						<div className="flex-center-center">
							<Navigation className={styles.navigation} />
						</div>
						<Button className={styles.button}>{tB('buyVpn')}</Button>
					</>
				) : (
					<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				)}
			</div>
		</div>
	)
}
