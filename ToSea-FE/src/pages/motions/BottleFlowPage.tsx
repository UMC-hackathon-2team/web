import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Transition } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// SVG 파일 Import (Vite/SVGR 형식)
import BottleIcon from '@/assets/icons/common/bottles/BottleWithLetter.svg?react'

// --- 타입 정의 ---

// 1. 잔물결 Props
interface RippleProps {
	id: number
	top: string
	left: string
	scale: number
	onComplete: (id: number) => void
}

// 2. onUpdate에서 받을 애니메이션 값들의 타입 정의
interface AnimationValues {
	top: string
	left: string
	scale: number
}

// --- 가로선 잔물결 이펙트 컴포넌트 ---
const HorizontalRippleEffect: React.FC<RippleProps> = ({ id, top, left, scale, onComplete }) => {
	const ripples = [0, 1, 2]

	useEffect(() => {
		const timer = setTimeout(() => {
			onComplete(id)
		}, 2000)
		return () => clearTimeout(timer)
	}, [id, onComplete])

	return (
		<div
			className='absolute pointer-events-none'
			style={{
				top: top,
				left: left,
				transform: 'translate(200%, $50 * scale}px)',
				zIndex: 0,
			}}
		>
			{ripples.map(index => (
				<motion.div
					key={index}
					className='absolute bg-white/40 rounded-full'
					style={{
						height: `${4 * scale}px`,
						width: `${120 * scale}px`, // 너비를 좀 더 넓게 설정 (선택사항)
						top: '50%',
						left: '50%',
						x: '-50%',
						y: '-50%',
					}}
					initial={{ scaleX: 0.5, opacity: 0 }}
					animate={{
						scaleX: [0.5, 6 * scale], // 더 넓게 퍼지도록 설정 (선택사항)
						opacity: [0.6, 0],
					}}
					transition={{
						duration: 1.5,
						ease: 'easeOut',
						delay: index * 0.2,
					}}
				/>
			))}
		</div>
	)
}

// --- 메인 병 이동 컴포넌트 ---
const BottleFlowPage: React.FC = () => {
	const navigate = useNavigate()

	// 애니메이션 경로 데이터
	const path = {
		top: ['15%', '35%', '60%', '85%'],
		left: ['20%', '80%', '20%', '80%'],
		scale: [0.4, 0.7, 1.1, 1.8],
	}

	const journeyTransition: Transition = {
		duration: 12,
		ease: 'easeInOut',
		repeat: 0,
		repeatDelay: 1,
		times: [0, 0.33, 0.66, 1],
	}

	const [ripples, setRipples] = useState<RippleProps[]>([])
	const rippleCount = useRef(0)
	const lastTriggeredIndex = useRef<number>(-1)

	const handleRippleComplete = (id: number) => {
		setRipples(prev => prev.filter(ripple => ripple.id !== id))
	}

	const handleUpdate = (latest: AnimationValues) => {
		const currentTop = parseFloat(latest.top)
		const currentLeft = parseFloat(latest.left)
		const currentScale = latest.scale

		path.top.forEach((goalTopStr, index) => {
			if (index === lastTriggeredIndex.current) return

			const goalTop = parseFloat(goalTopStr)
			const goalLeft = parseFloat(path.left[index])

			const isClose = Math.abs(currentTop - goalTop) < 1.5 && Math.abs(currentLeft - goalLeft) < 1.5

			if (isClose) {
				setRipples(prev => [
					...prev,
					{
						id: rippleCount.current++,
						top: latest.top,
						left: latest.left,
						scale: currentScale,
						onComplete: handleRippleComplete,
					},
				])

				lastTriggeredIndex.current = index

				if (index === path.top.length - 1) {
					setTimeout(() => {
						lastTriggeredIndex.current = -1
					}, 2000)
				}
			}
		})
	}

	return (
		<div className='relative w-full h-screen overflow-hidden bg-[#2b3a80] flex items-center justify-center'>
			<AnimatePresence>
				{ripples.map(ripple => (
					<HorizontalRippleEffect key={ripple.id} {...ripple} />
				))}
			</AnimatePresence>

			<motion.div
				className='absolute z-10 flex items-center justify-center'
				animate={{
					top: path.top,
					left: path.left,
					scale: path.scale,
				}}
				transition={journeyTransition}
				onUpdate={latest => handleUpdate(latest as unknown as AnimationValues)}
				onAnimationComplete={() => {
					setTimeout(() => {
						navigate('/bottle-open')
					}, 1000)
				}}
			>
				<motion.div
					animate={{
						rotate: [-10, 10, -10],
						y: [-10, 10, -10],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className='relative z-10'
				>
					<BottleIcon className='w-20 h-auto drop-shadow-2xl' />
					{/* 물 표면 효과 - 병 중간에 가로선 */}
					<div className='absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent z-20' />
					{/* 물 아래 부분 오버레이 */}
					<div className='absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-[#2b3a80]/50 to-[#2b3a80]/85 z-10 rounded-b-lg' />
				</motion.div>
			</motion.div>

			<div className='absolute inset-0 z-0 opacity-10 pointer-events-none'>
				<motion.div
					className='w-full h-2 bg-white absolute top-1/4'
					animate={{ x: ['-100%', '100%'] }}
					transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
				/>
				<motion.div
					className='w-full h-1 bg-white absolute top-3/4'
					animate={{ x: ['100%', '-100%'] }}
					transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
				/>
			</div>
		</div>
	)
}

export default BottleFlowPage
