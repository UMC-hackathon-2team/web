import { FilledButton } from '@/components/common/button'
import BlurSection from '@/components/animation/BlurSection'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import OnboardingLogo from '@/assets/icons/onboarding/onboardingLogo.svg'
import WaveIcon from '@/assets/icons/onboarding/wave.svg'

const STORY_TEXTS = [
	'감정마다\n작동되는 방식이 다릅니다.\n기쁨은 나누면 커지고\n분노는 표현하면 가라앉습니다.',
	'하지만\n슬픔은 다릅니다.\n설명할수록 무거워지고,\n말하지 않으면 오래 남습니다.',
	'그래서 슬픔을 다루는 방식을\n다르게 생각해보았습니다.',
	'To sea는\n슬픔을 해결하지 않습니다.',
	'슬픔이 머무르지 않도록\n흘려 보내러 가기 ',
]

export default function OnboardingPage() {
	const navigate = useNavigate()

	return (
		<div className='bg-main-500 text-white overflow-y-auto scrollbar-hide'>
			<section className='h-screen flex flex-col items-center justify-center relative  overflow-x-hidden overflow-y-visible'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='z-20 mb-32'
				>
					<img src={OnboardingLogo} alt='To Sea Logo' className='w-full px-8' />
				</motion.div>

				{/* 파도 영역: 확대 및 하단 배치 */}
				<motion.div className='absolute bottom-[-10%] left-0 w-full z-10 pointer-events-none'>
					<img src={WaveIcon} alt='Wave' className='block w-full h-auto translate-y-[30%]' draggable={false} />
				</motion.div>
			</section>

			<div className='relative z-20 flex flex-col items-center pt-30'>
				{STORY_TEXTS.map((text, index) => (
					<BlurSection key={index}>
						<div className='py-4'>
							{' '}
							{/* 글귀 간격 조절: 숫자를 줄이면 더 밀착됩니다 */}
							<p className='text-center text-[18px] font-semibold font-pretendard leading-[160%] whitespace-pre-line px-6'>
								{/* "To sea"가 포함된 문장만 특별하게 처리 */}
								{text.includes('To sea는') ? (
									<>
										<span className='text-[28px] font-bold'>To sea는</span>
										{text.replace('To sea는', '')}
									</>
								) : (
									text
								)}
							</p>
						</div>
					</BlurSection>
				))}
			</div>

			<section className='flex flex-col items-center justify-center px-2 relative z-20 py-20'>
				<FilledButton label='슬픔 작성하기' onClick={() => navigate('/')} />
			</section>
		</div>
	)
}
