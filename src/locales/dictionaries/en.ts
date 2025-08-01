export default {
	ui: {
		button: {
			buyVpn: 'Buy VPN',
			up: 'Back to top',
			connectVpn: 'Connect VPN',
			tryVpn: 'Try it',
			tryTrial: 'Get 1 day free',
		},
	},
	nav: {
		advantages: 'Advantages',
		connect: 'How to connect',
		tariffs: 'Plans',
		reviews: 'Reviews',
		faq: 'FAQ',
	},
	footer: {
		policyData: 'Personal Data Processing Policy',
		policyPrivacy: 'Public Offer',
		supports: 'Support Service',
		tgChanel: 'Telegram Channel',
		allRightsProtected: 'NERP VPN © {year}. All rights reserved.',
	},

	pages: {
		home: {
			section_1: {
				title: 'Your best choice for internet freedom —',
				titleSpan: 'NerpVPN',
			},
			section_2: {
				title: 'Works on all devices',
				subtitle: 'Suitable for everything — from work to entertainment',
			},
			section_3: {
				title: 'Advantages',
				titles: {
					safeNetwork: 'Complete network freedom',
					maximumSpeed: 'Maximum speed',
					youtube4k: 'YouTube in 4K without ads',
					ease: 'Simplicity',
					traffic: 'Unlimited traffic',
				},
				subtitles: {
					safeNetwork:
						'No excessive control, no tracking — just a secure connection between you and the internet.',
					maximumSpeed: 'Whatever you do — everything loads fast and without lags.',
					youtube4k: 'Enjoy your favorite videos in top quality without pauses or interruptions.',
					ease: 'Turn it on and use it. So simple it needs no explanation.',
					traffic:
						'VPN lets you use the internet without limits or quotas — as much as you need, whenever you want.',
				},
			},
			section_4: {
				title: 'How to connect',
				titleInstructions: 'VPN in 1 minute',
				subtitleInstructions: 'Works on iOS, Android, Windows, macOS, Linux, TV',

				step_1: {
					name: 'Step 1',
					title: 'Launch the',
					titleSpan: 'Telegram bot',
				},
				step_2: {
					name: 'Step 2',
					title: 'Choose a plan and pay',
				},
				step_3: {
					name: 'Step 3',
					title: 'Log in to your account',
				},
				step_4: {
					name: 'Step 4',
					title: 'Connect — you’re all set',
				},
			},
			section_5: {
				title: 'Reliable VPN — for the price of a cup of coffee',

				tariffs: {
					month1: {
						days: '1 month',
						economy: '0% Savings',
						name: 'Trial',
						price: '199 ₽',
						pricePerDay: '~6.6 ₽ per day',
					},
					month3: {
						days: '3 months',
						economy: '7% Savings',
						name: 'Optimal',
						price: '560 ₽',
						pricePerDay: '~6.2 ₽ per day',
					},
					month6: {
						days: '6 months',
						economy: '20% Savings',
						name: 'Maximum',
						price: '990 ₽',
						pricePerDay: '~5.5 ₽ per day',
					},
				},
			},
			section_6: {
				title: 'Available locations',
				subtitle:
					'Choose a server from our list and enjoy a stable, fast, and reliable internet connection with maximum comfort.',
				country: {
					us: 'USA',
					ru: 'Russia',
					de: 'Germany',
					fr: 'France',
					nl: 'Netherlands',
					fi: 'Finland',
				},
			},
			section_7: {
				title: 'What our customers say',
			},
			section_8: {
				title: 'One day of free VPN access',
				subtitle: 'Experience all the benefits of the service with no limits or commitments',
			},
			section_9: {
				title: 'Frequently Asked Questions',

				faq: [
					{
						question: 'What does a VPN do?',
						answer: 'A VPN allows you to access the internet without limits or quotas.',
					},
					{
						question: 'How does a VPN work?',
						answer: 'VPN works on mobile devices, tablets, PCs, TVs, game consoles, and more.',
					},
					{
						question: 'Can I use VPN on all devices?',
						answer: 'Yes, VPN can be used on all your devices.',
					},
					{
						question: 'Is VPN secure?',
						answer: 'Yes, VPN is a reliable and secure service.',
					},
					{
						question: 'How can I connect to VPN?',
						answer: 'You can connect to the VPN through our Telegram bot.',
					},
					{
						question: 'Can I cancel my subscription at any time?',
						answer: 'Yes, you can cancel your subscription at any time.',
					},
					{
						question: 'What is the price of VPN?',
						answer: 'The price depends on the plan you choose.',
					},
				],
			},
		},
	},
} as const
