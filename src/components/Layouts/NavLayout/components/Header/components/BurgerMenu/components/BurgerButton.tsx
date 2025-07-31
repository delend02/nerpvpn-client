import { type FC } from 'react'

import { motion } from 'framer-motion'

interface BurgerButtonProps {
	isOpen: boolean
}

const lineVariants = {
	closed: { rotate: 0, y: 0, opacity: 1 },
	openTop: { rotate: 45, y: 7 },
	openMiddle: { opacity: 0 },
	openBottom: { rotate: -45, y: -7 },
}

const BurgerButton: FC<BurgerButtonProps> = ({ isOpen }) => {
	return (
		<div
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			style={{
				width: 20,
				height: 20,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 5,
				background: 'transparent',
				border: 'none',
				cursor: 'pointer',
				padding: 0,
			}}
		>
			<motion.span
				style={{
					display: 'block',
					height: 2,
					backgroundColor: '#fff',
					borderRadius: 2,
				}}
				variants={lineVariants}
				animate={isOpen ? 'openTop' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.span
				style={{
					display: 'block',
					height: 2,
					width: 15,
					backgroundColor: '#fff',
					borderRadius: 2,
					marginLeft: 'auto',
				}}
				variants={lineVariants}
				animate={isOpen ? 'openMiddle' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
			<motion.span
				style={{
					display: 'block',
					height: 2,
					backgroundColor: '#fff',
					borderRadius: 2,
				}}
				variants={lineVariants}
				animate={isOpen ? 'openBottom' : 'closed'}
				transition={{ duration: 0.3 }}
			/>
		</div>
	)
}

export default BurgerButton
