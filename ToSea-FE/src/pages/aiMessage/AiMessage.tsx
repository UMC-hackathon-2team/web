import { FilledButton, OutlinedButton } from '@/components/common/button'
import { useNavigate } from 'react-router'
import AITextModal from '@/components/common/modal/AITextModal'
import WaveIcon from '@/assets/icons/onboarding/wave.svg'
export default function AiMessage() {
	const navigate = useNavigate()

	return (
		<div className='min-h-screen bg-main-500 relative overflow-hidden'>
			{/* 1. 배경 파도 영역 */}
			<div className='absolute bottom-0 left-0 w-full z-0 pointer-events-none'>
				<img src={WaveIcon} alt='Wave' draggable={false} className='block w-full h-auto translate-y-[25%]' />
				<div className='absolute inset-x-0 bottom-0 h-24 bg-main-500' />
			</div>

			{/* 2. 모달 영역 */}
			<AITextModal
				title='너무 슬퍼요'
				text='이 슬픔은 충분히 이해될 수 있습니다'
				isOpen={true}
				onClose={() => navigate('/')}
			/>

			<div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
				<div className='w-full mt-110 pointer-events-auto'>
					<div className='flex flex-col gap-3'>
						<FilledButton label='다른 슬픔 보러가기' onClick={() => navigate('/memory')} />
						<OutlinedButton label='관련된 슬픔 보러가기' onClick={() => navigate('/memory')} />
					</div>
				</div>
			</div>
		</div>
	)
}
