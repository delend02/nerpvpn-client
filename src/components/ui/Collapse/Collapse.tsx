import { type FC, PropsWithChildren } from 'react'

import { clsx } from '@/utils/clsx'

import styles from './Collapse.module.css'

interface CollapseProps extends PropsWithChildren {
	show: boolean
	horizontal?: boolean
	className?: string
}

export const Collapse: FC<CollapseProps> = ({ show, horizontal, className, children }) => {
	return (
		<div
			className={clsx(
				styles.collapse,
				{ [styles.horizontal]: horizontal },
				{ [styles.show]: show },
				className
			)}
		>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
