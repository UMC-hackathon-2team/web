/**
 * 사용법 예시
 *
 *  import { FilledButton, OutlinedButton } from "@/components/common/button";

    <FilledButton label="작성하기" onClick={handleWrite} /> 
    <FilledButton label="보내기" type="submit" disabled={!isValid} />

    <OutlinedButton label="다른 사람 메모 보기" onClick={goOthers} />
    <OutlinedButton label="다른 글 작성하기" onClick={reset}  /> className="border-transparent" />
 
    <FilledButton label='작성하기' onClick={() => {}} />
    <OutlinedButton label='다른 슬픔 기록하기' onClick={() => {}} />
*/

import React from 'react'
import { cn } from '../../../utils/cn'

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string
	className?: string
}

export function BaseButton({ label, className, disabled, ...props }: BaseButtonProps) {
	return (
		<button
			disabled={disabled}
			className={cn(
				'inline-flex items-center justify-center gap-[10px]',
				'min-w-32.5 h-16 px-10 py-5',
				'rounded-12',
				'text-[16px] leading-[150%] font-pretendard font-semibold',
				'select-none transition duration-300 ease-out',
				'active:translate-y-px disabled:active:translate-y-0',
				'disabled:cursor-not-allowed',
				'whitespace-nowrap',
				'overflow-hidden',
				'text-ellipsis',
				className
			)}
			{...props}
		>
			{label}
		</button>
	)
}
