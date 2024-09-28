/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx,css}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},

				'purple-color': '#a07eff',
				'light-purple-color': '#e3cfe2',
				'light-pink-color': '#f6f1ff',
				'pink-color': '#ffe4ff',
				'light-color': '#fffafe',
				'gray-color': '#696969',
				'light-gray-color': '#ADADAD',
			},
			backgroundImage: {
				'purple-light-gradient':
					'linear-gradient(180deg, #ffe6ff 0%, #fffafe 50.89%)',
				'purple-red-gradient':
					'linear-gradient(90deg, #a07eff 0%, #ff7ea5 100%);',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
