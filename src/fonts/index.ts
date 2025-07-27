import localFont from 'next/font/local'

export const sfProDisplay = localFont({
	src: [
		{ path: './SFProDisplay/SF-Pro-Display-Black.otf', weight: '900', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Bold.otf', weight: '700', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Semibold.otf', weight: '600', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Medium.otf', weight: '500', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Regular.otf', weight: '400', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Light.otf', weight: '300', style: 'normal' },
		{ path: './SFProDisplay/SF-Pro-Display-Thin.otf', weight: '200', style: 'normal' },
	],
	variable: '--font-sf-pro',
	display: 'swap',
})

export const benzinBold = localFont({
	src: './BenzinBold/benzin-bold.otf',
	variable: '--font-benzin-bold',
	display: 'swap',
})
