import React from 'react'
import { motion } from 'framer-motion'
// SVG 경로가 맞는지 확인해주세요
import BottleWithLetterIcon from '@/assets/icons/common/bottles/BottleWithLetter.svg?react'
import FilledButton from '@/components/common/button/FilledButton'

interface SparkleProps {
	top: string
	left: string
	delay: number
	size: number
}

const Sparkle: React.FC<SparkleProps> = ({ top, left, delay, size }) => {
	return (
		<motion.div
			className='absolute rounded-full'
			style={{
				top,
				left,
				width: `${size}px`,
				height: `${size}px`,
				// ★ 핵심 수정: 반딧불이 그라데이션 효과
				// 중심(0%): 밝은 흰색/노란색
				// 중간(40%): 진한 노란색/금색
				// 끝(100%): 투명
				background: 'radial-gradient(closest-side, rgba(255,255,230,1) 0%, rgba(255,215,0,0.6) 40%, transparent 100%)',
				// 빛 번짐(Glow) 효과 추가
				boxShadow: '0 0 10px 2px rgba(253, 224, 71, 0.3)',
			}}
			initial={{ opacity: 0, scale: 0 }}
			animate={{
				opacity: [0, 1, 0.5, 1, 0], // 깜빡이는 느낌을 불규칙하게
				scale: [0, 1.2, 0.8, 1, 0], // 크기도 살짝씩 변함
			}}
			transition={{
				duration: 4, // 조금 더 천천히 깜빡이도록 수정
				repeat: Infinity,
				delay,
				ease: 'easeInOut',
			}}
		/>
	)
}

const BottleOpenPage = () => {
	const sparkles: SparkleProps[] = [
		{ top: '15%', left: '10%', delay: 0, size: 24 }, // 사이즈를 조금 키우면 그라데이션이 더 잘 보입니다
		{ top: '25%', left: '85%', delay: 0.5, size: 18 },
		{ top: '70%', left: '15%', delay: 1, size: 22 },
		{ top: '80%', left: '80%', delay: 1.5, size: 14 },
		{ top: '40%', left: '90%', delay: 2, size: 20 },
		// 몇 개 더 추가하면 풍성해 보입니다
		{ top: '10%', left: '50%', delay: 2.5, size: 16 },
		{ top: '60%', left: '60%', delay: 3, size: 25 },
	]

	return (
		<div className='relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#3d4d99] to-[#2b3a80] flex flex-col items-center justify-center'>
			{/* 반짝이는 반딧불이들 */}
			{sparkles.map((sparkle, index) => (
				<Sparkle key={index} {...sparkle} />
			))}

			{/* 가로선 잔물결 효과 */}
			<div className='absolute inset-0 z-0 opacity-10 pointer-events-none'>
				<motion.div
					className='w-full h-1 bg-white absolute top-1/4'
					animate={{ x: ['-100%', '100%'] }}
					transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
				/>
				<motion.div
					className='w-full h-0.5 bg-white absolute top-1/2'
					animate={{ x: ['100%', '-100%'] }}
					transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
				/>
				<motion.div
					className='w-full h-1 bg-white absolute top-3/4'
					animate={{ x: ['-100%', '100%'] }}
					transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
				/>
			</div>

			{/* 중앙 유리병 with 편지 */}
			<motion.div
				className='relative z-10 mb-20'
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<motion.div
					animate={{
						y: [-5, 5, -5],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<BottleWithLetterIcon className='w-48 h-auto drop-shadow-2xl' />
				</motion.div>

				{/* 병 주변 빛 효과 (여기도 따뜻한 색으로 변경) */}
				<motion.div
					className='absolute inset-0 -z-10'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					style={{
						background: 'radial-gradient(circle, rgba(255, 236, 179, 0.5) 0%, transparent 70%)',
						filter: 'blur(30px)',
					}}
				/>
			</motion.div>

			{/* 즉시열어보기 버튼 */}
			<motion.div
				className='absolute bottom-20 z-20'
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				<FilledButton label='즉시열어보기' onClick={() => console.log('병 열기')} className='px-16 py-4 text-lg' />
			</motion.div>
		</div>
	)
}

export default BottleOpenPage
