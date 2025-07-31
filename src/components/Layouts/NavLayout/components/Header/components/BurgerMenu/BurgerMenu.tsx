import { Dispatch, type FC, SetStateAction, useEffect } from 'react'

import { Drawer, DrawerBody, DrawerContent } from '@heroui/react'
import { usePathname } from 'next/navigation'

import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'

import styles from './BurgerMenu.module.css'

import FooterLinks from '../../../Footer/component/FooterLinks'
import Navigation from '../Navigation/Navigation'

import BurgerButton from './components/BurgerButton'
import { useScopedI18n } from '@/locales/client'

interface BurgerMenuProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
	const tB = useScopedI18n('ui.button')

	useEffect(() => {
		const handleHashChange = () => {
			if (isOpen) {
				setIsOpen(false)
			}
		}

		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return (
		<div className={styles.wrapper}>
			<Button isIconOnly className={styles.button} onClick={() => setIsOpen((v) => !v)}>
				<BurgerButton isOpen={isOpen} />
			</Button>
			<Drawer
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				placement="top"
				size="full"
				hideCloseButton
				backdrop="transparent"
				isDismissable={false}
				classNames={{
					wrapper: 'z-10',
				}}
				motionProps={{
					initial: 'exit',
					animate: 'enter',
					exit: 'exit',
					variants: {
						enter: {
							opacity: 1,
							y: 0,
							scaleY: 1,
							transition: { duration: 0.2, ease: 'easeOut' },
							transformOrigin: 'top center',
						},
						exit: {
							opacity: 0,
							y: 15,
							scaleY: 0,
							transition: { duration: 0.2, ease: 'easeIn' },
							transformOrigin: 'top center',
						},
					},
				}}
			>
				<DrawerContent>
					<DrawerBody className={styles.drawerBody}>
						<div className={styles.content}>
							<Navigation className={styles.navigation} isBurger />
							<Button
								className={styles.button}
								endContent={<Icon type="arrow_top_right" size={12} />}
							>
								{tB('buyVpn')}
							</Button>
						</div>
						<FooterLinks className={styles.links} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default BurgerMenu
