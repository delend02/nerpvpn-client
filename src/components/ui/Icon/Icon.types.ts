export enum UIIconNames {
	AERO_EXPRESS = 'AeroExpress',
	ARROW_TOP_RIGHT = 'ArrowTopRight',
	ARROW_TOP = 'ArrowTop',
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

interface PreIconProps {
	/**
	 *  default 24px
	 */
	size?: number
	className?: string
	title?: string
}

export type IconNameType = Lowercase<keyof typeof UIIconNames>

interface UIIconProps extends PreIconProps {
	type: IconNameType
	airLineType?: never
}

export type AirLineIconType = Lowercase<keyof typeof AirLineIconNames>
interface AirLineIconProps extends PreIconProps {
	airLineType: AirLineIconType
	type?: never
}

export type IconProps = UIIconProps | AirLineIconProps
