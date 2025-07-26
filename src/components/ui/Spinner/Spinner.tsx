import type { FC } from 'react'

import { clsx } from '@/utils/clsx'

interface SpinnerProps {
	size?: number
	center?: boolean
	hFull?: boolean
	className?: string
	currentColor?: boolean
}

export const Spinner: FC<SpinnerProps> = ({
	size = 50,
	center,
	hFull,
	className,
	currentColor,
}) => {
	return (
		<div
			className={clsx(
				'animate-fade shrink-0',
				{ ['flex-center-center']: center },
				{ ['h-full']: hFull },
				className
			)}
		>
			<svg
				viewBox="0 0 100 100"
				width={size}
				height={size}
				style={{ shapeRendering: 'geometricPrecision' }}
				className="animate-spin"
			>
				<circle
					cx="50"
					cy="50"
					fill="none"
					stroke={currentColor ? 'currentColor' : '#caccd1'}
					strokeWidth="8"
					r="35"
					strokeDasharray="164.93361431346415 56.97787143782138"
					transform="matrix(1,0,0,1,0,0)"
				/>
			</svg>
		</div>
	)
}
