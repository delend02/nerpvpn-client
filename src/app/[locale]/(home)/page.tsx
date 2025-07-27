import Logo from '@/components/Layouts/NavLayout/components/Header/components/Logo/Logo'

import { Badge } from '@/ui/Badge/Badge'
import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'

import { clsx } from '@/utils/clsx'

import styles from './HomePage.module.css'

import { getScopedI18n } from '@/locales/server'

export default async function Page() {
	const tH = await getScopedI18n('pages.home')

	const advantages = [
		{ key: 'safeNetwork', icon: '🌐' },
		{ key: 'maximumSpeed', icon: '🚀' },
		{ key: 'youtube4k', icon: '📺' },
		{ key: 'ease', icon: '🧠' },
		{ key: 'traffic', icon: '♾️' },
	]

	return (
		<div className={styles.page}>
			<section className={clsx(styles.section, styles.section_1)}>
				<h1 className={styles.title}>
					Ваш лучший выбор свободного интернета —
					<span>NerpVPN</span>
				</h1>

				<Button className={styles.button}>
					Получить 1 день бесплатно
					<Icon type="arrow_top_right" size={12} />
				</Button>
			</section>

			<section className={clsx(styles.section, styles.section_2)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Работает на всех устройствах</h2>
					<div>Подходит для любых задач — от работы до развлечений</div>
				</div>

				<div className={styles.badges}>
					<Badge icon="android">Android</Badge>
					<Badge icon="ios">IOS</Badge>
					<Badge icon="windows">Windows</Badge>
					<Badge icon="mac" iconClassName="rounded-lg">
						MacOs
					</Badge>
					<Badge icon="android_tv" iconSize={18} title="Android TV" />
					<Badge icon="linux">Linux</Badge>
				</div>
			</section>

			<section className={clsx(styles.section, styles.section_3)}>
				<h2 className={clsx(styles.title, 'flex tb:flex-row flex-col tb:items-end gap-5')}>
					{tH('section_3.title')} <Logo className="!w-[240px]" />
				</h2>
				<div className={styles.advantagesContainer}>
					{advantages.map(({ key, icon }) => (
						<div key={key} className={clsx(styles.advantageContent, styles[key])}>
							<div className={styles.advantageTitle}>
								{/* @ts-ignore  */}
								<h3 className="font-bold">{tH(`section_3.titles.${key}`)}</h3>
								<div className={styles.advantageIcon}>{icon}</div>
							</div>
							{/* @ts-ignore  */}
							<span className={styles.advantageSubtitle}>{tH(`section_3.subtitles.${key}`)}</span>
						</div>
					))}
				</div>
			</section>
			<section className={clsx(styles.section, styles.section_4)}>
				<h2>Как подключиться</h2>
			</section>
		</div>
	)
}
