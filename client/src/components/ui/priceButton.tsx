import type { FC, ReactNode } from 'react'

import { Button } from '@/components/ui/button'

import { IClassName } from '@/@types/className.interface'

import { cn } from '@/lib/utils'

interface Props extends IClassName {}

export const PriceButton: FC<Props> = ({ className }) => {
	return (
		<Button
			className={cn(
				'flex w-full items-center justify-between rounded-2xl border border-solid border-light-purple-color p-4 text-base text-gray-color shadow-none',
				className,
			)}
		>
			<span className=''>1 неделя</span>
			<span>
				<s>3,98 $</s> 1,99 $
			</span>
		</Button>
	)
}
