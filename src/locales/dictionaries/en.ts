import { title } from 'process'

export default {
	ui: {
		burgerMenu: {},
		button: {
			buyVpn: 'Купить VPN',
			up: 'Наверх',
			connectVpn: 'Подключить VPN',
			tryVpn: 'Попробовать',
			tryTrial: 'Получить 1 день бесплатно',
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
			section_1: {
				title: 'Ваш лучший выбор свободного интернета —',
				titleSpan: 'NerpVPN',
			},
			section_2: {
				title: 'Работает на всех устройствах',
				subtitle: 'Подходит для любых задач — от работы до развлечений',
			},
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
			section_4: {
				title: 'Как подключиться',
				titleInstructions: 'VPN за 1 минуту',
				subtitleInstructions: 'Работает на iOS, Android, Windows, macOS, Linux, TV',

				step_1: {
					name: 'Шаг 1',
					title: 'Запустите',
					titleSpan: 'Telegram-бота',
				},
				step_2: {
					name: 'Шаг 2',
					title: 'Выберите тариф и оплатите',
				},
				step_3: {
					name: 'Шаг 3',
					title: 'Зайдите в личный кабинет',
				},
				step_4: {
					name: 'Шаг 4',
					title: 'Подключитесь — всё готово',
				},
			},
			section_5: {
				title: 'Надёжный VPN — по цене чашки кофе',

				tariffs: {
					month1: {
						days: '1 месяц',
						economy: '0% Экономия',
						name: 'Тестовый',
						price: '199 ₽',
						pricePerDay: '~6,6 ₽ в день',
					},
					month3: {
						days: '3 месяца',
						economy: '7% Экономия',
						name: 'Оптимальный',
						price: '560 ₽',
						pricePerDay: '~6,2 ₽ в день',
					},
					month6: {
						days: '6 месяцев',
						economy: '20% Экономия',
						name: 'Максимум',
						price: '990 ₽',
						pricePerDay: '~5,5 ₽ в день',
					},
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
			section_7: {
				title: 'Отзывы наших клиентов',
			},
			section_8: {
				title: 'Бесплатный день использования VPN',
				subtitle: 'Испытайте все преимущества сервиса без ограничений и обязательств',
			},
			section_9: {
				title: 'Часто задаваемые вопросы',
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
