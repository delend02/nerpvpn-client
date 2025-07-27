export enum UIIconNames {
	ANDROID = 'Android',
	ARROW_TOP_RIGHT = 'ArrowTopRight',
	ARROW_TOP = 'ArrowTop',
	IOS = 'IOS',
	MAC = 'Mac',
	WINDOWS = 'Windows',
	ANDROID_TV = 'AndroidTv',
	LINUX = 'Linux',
}

export enum AirLineIconNames {
	'5N' = 'SmartAvia',
	SMART_AVIA = 'SmartAvia',
	//
	SU = 'Aeroflot',
	AEROFLOT = 'Aeroflot',
	//
	U6 = 'Ural',
	URAL = 'Ural',
	//
	N4 = 'NordWind',
	NORD_WIND = 'NordWind',
	//
	'6R' = 'Alrosa',
	ALROSA = 'Alrosa',
	//
	S7 = 'S7',
	//
	R3 = 'Yakutia',
	YAKUTIA = 'Yakutia',
	//
	DP = 'Pobeda',
	POBEDA = 'Pobeda',
	//
	B2 = 'BelAvia',
	BEL_AVIA = 'BelAvia',
	//
	UT = 'Utair',
	UTAIR = 'Utair',
	//
	DEFAULT = 'Default',
}

export interface IconProps {
	type: IconNameType
	/**
	 *  default 24px
	 */
	size?: number
	className?: string
	title?: string
	isCurrentColor?: boolean
}

export type IconNameType = Lowercase<keyof typeof UIIconNames>
