import { useState, useEffect } from 'react'
import HomeIcon from '@/assets/icons/header/Home.svg?react'
import FeedIcon from '@/assets/icons/header/Feed.svg?react'
import LogoIcon from '@/assets/icons/Logo.svg?react'

const Header = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			// 스크롤을 아래로 내릴 때
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setIsVisible(false)
			} else {
				// 스크롤 위로 올릴 때
				setIsVisible(true)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollY])

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-3 py-2 bg-transparent backdrop-blur-sm transition-transform duration-300 ease-in-out ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<HomeIcon className='w-6 h-6 text-white' />
			<LogoIcon className='w-25 h-10 text-white' />
			<FeedIcon className='w-6 h-6 text-white' />
		</div>
	)
}

export default Header
