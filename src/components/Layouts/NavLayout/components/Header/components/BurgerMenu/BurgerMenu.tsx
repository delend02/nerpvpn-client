import { type FC, useState } from 'react'

import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@heroui/react'
import { Menu } from 'lucide-react'

import { Button } from '@/ui/Button/Button'

import styles from './BurgerMenu.module.css'

interface BurgerMenuProps {}

const BurgerMenu: FC<BurgerMenuProps> = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Button isIconOnly className={styles.button} onClick={() => setIsOpen((v) => !v)}>
				<Menu className="text-white" />
			</Button>
			<Drawer
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				// closeButton={<></>}
				placement="bottom"
				size="full"
			>
				<DrawerContent>
					<>
						<DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
						<DrawerBody>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
								risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
								quam.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
								risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
								quam.
							</p>
							<p>
								Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
								adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
								officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
								nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
								deserunt nostrud ad veniam.
							</p>
						</DrawerBody>
						<DrawerFooter></DrawerFooter>
					</>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default BurgerMenu
