import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BlurSection({ children }: { children: React.ReactNode }) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'], // 요소가 화면 하단에 보일 때부터 상단으로 나갈 때까지
	})

	// 상단으로 올라갈수록(scrollYProgress가 0.5를 넘어서 1로 갈수록) 효과 적용
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0])
	const blur = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(12px)'])
	const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

	return (
		<motion.div ref={ref} style={{ opacity, filter: blur, y }} className='min-h-[40vh] flex items-center justify-center px-8'>
			{children}
		</motion.div>
	)
}
