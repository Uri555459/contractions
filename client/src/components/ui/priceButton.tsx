import type { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { IClassName } from '@/@types/className.interface'

import { cn } from '@/lib/utils'

interface Props extends IClassName {
	onClick?: () => void
	price: number
	oldPrice?: number
	isSale?: boolean
	textTime: string
}

export const PriceButton: FC<Props> = ({
	className,
	onClick,
	price = 0,
	oldPrice = 0,
	isSale = false,
	textTime,
	...res
}) => {
	let classes = ''
	if (isSale) {
		classes = 'bg-[#f6f1ff] border-purple-color'
	}
	return (
		<Button
			onClick={onClick}
			className={cn(
				'relative mb-2 flex w-full items-center justify-between rounded-2xl border border-solid border-light-purple-color px-4 py-5 text-base font-normal text-gray-color shadow-none',
				{
					[classes]: isSale,
				},
				className,
			)}
			{...res}
		>
			{isSale && (
				<Badge className='absolute -top-4 right-4 rounded-full bg-red-color px-2 py-1 text-[11px] font-semibold uppercase leading-none text-white'>
					ЛУЧШАЯ ЦЕНА
				</Badge>
			)}
			<span className={isSale ? 'font-medium text-purple-color' : ''}>
				{textTime}
			</span>
			<span>
				{!!oldPrice && <s className='text-gry-color mr-3'>{oldPrice} $</s>}
				<span className={isSale ? 'font-medium text-purple-color' : ''}>
					{price} $
				</span>
			</span>
		</Button>
	)
}
