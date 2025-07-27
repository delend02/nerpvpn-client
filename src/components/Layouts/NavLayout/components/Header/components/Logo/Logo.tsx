import type { FC } from 'react'

import Image from 'next/image'

import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import styles from './Logo.module.css'

interface LogoProps {
	isWhite?: boolean
	className?: string
}

const Logo: FC<LogoProps> = ({ isWhite, className }) => {
	return (
		<div className={clsx(styles.wrapper)}>
			<Link href="/">
				<Image
					src={isWhite ? '/img/logo/logo-white.svg' : '/img/logo/logo.svg'}
					className={clsx(styles.logo, className)}
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
