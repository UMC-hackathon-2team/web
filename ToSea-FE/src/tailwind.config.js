// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				sea: {
					deep: '#2E3B83', // 가장 깊은 배경색 (상단)
					dark: '#4A6FA5', // 중간 파도색
					mid: '#8AA6D1', // 밝은 파도색
					light: '#CED6F2', // 가장 밝은 파도색 (흰색에 가까운)
					bottom: '#1A1F45', // 하단 깊은 바다색
				},
			},
			animation: {
				'float-slow': 'float 6s ease-in-out infinite',
				'float-medium': 'float 5s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(2deg)' },
				},
			},
		},
	},
	plugins: [],
}
