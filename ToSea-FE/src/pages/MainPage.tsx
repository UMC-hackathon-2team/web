import { useState } from 'react'
import TextArea from '../components/common/TextArea'
import { useAITextModal } from '@/contexts/AITextModalContext'
import { useTextModal } from '@/contexts/TextModalContext'
import { FilledButton, OutlinedButton } from '@/components/common/button'

const MainPage = () => {
	const [text, setText] = useState('')
	const { openModal: openAITextModal } = useAITextModal()
	const { openModal: openTextModal } = useTextModal()

	const handleOpenAIModal = () => {
		openAITextModal({
			title: '히히',
			text: '두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼어요. 두쫀쿠가 제앞에서 끊겼',
		})
	}

	const handleOpenTextModal = () => {
		openTextModal({
			memoryId: 1, // 테스트용 memoryId
			text: '일반 텍스트 모달입니다.',
		})
	}

	return (
		<div className='min-h-screen bg-main-500 pt-14'>
			<div className='p-4 flex gap-4'>
				<button onClick={handleOpenAIModal} className='bg-blue-500 text-white px-4 py-2 rounded'>
					AI 텍스트 모달 열기
				</button>
				<button onClick={handleOpenTextModal} className='bg-green-500 text-white px-4 py-2 rounded'>
					텍스트 모달 열기
				</button>
			</div>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id aspernatur vel debitis earum suscipit perspiciatis
			fugit officia ut reiciendis officiis tempore maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum
			dolor sit amet consectetur adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio
			facilis obcaecati rerum quidem aliquam quis repellat optio amet ratione nesciunt fuga. Lorem, ipsum dolor sit amet
			consectetur adipisicing elit. Ipsam, id aspernatur vel debitis earum suscipit perspiciatis fugit officia ut reiciendis
			officiis tempore maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum
			quidem aliquam quis repellat optio amet ratione nesciunt fuga. Lorem, ipsum dolor sit amet consectetur adipisicing
			elit. Ipsam, id aspernatur vel debitis earum suscipit perspiciatis fugit officia ut reiciendis officiis tempore
			maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam quis
			repellat optio amet ratione nesciunt fuga.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id
			aspernatur vel debitis earum suscipit perspiciatis fugit officia ut reiciendis officiis tempore maiores nihil. Eum
			explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias hic quod
			quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam quis repellat optio amet
			ratione nesciunt fuga.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id aspernatur vel debitis earum
			suscipit perspiciatis fugit officia ut reiciendis officiis tempore maiores nihil. Eum explicabo dolores quod libero
			delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas
			minima distinctio facilis obcaecati rerum quidem aliquam quis repellat optio amet ratione nesciunt fuga.Lorem, ipsum
			dolor sit amet consectetur adipisicing elit. Ipsam, id aspernatur vel debitis earum suscipit perspiciatis fugit
			officia ut reiciendis officiis tempore maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis
			obcaecati rerum quidem aliquam quis repellat optio amet ratione nesciunt fuga.uscipit perspiciatis fugit officia ut
			reiciendis officiis tempore maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis obcaecati
			rerum quidem aliquam quis repellat optio amet ratione nesciunt fuga.Lorem, ipsum dolor sit amet consectetur
			adipisicing elit. Ipsam, id aspernatur vel debitis earum suscipit perspiciatis fugit officia ut reiciendis officiis
			tempore maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam
			quis repellat optio amet ratione nesciunt fuga.uscipit perspiciatis fugit officia ut reiciendis officiis tempore
			maiores nihil. Eum explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Quasi alias hic quod quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam quis
			repellat optio amet ratione nesciunt fuga.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id
			aspernatur vel debitis earum suscipit perspiciatis fugit officia ut reiciendis officiis tempore maiores nihil. Eum
			explicabo dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias hic quod
			quisquam. Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam quis repellat optio amet
			ratione nesciunt fuga.uscipit perspiciatis fugit officia ut reiciendis officiis tempore maiores nihil. Eum explicabo
			dolores quod libero delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias hic quod quisquam.
			Libero delectus, quas minima distinctio facilis obcaecati rerum quidem aliquam quis repellat optio amet ratione
			nesciunt fuga.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id aspernatur vel debitis earum
			suscipit perspiciatis fugit officia ut reiciendis officiis tempore maiores nihil. Eum explicabo dolores quod libero
			delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias hic quod quisquam. Libero delectus, quas
			minima distinctio facilis obcaecati rerum quidem aliquam quis repellat optio amet ratione nesciunt fuga.
			<div>
				<br />
				<br />
				<br />
				<TextArea value={text} onChange={setText} placeholder='Text Something' />
				<br />
				<FilledButton label='작성하기' onClick={() => {}} />
				<br />
				<br />
				<OutlinedButton label='다른 슬픔 기록하기' onClick={() => {}} />
				<br />
				<br />
			</div>
		</div>
	)
}

export default MainPage
