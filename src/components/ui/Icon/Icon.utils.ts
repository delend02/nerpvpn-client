import { AirLineIconNames } from './Icon.types'

export const getAirLineIcon = (code: string) => {
	switch (code.toUpperCase()) {
		case '5N':
			return AirLineIconNames.SMART_AVIA
		case 'SU':
			return AirLineIconNames.AEROFLOT
		case 'U6':
			return AirLineIconNames.URAL
		case 'N4':
			return AirLineIconNames.NORD_WIND
		case '6R':
			return AirLineIconNames.ALROSA
		case 'S7':
			return AirLineIconNames.S7
		case 'R3':
			return AirLineIconNames.YAKUTIA
		case 'DP':
			return AirLineIconNames.POBEDA
		case 'B2':
			return AirLineIconNames.BEL_AVIA
		case 'UT':
			return AirLineIconNames.UTAIR
		default:
			return AirLineIconNames.DEFAULT
	}
}
