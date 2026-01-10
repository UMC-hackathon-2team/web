/**
 * TextArea 컴포넌트
 *
 * 테스트 방법 :
 *
 * import { useState } from 'react'
 * import TextArea from '../components/common/TextArea'
 *
 * const [text, setText] = useState('')
 * <TextArea value={text} onChange={setText} placeholder='Text Something' maxLength={200} />
 */
import React from 'react'
import { cn } from '../../utils/cn'

interface TextAreaProps {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	maxLength?: number
	width?: number | string
	height?: number | string
	disabled?: boolean
	error?: boolean
	className?: string
}

export default function TextArea({
	value,
	onChange,
	placeholder = '',
	maxLength = 200,
	width = 288,
	height = 400,
	disabled = false,
	error = false,
	className,
}: TextAreaProps) {
	const isMax = value.length >= maxLength

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = e.target.value
		if (inputValue.length <= maxLength) {
			onChange(inputValue)
		}
	}

	return (
		<div className='flex flex-col gap-2 mx-auto' style={{ width }}>
			<div className='relative' style={{ height }}>
				<textarea
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					disabled={disabled}
					maxLength={maxLength}
					className={cn(
						'resize-none outline-none',
						'bg-white rounded-12 border px-4 pt-3 pb-10',
						'text-body-2 w-full h-full text-black ',
						'transition-all duration-200',
						error ? 'border-red-500' : 'border-gray-3',
						disabled && 'bg-gray-1 cursor-not-allowed opacity-60',
						className
					)}
				/>

				<div className='absolute bottom-3 right-4 flex flex-col items-end pointer-events-none text-sm'>
					<span className={cn('text-caption-1 font-medium', isMax ? 'text-red-500' : 'text-gray-6')}>
						{value.length} / {maxLength}
					</span>
				</div>
			</div>
		</div>
	)
}
