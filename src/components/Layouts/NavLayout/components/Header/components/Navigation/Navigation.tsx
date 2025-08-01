'use client'

import type { FC } from 'react'

import { Link } from '@heroui/react'

import { clsx } from '@/utils/clsx'

import { useDevice } from '@/config/providers/device'

import styles from './Navigation.module.css'

import { useScopedI18n } from '@/locales/client'

interface NavigationProps {
	isFooter?: boolean
	isBurger?: boolean
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
			className={clsx(styles.link, {
				[styles.active]: active,
				[styles.white]: isFooter,
				[styles.black]: !isFooter,
			})}
		>
			{title}
		</Link>
	)
}

const Navigation: FC<NavigationProps> = ({ isFooter, className, isBurger }) => {
	const t = useScopedI18n('nav')
	const { isTablet } = useDevice()

	return (
		<div className={clsx(styles.wrapper, className, { [styles.burger]: isBurger })}>
			{(!isTablet || isFooter) && (
				<NavItem isFooter={isFooter} title={t('advantages')} href="#advantages" />
			)}
			{isBurger && <hr className={styles.separator} />}
			<NavItem isFooter={isFooter} title={t('connect')} href="#connect" />
			{isBurger && <hr className={styles.separator} />}
			<NavItem isFooter={isFooter} title={t('tariffs')} href="#tariffs" />
			{isBurger && <hr className={styles.separator} />}
			<NavItem isFooter={isFooter} title={t('reviews')} href="#reviews" />
			{isBurger && <hr className={styles.separator} />}
			<NavItem isFooter={isFooter} title={t('faq')} href="#faq" />
		</div>
	)
}

export default Navigation
