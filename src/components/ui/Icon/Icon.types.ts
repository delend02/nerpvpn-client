export enum UIIconNames {
	ANDROID = 'Android',
	ARROW_TOP_RIGHT = 'ArrowTopRight',
	ARROW_TOP = 'ArrowTop',
	IOS = 'IOS',
	MAC = 'Mac',
	WINDOWS = 'Windows',
	ANDROID_TV = 'AndroidTv',
	LINUX = 'Linux',
	PLUS = 'Plus',
	MINUS = 'Minus',
	NETWORK = 'Network',
	STAR = 'Star',
	CHATGPT = 'ChatGPT',
	YOUTUBE = 'Youtube',
	DISCORD = 'Discord',
	NETWORK_IPHONE = 'NetworkIphone',
	ROCKET_IPHONE = 'RocketIphone',
	TV_IPHONE = 'TvIphone',
	BRAIN_IPHONE = 'BrainIphone',
	INFINITY_IPHONE = 'InfinityIphone',
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
