import { useState } from 'react'
import TextArea from '@/components/common/TextArea'
import { FilledButton } from '@/components/common/button'

import WaveIcon from '@/assets/icons/onboarding/wave.svg' // 경로 맞춰줘

export default function WritePage() {
	const [text, setText] = useState('')

	const handleSubmit = () => {
		if (!text.trim()) return
		console.log('작성 내용:', text)
	}

	return (
		<div className='min-h-screen bg-main-500 text-white relative overflow-hidden'>
			<div className='absolute bottom-0 left-0 w-full z-0 pointer-events-none'>
				<img
					src={WaveIcon}
					alt='Wave'
					draggable={false}
					className='block w-full h-auto blur-2xl opacity-70 translate-y-[25%]'
				/>
				<div className='absolute inset-x-0 bottom-0 h-24 bg-main-500 from-white/10 to-transparent' />
			</div>

			<div className='relative z-10 px-4 pt-20'>
				<div className='mt-6 flex justify-center'>
					<div className='w-full'>
						<TextArea value={text} onChange={setText} placeholder='Text Something' maxLength={200} height={420} />

						<div className='mt-5'>
							<FilledButton label='보내기' onClick={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
