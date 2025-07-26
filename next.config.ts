import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'standalone',
	// swcMinify: true,
	reactStrictMode: false,
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY', // Блокирует загрузку в iframe на других доменах
					},
					{
						key: 'Content-Security-Policy',
						value: "frame-ancestors 'self';", // Разрешает загрузку в iframe только на том же домене
					},
				],
			},
		]
	},
}

export default nextConfig
