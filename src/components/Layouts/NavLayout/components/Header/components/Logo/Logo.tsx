import type { FC } from 'react'

import Image from 'next/image'

import { Link } from '@/ui/Link/Link'

import styles from './Logo.module.css'

interface LogoProps {
	isWhite?: boolean
}

const Logo: FC<LogoProps> = ({ isWhite }) => {
	return (
		<div className={styles.wrapper}>
			<Link href="/">
				<Image
					src={isWhite ? '/img/logo/logo-white.svg' : '/img/logo/logo.svg'}
					className={styles.logo}
					alt="Nerp VPN"
					width={220}
					height={40}
					priority
					draggable={false}
				/>
			</Link>
		</div>
	)
}

export default Logo
