'use client'

import type { FC } from 'react'

import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import { useDevice } from '@/config/providers/device'

import styles from './Navigation.module.css'

import { useScopedI18n } from '@/locales/client'

interface NavigationProps {
	isFooter?: boolean
	className?: string
}

interface NavItemProps {
	title: string
	href: string
	active?: boolean
	isFooter?: boolean
}

const NavItem: FC<NavItemProps> = ({ href, title, active, isFooter }) => {
	return (
		<Link
			href={href}
			onClick={(e) => handleClick(e, href)}
			className={clsx(styles.link, { [styles.active]: active, [styles.white]: isFooter })}
		>
			{title}
		</Link>
	)
}

export const handleClick = (e: React.MouseEvent, href: string) => {
	e.preventDefault()
	const id = href.replace('#', '')
	const el = document.getElementById(id)
	if (el) {
		const y = el.getBoundingClientRect().top + window.pageYOffset - 120
		window.scrollTo({ top: y, behavior: 'smooth' })
	}
}


const Navigation: FC<NavigationProps> = ({ isFooter, className }) => {
	const t = useScopedI18n('nav')
	const { isTablet } = useDevice()

	return (
		<div className={clsx(styles.wrapper, className)}>
			{(!isTablet || isFooter) && (
				<NavItem isFooter={isFooter} title={t('advantages')} href="#advantages" />
			)}
			<NavItem isFooter={isFooter} title={t('connect')} href="#connect" />
			<NavItem isFooter={isFooter} title={t('tariffs')} href="#tariffs" />
			<NavItem isFooter={isFooter} title={t('reviews')} href="#reviews" />
			<NavItem isFooter={isFooter} title={t('faq')} href="#faq" />
		</div>
	)
}

export default Navigation
