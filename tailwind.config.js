import { heroui } from '@heroui/react'

import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,html}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: '#080025', // Темно-синий фон
				transparent: 'transparent',
				gray: {
					1: '#F5F6FA', // Светло-серый фон
					2: '#DADCE5', // Цвет для линий
					3: '#9CA3AF', // Вторичный текст
					4: '#F7F6F6', // Третичный текст
				},
				blue: {
					DEFAULT: '#131DE4', // Основной синий
					light: '#45ABFF', // Светлый градиентный синий
				},
				red: '#FF4D4F', // Ошибка
				green: '#22C55E', // Успех
			},
			fontSize: {
				s_h1: [
					'2.625rem',
					{
						fontWeight: '500',
						lineHeight: '105%',
					},
				],
				s_h2: [
					'2rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_h3: [
					'1.75rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_h4: [
					'1.5rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_h5: [
					'1.25rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_body: [
					'1rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_text: [
					'0.875rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_caption: [
					'0.75rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_button: [
					'0.625rem',
					{
						fontWeight: '600',
						lineHeight: '120%',
					},
				],
				s_captionM: [
					'0.625rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_captionS: [
					'0.5rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_captionXS: [
					'0.438rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
				s_detail: [
					'0.375rem',
					{
						fontWeight: '500',
						lineHeight: '120%',
					},
				],
			},
			backgroundImage: {
				'blue-gradient': 'linear-gradient(90deg, #45ABFF 0%, #131DE4 100%)',
			},
			fontWeight: {
				w_regular: '400',
				w_medium: '500',
				w_semiBold: '600',
				w_bold: '700',
				w_extraBold: '800',
			},
			screens: {
				tb: '768px',
				ds: '1024px',
			},
			transitionProperty: {
				all2: 'color, background-color, border-color, border-radius, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, width, height, margin, padding',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			keyframes: {
				shake: {
					'10%, 90%': {
						transform: 'translate3d(-1px, 0, 0)',
					},
					'20%, 80%': {
						transform: 'translate3d(2px, 0, 0)',
					},
					'30%, 50%, 70%': {
						transform: 'translate3d(-4px, 0, 0)',
					},
					'40%, 60%': {
						transform: 'translate3d(4px, 0, 0)',
					},
				},
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				slideDown: {
					from: { transform: ' translateY(-15px)' },
					to: { transform: 'translateY(0)' },
				},
				slideUp: {
					from: { transform: ' translateY(100%)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				removeDown: {
					from: { transform: 'translateY(0)', opacity: '1' },
					to: { transform: ' translateY(100%)', opacity: '0' },
				},
				mountIcon: {
					'0%': {
						opacity: '0',
						transform: 'scaleX(1) scaleY(0.6) translateX(0px) translateY(5px)',
					},
					'50%': { transform: 'scale(1.2)' },
					'100%': {
						opacity: '1',
						transform: 'scaleX(1) scaleY(1) translateX(0px) translateY(3px)',
					},
				},
				slideDownAndFade: {
					from: { opacity: '0', transform: 'translateY(-2px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				slideLeftAndFade: {
					from: { opacity: '0', transform: 'translateX(2px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				slideUpAndFade: {
					from: { opacity: '0', transform: 'translateY(2px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				slideRightAndFade: {
					from: { opacity: '0', transform: 'translateX(-2px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				appearance: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				shake: 'shake .5s ease-in-out infinite',
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
				mountIcon: 'mountIcon .5s ease-in-out',
				slideDown: 'slideDown .35s ease-in-out',
				slideUp: 'slideUp .35s ease-in-out',
				removeDown: 'removeDown .35s ease-in-out',

				slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				appearance: 'appearance 500ms cubic-bezier(0.1, -0.6, 0.2, 0)',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('tailwindcss-touch')(),
		heroui(),
		plugin(({ addComponents, addUtilities, theme }) => {
			addComponents({
				'.container': {
					paddingLeft: '1rem',
					paddingRight: '1rem',
					width: '100%',
					maxWidth: 'calc(1320px + 1rem + 1rem)',
					marginLeft: 'auto',
					marginRight: 'auto',
					transition: 'all .2s ease-in-out',
					[`@media (min-width: ${theme('screens.tb')}) and (max-width: ${theme('screens.ds')})`]: {
						paddingLeft: '2rem',
						paddingRight: '2rem',
						maxWidth: 'calc(1320px + 2rem + 2rem)',
					},
					[`@media (min-width: ${theme('screens.ds')})`]: {
						paddingLeft: '3rem',
						paddingRight: '3rem',
						maxWidth: 'calc(1320px + 3rem + 3rem)',
					},
				},

				'.spaceForScrollbar': {
					scrollbarGutter: 'stable',
				},

				'.lightScrollbar': {
					'&::-webkit-scrollbar-track': {
						'@apply bg-white': '',
					},
					'&::-webkit-scrollbar-thumb': {
						'@apply bg-gray-4/30': '',
					},
				},

				'.disableScrollingOutside': {
					overscrollBehavior: 'contain',
				},

				'.ellipsis': {
					display: 'block',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},

				'.ellipsis-start': {
					display: 'block',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					direction: 'rtl',
					textAlign: 'left',
				},
			})
			addUtilities({
				'.font-sf-pro': {
					fontFamily: 'var(--font-sf-pro)',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
				'.text-balance': {
					textWrap: 'balance',
				},
				'.text-capitalizeFirst': {
					'&:first-letter': {
						textTransform: 'uppercase',
					},
				},
			})
		}),
	],
}
