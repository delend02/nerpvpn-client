import { title } from 'process'

export default {
	ui: {
		burgerMenu: {},
		button: {
			buyVpn: 'Купить VPN',
			up: 'Наверх',
			connectVpn: 'Подключить VPN',
		},
		input: {},
		time: {},

		emptyOrError: {},
	},
	utils: {},
	routes: {},
	nav: {
		advantages: 'Преимущества',
		connect: 'Как подключиться',
		tariffs: 'Тарифы',
		reviews: 'Отзывы',
		faq: 'FAQ',
	},
	footer: {
		policyData: 'Политика обработки персональных данных',
		policyPrivacy: 'Публичная оферта',
		supports: 'Служба поддержки',
		tgChanel: 'Telegram канал',
		allRightsProtected: 'NERP VPN © {year}. Все права защищены.',
	},

	pages: {
		home: {
			section_3: {
				title: 'Преимущества',
				titles: {
					safeNetwork: 'Полная свобода в сети',
					maximumSpeed: 'Максимум скорости',
					youtube4k: 'YouTube в 4K без реклам',
					ease: 'Простота',
					traffic: 'Безлимитный трафик',
				},
				subtitles: {
					safeNetwork:
						'Без лишнего контроля, без слежки — только защищённое соединение между вами и интернетом.',
					maximumSpeed: 'Неважно, что ты делаешь — всё грузится быстро и без подвисаний.',
					youtube4k: 'Наслаждайтесь любимыми видео в высочайшем качестве без пауз и прерываний.',
					ease: 'Включи и пользуйся. Настолько просто, что даже объяснять нечего.',
					traffic:
						'VPN позволяет пользоваться интернетом без лимитов и квот — сколько нужно и когда угодно.',
				},
			},

			section_6: {
				title: 'Доступные локации',
				subtitle:
					'Выбирайте сервер из нашего списка и наслаждайтесь стабильным, быстрым и надёжным интернет-соединением с максимальным комфортом.',
				country: {
					us: 'США',
					ru: 'Россия',
					de: 'Германия',
					fr: 'Франция',
					nl: 'Нидерланды',
					fi: 'Финляндия',
				},
			},
		},
		sign_in: {},
		error: {},
		not_authed: {},
	},
	error: {
		status: {},
	},
} as const
