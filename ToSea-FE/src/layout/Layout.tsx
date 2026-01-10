import { Outlet } from 'react-router'
import Header from '../components/common/Header'

export const Layout = () => {
	return (
		<div className='relative bg-blue-500'>
			<Header />
			<div className='w-full max-w-main mx-auto'>
				<Outlet />
			</div>
		</div>
	)
}
