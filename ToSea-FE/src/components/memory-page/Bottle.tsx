import { motion } from 'framer-motion'
import BottleIcon from '@/assets/icons/common/bottles/Bottle1.svg?react'

interface BottleProps {
	className?: string
	delay: number
	duration: number
	scale?: number
	onClick?: () => void
}

// 유리병 컴포넌트
const Bottle = ({ className, delay, duration, scale = 1, onClick }: BottleProps) => (
	<motion.div
		className={`absolute ${className}`}
		animate={{
			y: ['0%', '-10%', '0%'], // 둥실둥실
			rotate: [-5, 5, -5], // 갸우뚱
		}}
		transition={{
			repeat: Infinity,
			duration: duration,
			ease: 'easeInOut',
			delay: delay,
		}}
		style={{ transform: `scale(${scale})` }}
		onClick={onClick}
	>
		<BottleIcon className='w-[58px] h-[90px] drop-shadow-lg opacity-90' />
	</motion.div>
)

export default Bottle
