import { FC, MouseEventHandler, PropsWithChildren } from 'react'

import LinkNext from 'next/link'
import type { UrlObject } from 'url'

import { clsx } from '@/utils/clsx'

import styles from './Link.module.css'

type LinkProps = PropsWithChildren & {
	title?: string
	disabled?: boolean
	style?: 'white' | 'dark'
	className?: string
	onClick?: MouseEventHandler<HTMLSpanElement>
	href?: string | UrlObject
	scroll?: true
	replace?: boolean
	file?: string
	newTab?: boolean
	tabIndex?: number
}

export const Link: FC<LinkProps> = ({
	title,
	href,
	onClick,
	scroll = false,
	replace = false,
	style = 'dark',
	className = '',
	disabled,
	children,
	file,
	newTab,
	...props
}) => {
	return (
		<LinkNext
			title={title}
			href={href || file || ''}
			onClick={
				!onClick
					? undefined
					: (e) => {
							if (!disabled) {
								if (!href && !file) e.preventDefault()
								onClick?.(e)
							}
						}
			}
			scroll={scroll}
			replace={replace}
			className={clsx(styles.link, className, { [styles.disabled]: !!disabled }, [styles[style]])}
			target={file || newTab ? '_blank' : undefined}
			rel={file || newTab ? 'noopener noreferrer' : undefined}
			{...props}
			tabIndex={disabled ? -1 : undefined}
			aria-disabled={disabled}
		>
			{children}
		</LinkNext>
	)
}
