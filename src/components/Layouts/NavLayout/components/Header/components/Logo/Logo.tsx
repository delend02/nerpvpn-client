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
					alt="NerpVPNLogo"
					width={160}
					height={160}
					priority
					draggable={false}
				/>
			</Link>
		</div>
	)
}

export default Logo
