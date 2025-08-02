'use client'

import { type FC } from 'react'

import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import styles from '../Footer.module.css'

import { useScopedI18n } from '@/locales/client'

interface FooterLinksProps {
	className?: string
}

const FooterLinks: FC<FooterLinksProps> = ({ className }) => {
	const tF = useScopedI18n('footer')

	return (
		<div className={clsx(styles.linkInfo, className)}>
			<Link className={styles.link} href={'/'}>
				{tF('policyData')}
			</Link>
			<Link className={styles.link} href={'/'}>
				{tF('policyPrivacy')}
			</Link>
			<Link className={styles.link} href={'https://t.me/nerp_vpn_support'} newTab>
				{tF('supports')}
			</Link>
			{/* <Link className={styles.link} href={'/'}>
				{tF('tgChanel')}
			</Link> */}
		</div>
	)
}

export default FooterLinks
