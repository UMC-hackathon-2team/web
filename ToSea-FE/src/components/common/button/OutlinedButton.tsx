import React from 'react'
import { BaseButton, type BaseButtonProps } from './BaseButton'
import { cn } from '../../../utils/cn'

type Props = Omit<BaseButtonProps, 'className'> & { className?: string }

export default function OutlinedButton({ className, ...props }: Props) {
	return (
		<BaseButton
			{...props}
			className={cn(
				// Enable
				'bg-white text-black',
				'border border-main-400',
				// Hover
				'hover:bg-[#F3F3F3]',
				// Pressed
				'active:bg-[#E6E6E6]',
				// Disabled
				'disabled:border-gray-4 disabled:text-gray-4 disabled:bg-gray-2',
				className
			)}
		/>
	)
}
