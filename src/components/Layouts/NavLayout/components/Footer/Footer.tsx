import type { FC } from 'react'

import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import styles from './Footer.module.css'

import Logo from '../Header/components/Logo/Logo'
import Navigation from '../Header/components/Navigation/Navigation'

import { getScopedI18n } from '@/locales/server'

export const Footer: FC = async ({}) => {
	const tF = await getScopedI18n('footer')
	const tB = await getScopedI18n('ui.button')

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={clsx(styles.logoWithRights, styles.logo_)}>
					<Logo isWhite />
					<span className={styles.textRight}>
						{tF('allRightsProtected', { year: new Date().getFullYear() })}
					</span>
				</div>
				<Navigation isFooter className={clsx(styles.nav_, styles.navigation)} />
				<div className={clsx(styles.button_, 'flex justify-end')}>
					<Button className={clsx(styles.button)}>{tB('buyVpn')}</Button>
				</div>
				<div className={clsx(styles.linkInfo, styles.info_)}>
					<Link className={styles.link} href={'/'}>
						{tF('policyData')}
					</Link>
					<Link className={styles.link} href={'/'}>
						{tF('policyPrivacy')}
					</Link>
					<Link className={styles.link} href={'/'}>
						{tF('supports')}
					</Link>
					<Link className={styles.link} href={'/'}>
						{tF('tgChanel')}
					</Link>
				</div>
				<div className={clsx(styles.arrow_, 'flex justify-center tb:justify-end')}>
					<Button className={clsx(styles.buttonUp)}>
						{tB('up')} <Icon type="arrow_top" size={14} />
					</Button>
				</div>
			</div>
		</div>
	)
}
