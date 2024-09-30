import type { FC } from 'react'

import { Header, LayoutDefault, Recommendations } from '@/components'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

interface Props extends IClassName {}

export const HomePage: FC<Props> = ({ className }) => {
	return (
		<div className={cn(className)}>
			<LayoutDefault>
				<Header />
				<Recommendations />
				<p className='w-full max-w-80 text-center text-light-gray-color'>
					Замерьте несколько схваток и приложение подскажет пора ли вам
					собираться в роддом
				</p>
			</LayoutDefault>
		</div>
	)
}
