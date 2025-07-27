import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'

import styles from './HomePage.module.css'

export default async function Page() {
	return (
		<div className={styles.page}>
			<div className={styles.section_1}>
				{/*  */}
				<h1 className={styles.title}>
					Ваш лучший выбор свободного интернета —
					<div>NerpVPN</div>
				</h1>

				<Button className={styles.button}>
					Получить 1 день бесплатно
					<Icon type="arrow_top_right" size={12} />
				</Button>
			</div>
		</div>
	)
}
