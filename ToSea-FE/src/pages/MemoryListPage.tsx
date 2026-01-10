import { useState } from 'react'
import TextModal from '@/components/common/modal/TextModal'

// 파도 & 아이콘 Import
import Wave1Icon from '@/assets/icons/common/waves/Wave1.svg?react'
import Wave2Icon from '@/assets/icons/common/waves/Wave2.svg?react'
import Wave3Icon from '@/assets/icons/common/waves/Wave3.svg?react'
import Wave4Icon from '@/assets/icons/common/waves/Wave4.svg?react'
import Wave5Icon from '@/assets/icons/common/waves/Wave5.svg?react'
import Wave6Icon from '@/assets/icons/common/waves/Wave6.svg?react'
import Wave7Icon from '@/assets/icons/common/waves/Wave7.svg?react'
import Wave8Icon from '@/assets/icons/common/waves/Wave8.svg?react'
import WaveLayer from '@/components/memory-page/WaveLayer'
import Bottle from '@/components/memory-page/Bottle'

const SeaScene = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	// 파도 레이어 설정 배열
	const waveLayers = [
		{ Icon: Wave1Icon, top: '30%', zIndex: 10, duration: 30, delay: 0, reversed: false },
		{ Icon: Wave2Icon, top: '40%', zIndex: 20, duration: 35, delay: -5, reversed: true },
		{ Icon: Wave3Icon, top: '50%', zIndex: 30, duration: 20, delay: -3, reversed: false },
		{ Icon: Wave4Icon, top: '55%', zIndex: 40, duration: 30, delay: -7, reversed: true },
		{ Icon: Wave5Icon, top: '60%', zIndex: 50, duration: 33, delay: -2, reversed: false },
		{ Icon: Wave6Icon, top: '75%', zIndex: 60, duration: 29, delay: -6, reversed: true },
		{ Icon: Wave7Icon, top: '80%', zIndex: 70, duration: 31, delay: -4, reversed: false },
		{ Icon: Wave8Icon, top: '85%', zIndex: 80, duration: 34, delay: -8, reversed: true },
	]

	// 병 설정 배열
	const bottles = [
		{ className: 'top-[36%] right-[12%] z-25', scale: 0.75, delay: 1.2, duration: 5.5 },
		{ className: 'top-[52%] left-[8%] z-35', scale: 0.8, delay: 0.8, duration: 5 },
		{ className: 'top-[60%] right-[15%] z-56', scale: 0.85, delay: 1.5, duration: 4.5 },
		{ className: 'top-[75%] left-[22%] z-80', scale: 0.95, delay: 1.8, duration: 4.8 },
		{ className: 'top-[85%] right-[29%] z-82', scale: 1, delay: 1, duration: 5.2 },
	]

	return (
		<div className='relative w-full h-screen overflow-hidden flex flex-col bg-main-500'>
			{/* 파도 레이어 렌더링 */}
			{waveLayers.map((wave, index) => (
				<WaveLayer
					key={`wave-${index}`}
					Icon={wave.Icon}
					top={wave.top}
					zIndex={wave.zIndex}
					duration={wave.duration}
					delay={wave.delay}
					reversed={wave.reversed}
				/>
			))}

			{/* 유리병 렌더링 */}
			{bottles.map((bottle, index) => (
				<Bottle
					key={`bottle-${index}`}
					className={bottle.className}
					scale={bottle.scale}
					delay={bottle.delay}
					duration={bottle.duration}
					onClick={() => setIsModalOpen(true)}
				/>
			))}

			{/* 다른사람 일기 모달 */}
			{isModalOpen && (
				<>
					<TextModal text='아죽겟당ㅜㅜ' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
				</>
			)}
		</div>
	)
}

export default SeaScene
