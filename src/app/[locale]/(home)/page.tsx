import { DE, FI, FR, NL, RU, US } from 'country-flag-icons/react/3x2'
import Image from 'next/image'

import Logo from '@/components/Layouts/NavLayout/components/Header/components/Logo/Logo'

import { Badge } from '@/ui/Badge/Badge'
import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import styles from './HomePage.module.css'

import { getScopedI18n } from '@/locales/server'

const advantages = [
	{ key: 'safeNetwork', icon: '🌐' },
	{ key: 'maximumSpeed', icon: '🚀' },
	{ key: 'youtube4k', icon: '📺' },
	{ key: 'ease', icon: '🧠' },
	{ key: 'traffic', icon: '♾️' },
]

export default async function Page() {
	const tH = await getScopedI18n('pages.home')
	const tB = await getScopedI18n('ui.button')

	return (
		<div className={styles.page}>
			<section className={clsx(styles.section, styles.section_1)}>
				<h1 className={styles.title}>
					Ваш лучший выбор свободного интернета —
					<span>NerpVPN</span>
				</h1>

				<Button className={styles.blueButton}>
					Получить 1 день бесплатно
					<Icon type="arrow_top_right" size={12} />
				</Button>
			</section>

			<section className={clsx(styles.section, styles.section_2)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Работает на всех устройствах</h2>
					<div className={styles.subtitle}>Подходит для любых задач — от работы до развлечений</div>
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
					{tH('section_3.title')} <Logo className="!w-[200px] tb:!w-[300px] ds:!w-[400px]" />
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
				<h2 className={styles.title}>Как подключиться</h2>

				<div className={styles.items}>
					<div className={styles.left}>
						<div className={styles.leftWrapper}>
							<div className={styles.leftTitle}>VPN за 1 минуту</div>
							<span>Работает на iOS, Android, Windows, macOS, Linux, TV</span>
						</div>

						<div>
							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>Шаг 1</div>
								<div className={styles.leftText}>
									Запустите{' '}
									<Link className={styles.leftLink} href={'/'}>
										Telegram-бота
									</Link>
								</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>Шаг 2</div>
								<div className={styles.leftText}>Выберите тариф и оплатите</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>yle 3</div>
								<div className={styles.leftText}>Зайдите в личный кабинет</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>Шаг 4</div>
								<div className={styles.leftText}>Подключитесь — всё готово</div>
							</div>
						</div>

						<Button className={styles.blueButton}>
							Получить 1 день бесплатно
							<Icon type="arrow_top_right" size={12} />
						</Button>
					</div>
					<div className={styles.right}>
						<div className={styles.rightPhone}>
							<Image src="/img/phone-bg.webp" width={440} height={900} alt="" />
							<div className={styles.rightContent} />
						</div>
					</div>
				</div>
			</section>

			<section className={clsx(styles.section, styles.blue, styles.section_5)}>
				<h2 className={styles.title}>Надёжный VPN — по цене чашки кофе</h2>
			</section>

			<section className={clsx(styles.section, styles.section_6)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>{tH('section_6.title')}</h2>
					<div className={styles.subtitle}>{tH('section_6.subtitle')}</div>
				</div>

				<div className={styles.badges}>
					<Badge className={styles.badge}>
						<US className={styles.flag} title="us" />
						{tH('section_6.country.us')}
					</Badge>
					<Badge className={styles.badge}>
						<DE className={styles.flag} title="de" />
						{tH('section_6.country.de')}
					</Badge>
					<Badge className={styles.badge}>
						<FR className={styles.flag} title="fr" />
						{tH('section_6.country.fr')}
					</Badge>
					<Badge className={styles.badge}>
						<NL className={styles.flag} title="nl" />
						{tH('section_6.country.nl')}
					</Badge>
					<Badge className={styles.badge}>
						<FI className={styles.flag} title="fi" />
						{tH('section_6.country.fi')}
					</Badge>
					<Badge className={styles.badge}>
						<RU className={styles.flag} title="ru" />
						{tH('section_6.country.ru')}
					</Badge>
				</div>

				<Button className={styles.blueButton}>
					{tB('connectVpn')} <Icon type="arrow_top_right" size={12} />
				</Button>
			</section>

			<section className={clsx(styles.section, styles.section_7)}>
				<h2 className={styles.title}>Отзывы наших клиентов</h2>
			</section>

			<section className={clsx(styles.section, styles.blue, styles.section_8)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Бесплатный день использования VPN</h2>
					<div>Испытайте все преимущества сервиса без ограничений и обязательств</div>
				</div>
			</section>

			<div className={styles.wrapper}>
				<section className={clsx(styles.section, styles.section_9)}>
					<h2 className={styles.title}>Часто задаваемые вопросы</h2>
				</section>
			</div>
		</div>
	)
}
