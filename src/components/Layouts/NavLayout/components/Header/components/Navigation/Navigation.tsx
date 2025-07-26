'use client'

import type { FC } from 'react'

import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import { useDevice } from '@/config/providers/device'

import styles from './Navigation.module.css'

import { useScopedI18n } from '@/locales/client'

interface NavigationProps {}

interface NavItemProps {
	title: string
	href: string
	active?: boolean
}

const NavItem: FC<NavItemProps> = ({ href, title, active }) => {
	return (
		<Link href={href} className={clsx(styles.link, { [styles.active]: active })}>
			{title}
		</Link>
	)
}

const Navigation: FC<NavigationProps> = () => {
	const t = useScopedI18n('nav')
	const { isTablet } = useDevice()

	return (
		<div className={clsx(styles.wrapper)}>
			{!isTablet && <NavItem title={t('advantages')} href="#advantages" />}
			<NavItem title={t('connect')} href="#connect" />
			<NavItem title={t('tariffs')} href="#tariffs" />
			<NavItem title={t('reviews')} href="#reviews" />
			<NavItem title={t('faq')} href="#faq" />
		</div>
	)
}

export default Navigation
