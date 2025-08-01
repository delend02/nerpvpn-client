import { DE, FI, FR, NL, RU, US } from 'country-flag-icons/react/3x2'
import Image from 'next/image'

import { Badge } from '@/ui/Badge/Badge'
import { Button } from '@/ui/Button/Button'
import { Icon } from '@/ui/Icon/Icon'
import { Link } from '@/ui/Link/Link'

import { clsx } from '@/utils/clsx'

import styles from './HomePage.module.css'
import 'keen-slider/keen-slider.min.css'

import Question from './_components/Question/Question'
import Review from './_components/Review/Review'
import { getScopedI18n } from '@/locales/server'

const advantages = [
	{ key: 'safeNetwork', icon: '🌐' },
	{ key: 'maximumSpeed', icon: '🚀' },
	{ key: 'youtube4k', icon: '📺' },
	{ key: 'ease', icon: '🧠' },
	{ key: 'traffic', icon: '♾️' },
]

const tariffs = [
	{ key: 'month1', isTop: false, isEconomy: false },
	{ key: 'month3', isTop: true, isEconomy: true },
	{ key: 'month6', isTop: false, isEconomy: true },
]

export default async function Page() {
	const tH = await getScopedI18n('pages.home')
	const tB = await getScopedI18n('ui.button')

	return (
		<div className={styles.page}>
			<section className={clsx(styles.section, styles.section_1)}>
				<h1 className={styles.title}>
					{tH('section_1.title')}
					<span>{tH('section_1.titleSpan')}</span>
				</h1>

				<Button
					className={clsx(styles.button, styles.blueButton)}
					isExternal
					href="https://t.me/nerp_vpn_bot"
					endContent={<Icon type="arrow_top_right" size={12} />}
				>
					{tB('tryTrial')}
				</Button>
				<div
					style={{ animationDelay: '0.8s' }}
					className={clsx(styles.icon, 'right-[20%] bottom-[60%]')}
				>
					<Icon size={40} type="discord" />
				</div>
				<div
					style={{ animationDelay: '0s' }}
					className={clsx(styles.icon, 'right-[35%] bottom-[30%]')}
				>
					<Icon size={36} type="youtube" />
				</div>
				<div
					style={{ animationDelay: '1.2s' }}
					className={clsx(styles.icon, 'right-[10%] bottom-[25%]')}
				>
					<Icon size={46} type="chatgpt" />
				</div>
			</section>

			<section className={clsx(styles.section, styles.section_2)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>{tH('section_2.title')}</h2>
					<div className={styles.subtitle}>{tH('section_2.subtitle')}</div>
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

			<section id="advantages" className={clsx(styles.section, styles.section_3)}>
				<h2
					className={clsx(
						styles.title,
						'flex tb:flex-row items-center flex-col tb:items-end gap-5'
					)}
				>
					{tH('section_3.title')}
					{/* <Logo className="!w-[140px] tb:!w-[300px] ds:!w-[400px]" /> */}
				</h2>
				<div className={styles.advantagesContainer}>
					{advantages.map(({ key, icon }) => (
						<div key={key} className={clsx(styles.advantageContent, styles[key])}>
							<div className={styles.advantageTitle}>
								{/* @ts-ignore  */}
								<h3 className={styles.title}>{tH(`section_3.titles.${key}`)}</h3>
								<div className={styles.advantageIcon}>{icon}</div>
							</div>
							{/* @ts-ignore  */}
							<span className={styles.advantageSubtitle}>{tH(`section_3.subtitles.${key}`)}</span>
						</div>
					))}
				</div>
			</section>

			<section id="connect" className={clsx(styles.section, styles.section_4)}>
				<h2 className={styles.title}>{tH('section_4.title')}</h2>

				<div className={styles.items}>
					<div className={styles.left}>
						<div className={styles.leftWrapper}>
							<div className={styles.title}>{tH('section_4.titleInstructions')}</div>
							<span className={styles.subtitle}>{tH('section_4.subtitleInstructions')}</span>
						</div>

						<div>
							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>{tH('section_4.step_1.name')}</div>
								<div className={styles.leftText}>
									{tH('section_4.step_1.title')}{' '}
									<Link className={styles.leftLink} href={'/'}>
										{tH('section_4.step_1.titleSpan')}
									</Link>
								</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>{tH('section_4.step_2.name')}</div>
								<div className={styles.leftText}>{tH('section_4.step_2.title')}</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>{tH('section_4.step_3.name')}</div>
								<div className={styles.leftText}>{tH('section_4.step_3.title')}</div>
							</div>

							<div className={styles.leftItem}>
								<div className={styles.leftBadge}>{tH('section_4.step_4.name')}</div>
								<div className={styles.leftText}>{tH('section_4.step_4.title')}</div>
							</div>
						</div>

						<Button
							className={clsx(styles.button, styles.blueButton)}
							isExternal
							href="https://t.me/nerp_vpn_bot"
							endContent={<Icon type="arrow_top_right" size={12} />}
						>
							{tB('connectVpn')}
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

			<section id="tariffs" className={clsx(styles.section, styles.blue, styles.section_5)}>
				<h2 className={styles.title}>{tH('section_5.title')}</h2>

				<div className={styles.tariffs}>
					{tariffs.map((tariff) => {
						const tariffKey = tariff.key
						// @ts-ignore
						const days = tH(`section_5.tariffs.${tariffKey}.days`) // @ts-ignore
						const economy = tH(`section_5.tariffs.${tariffKey}.economy`) // @ts-ignore
						const name = tH(`section_5.tariffs.${tariffKey}.name`) // @ts-ignore
						const price = tH(`section_5.tariffs.${tariffKey}.price`) // @ts-ignore
						const pricePerDay = tH(`section_5.tariffs.${tariffKey}.pricePerDay`)

						return (
							<div key={tariffKey} className={clsx(styles.tariff, { [styles.top]: tariff.isTop })}>
								{tariff.isTop && <Badge className={styles.topBadge}>🔥 Хит продаж</Badge>}
								<div className={styles.tariffHeader}>
									<Badge className={styles.badge}>
										<Icon type="network" size={16} /> {days}
									</Badge>
									<span
										className={clsx(styles.economy, { ['text-blue-gradient']: tariff.isEconomy })}
									>
										{economy}
									</span>
								</div>
								<span className={styles.tariffName}>{name}</span>
								<div className={styles.borderedLine} />
								<div>
									<span className={styles.price}>{price}/</span>{' '}
									<span className={styles.pricePerDay}>{pricePerDay}</span>
								</div>
								<Button
									className={clsx(styles.button, styles.blueButton)}
									isExternal
									href="https://t.me/nerp_vpn_bot"
									endContent={<Icon type="arrow_top_right" size={12} />}
								>
									{tB('buyVpn')}
								</Button>
							</div>
						)
					})}
				</div>
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

				<Button
					className={clsx(styles.button, styles.blueButton)}
					isExternal
					href="https://t.me/nerp_vpn_bot"
					endContent={<Icon type="arrow_top_right" size={12} />}
				>
					{tB('connectVpn')}
				</Button>
			</section>

			<section id="reviews" className={clsx(styles.section, styles.section_7)}>
				<h2 className={styles.title}>{tH('section_7.title')}</h2>
				<Review />
				<div className={styles.review}></div>
			</section>

			<section className={clsx(styles.section, styles.blue, styles.section_8)}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>{tH('section_8.title')}</h2>
					<div className={styles.subtitle}>{tH('section_8.subtitle')}</div>
				</div>

				<Button
					className={clsx(styles.button, styles.whiteButton)}
					isExternal
					href="https://t.me/nerp_vpn_bot"
					endContent={<Icon type="arrow_top_right" size={12} />}
				>
					{tB('tryVpn')}
				</Button>
			</section>

			<section id="faq" className={clsx(styles.section, styles.section_9)}>
				<h2 className={styles.title}>{tH('section_9.title')}</h2>
				<Question />
			</section>
		</div>
	)
}
