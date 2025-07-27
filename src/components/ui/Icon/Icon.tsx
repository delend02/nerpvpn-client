'use client'

import { type FC, useEffect, useState } from 'react'

import { clsx } from '@/utils/clsx'

import styles from './Icon.module.css'

import { AirLineIconNames, IconProps, UIIconNames } from './Icon.types'
import * as AirLineIcons from './data/airLine.data'
import * as UIIcons from './data/ui.data'

export const Icon: FC<IconProps> = ({ type, airLineType, size, className, title }) => {
	const [options, setOptions] = useState<{ icons: any; type: any; enum: any }>({
		icons: type ? UIIcons : airLineType ? AirLineIcons : null,
		type: type || airLineType || null,
		enum: type ? UIIconNames : airLineType ? AirLineIconNames : null,
	})

	useEffect(() => {
		if (type) {
			return setOptions({ icons: UIIcons, type, enum: UIIconNames })
		}

		if (airLineType) {
			return setOptions({ icons: AirLineIcons, type: airLineType, enum: AirLineIconNames })
		}
	}, [type, airLineType])

	if (!options.icons || !options.type || !options.enum) return null

	const IconComponent = options.icons?.[options.enum?.[options.type.toUpperCase()]]

	if (!IconComponent) return null

	return (
		<div
			className={clsx(styles.icon, { [styles.currentColor]: !airLineType }, className)}
			style={!size ? { height: 24 } : { height: size }}
			title={title}
		>
			<IconComponent />
		</div>
	)
}
