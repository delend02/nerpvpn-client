import type { FC } from 'react'

import Image from 'next/image'

import { Link } from '@/ui/Link/Link'

import { Contacts } from '@/config/constants'

import styles from './Footer.module.css'

import Logo from '../Header/components/Logo/Logo'
import Navigation from '../Header/components/Navigation/Navigation'

import { getScopedI18n } from '@/locales/server'

export const Footer: FC = async ({}) => {
	const tF = await getScopedI18n('footer')
	const tB = await getScopedI18n('ui.button')

	return (
		<div className={styles.wrapper}>
			<div className={styles.logoWithRights}>
				<Logo isWhite />
				<span className={styles.textRight}>
					{tF('allRightsProtected', { year: new Date().getFullYear() })}
				</span>
			</div>
			<Navigation />
		</div>
	)
}
