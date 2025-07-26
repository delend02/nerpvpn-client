import type { FC, PropsWithChildren } from 'react'

import styles from './NavLayout.module.css'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

interface NavLayoutProps extends PropsWithChildren {}

export const NavLayout: FC<NavLayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<Header />
				<main className={styles.content}>{children}</main>
			</div>

			<Footer />
		</div>
	)
}
