import { motion } from 'framer-motion'
import type { FC, SVGProps } from 'react'

interface WaveLayerProps {
	Icon: FC<SVGProps<SVGSVGElement>>
	delay: number
	duration: number
	top: string
	zIndex: number
	reversed?: boolean
}

// 파도 레이어 컴포넌트
const WaveLayer: FC<WaveLayerProps> = ({ Icon, delay, duration, top, zIndex, reversed = false }) => (
	<motion.div
		className='absolute left-0 w-[200%] flex items-end'
		style={{
			top: top,
			bottom: 'bottom',
			zIndex: zIndex,
			scale: 3,
		}}
		initial={{ x: reversed ? '-50%' : '0%' }}
		animate={{ x: reversed ? '0%' : '-50%' }}
		transition={{
			repeat: Infinity,
			duration: duration,
			ease: 'linear',
			delay: delay,
		}}
	>
		{/* 가로 무한 반복을 위해 2개 배치 */}
		<div className='w-1/2 h-full relative'>
			<Icon className='w-full h-auto absolute top-0 left-0' />
			<div className='w-full h-full bg-current absolute top-[99%] left-0'></div>
		</div>
		<div className='w-1/2 h-full relative'>
			<Icon className='w-full h-auto absolute top-0 left-0' />
			<div className='w-full h-full bg-current absolute top-[99%] left-0'></div>
		</div>
	</motion.div>
)

export default WaveLayer
