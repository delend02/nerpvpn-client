import type { FC, PropsWithChildren } from 'react'

import { clsx } from '@/utils/clsx'

import { Icon } from '../Icon/Icon'
import { IconNameType } from '../Icon/Icon.types'

interface BadgeProps extends PropsWithChildren {
	title?: string
	icon?: IconNameType
	iconSize?: number
	iconClassName?: string
	className?: string
}

export const Badge: FC<BadgeProps> = ({
	className,
	title,
	icon,
	iconSize,
	iconClassName,
	children,
}) => {
	return (
		<div
			className={clsx('flex-center-center gap-2 bg-white rounded-full p-4', className)}
			title={typeof children === 'string' ? children : title}
		>
			{!!icon && <Icon type={icon} size={iconSize || 24} className={iconClassName} />}
			{children}
		</div>
	)
}
