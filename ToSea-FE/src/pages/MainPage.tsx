import { useState } from 'react'
import TextArea from '../components/common/TextArea'

const MainPage = () => {
	const [text, setText] = useState('')
	return (
		<div className='min-h-screen bg-main-500 text-white pt-14'>
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
			</div>
		</div>
	)
}

export default MainPage
