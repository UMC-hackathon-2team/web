import { motion, AnimatePresence } from 'framer-motion'
import CloseIcon from '@/assets/icons/modal/Close.svg?react'

interface AITextModalProps {
	title: string
	text: string
	isOpen?: boolean
	onClose?: () => void
}

const AITextModal = ({ title, text, isOpen = true, onClose }: AITextModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* 오버레이 배경 */}
					<motion.div
						className='fixed inset-0 bg-white/2 bg-opacity-50 backdrop-blur-sm z-40'
						onClick={onClose}
						initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
						animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
						exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
						transition={{ duration: 0.2 }}
					/>

					{/* 모달 컨테이너 */}
					<div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
						<motion.div
							className='bg-white rounded-12 p-6 pointer-events-auto flex flex-col'
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
						>
							{/* x 버튼*/}
							<div className='flex justify-end'>
								<CloseIcon className='cursor-pointer w-[13.5] h-[13.5] p-[5.4]' onClick={onClose} />
							</div>

							{/* 1줄 요약 (타이틀) */}
							<div className='body-1 font-bold my-4 text-start'>{title}</div>

							{/* 콘텐츠 */}
							<div className='body-1 w-60 h-70 text-start bg-main-50 p-3 rounded-12'>{text}</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	)
}

export default AITextModal
