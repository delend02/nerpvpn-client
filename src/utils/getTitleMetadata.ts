import { getByKeyString } from './getByKeyString'
import { DEFAULT_LOCALE, dictionaryLocaleForMetaData } from '@/locales/config'

export const getTitleMetadata = ({
	locale,
	title,
}: {
	locale: string | undefined
	title: null | string
}) => {
	if (!title) return 'Nerp VPN'

	return `${getByKeyString(dictionaryLocaleForMetaData(locale || DEFAULT_LOCALE), title) || title} - Nerp VPN`
}
