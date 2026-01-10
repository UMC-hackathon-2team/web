import { BaseButton, type BaseButtonProps } from './BaseButton'
import { cn } from '../../../utils/cn'

type Props = Omit<BaseButtonProps, 'className'> & { className?: string }

export default function FilledButton({ className, ...props }: Props) {
	return (
		<BaseButton
			{...props}
			className={cn(
				// Enable
				'bg-main-50 text-black',
				// Hover
				'hover:bg-main-100',
				// Pressed
				'active:bg-main-200',
				// Disabled
				'disabled:bg-[#E6E6E6] disabled:text-[#C3C3C3]',
				className
			)}
		/>
	)
}
