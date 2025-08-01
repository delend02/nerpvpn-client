'use client'

import { type FC, useEffect } from 'react'

import { Select, SelectItem } from '@heroui/react'
import { GB, RU } from 'country-flag-icons/react/3x2'

import { clsx } from '@/utils/clsx'
import { getCurrentDir } from '@/utils/isRTL'

import { useDevice } from '@/config/providers/device'

import styles from './Language.module.css'

import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { LocaleType, fullLocales } from '@/locales/config'

interface LanguageProps {
	withoutTitle?: boolean
}

const FlagIcon: FC<{ locale: LocaleType; className: string }> = ({ locale, className }) => {
	if (locale === 'en') return <GB title="English" className={className} />
	if (locale === 'ru') return <RU title="Russian" className={className} />

	return null
}

const ItemLanguage: FC<{ lang: string; title: string; withoutTitle?: boolean }> = ({
	title,
	lang,
	withoutTitle,
}) => {
	return (
		<div className={clsx(styles.itemFlag, 'text-s_body')}>
			<FlagIcon locale={lang as LocaleType} className={styles.icon} />
			{!withoutTitle && title}
		</div>
	)
}

const Language: FC<LanguageProps> = ({ withoutTitle }) => {
	const currentLocale = useCurrentLocale()
	const changeLocale = useChangeLocale()

	useEffect(() => {
		document.documentElement.dir = getCurrentDir(currentLocale)
	}, [currentLocale])

	return (
		<Select
			className={clsx(styles.select, { ['!w-20']: withoutTitle })}
			selectedKeys={[currentLocale]}
			items={fullLocales}
			renderValue={(items) => (
				<ItemLanguage
					withoutTitle={withoutTitle}
					lang={items[0].data?.key as LocaleType}
					title={items[0].data?.title as string}
				/>
			)}
		>
			{(item) => (
				<SelectItem
					key={item.key}
					textValue={item.title}
					onClick={() => changeLocale(item.key as any)}
				>
					<ItemLanguage withoutTitle={withoutTitle} lang={item.key} title={item.title} />
				</SelectItem>
			)}
		</Select>
	)
}

export default Language
