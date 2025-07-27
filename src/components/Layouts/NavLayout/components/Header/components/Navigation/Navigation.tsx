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
			className={clsx(styles.link, { [styles.active]: active, [styles.white]: isFooter })}
		>
			{title}
		</Link>
	)
}

const Navigation: FC<NavigationProps> = ({ isFooter, className }) => {
	const t = useScopedI18n('nav')

	return (
		<div className={clsx(styles.wrapper, className)}>
			<NavItem isFooter={isFooter} title={t('advantages')} href="#advantages" />
			<NavItem isFooter={isFooter} title={t('connect')} href="#connect" />
			<NavItem isFooter={isFooter} title={t('tariffs')} href="#tariffs" />
			<NavItem isFooter={isFooter} title={t('reviews')} href="#reviews" />
			<NavItem isFooter={isFooter} title={t('faq')} href="#faq" />
		</div>
	)
}

export default Navigation
