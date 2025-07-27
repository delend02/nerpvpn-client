import { type FC } from 'react'

import { clsx } from '@/utils/clsx'

import styles from './Icon.module.css'

import { IconProps, UIIconNames } from './Icon.types'
import * as UIIcons from './data/ui.data'

export const Icon: FC<IconProps> = ({ type, size, className, title, isCurrentColor }) => {
	if (!type) return null

	// @ts-ignore
	const IconComponent = UIIcons?.[UIIconNames?.[type.toUpperCase()]]

	if (!IconComponent) return null

	return (
		<div
			className={clsx(styles.icon, { [styles.currentColor]: isCurrentColor }, className)}
			style={!size ? { height: 24 } : { height: size }}
			title={title}
		>
			<IconComponent />
		</div>
	)
}
