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

export const unbounded = localFont({
	src: [
		{ path: './Unbounded/Unbounded-ExtraLight.ttf', weight: '200', style: 'normal' },
		{ path: './Unbounded/Unbounded-Light.ttf', weight: '300', style: 'normal' },
		{ path: './Unbounded/Unbounded-Regular.ttf', weight: '400', style: 'normal' },
		{ path: './Unbounded/Unbounded-Medium.ttf', weight: '500', style: 'normal' },
		{ path: './Unbounded/Unbounded-SemiBold.ttf', weight: '600', style: 'normal' },
		{ path: './Unbounded/Unbounded-Bold.ttf', weight: '700', style: 'normal' },
		{ path: './Unbounded/Unbounded-ExtraBold.ttf', weight: '800', style: 'normal' },
		{ path: './Unbounded/Unbounded-Black.ttf', weight: '900', style: 'normal' },
	],
	variable: '--font-unbounded',
	display: 'swap',
})
