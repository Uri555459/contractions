import { Check, X as CloseIcon, Crown } from 'lucide-react'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InfoLinks } from '@/components/ui/infoLinks'
import { PriceButton } from '@/components/ui/priceButton'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

import { ROUTES } from '@/constants'

interface Props extends IClassName {}

export const SubscriptionPage: FC<Props> = ({ className }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(ROUTES.home)
	}

	const handlePrice = (index: number) => {
		console.log('click', index)
	}

	return (
		<div
			className={cn('relative bg-purple-light-gradient p-10 pt-36', className)}
		>
			<CloseIcon className='absolute right-5 top-5 h-7 w-7 text-light-gray-color' />

			<div>
				<Badge className='mb-6 rounded-full border-none bg-purple-red-gradient px-4 py-1 font-medium text-white'>
					<Crown className='mr-2 h-5 w-5' />
					Премиум
				</Badge>
				<h1 className='mb-6 text-2xl font-bold'>Разблокировать все функции</h1>

				<ul className='mb-10'>
					<li className='mb-3 flex text-base font-medium leading-5'>
						<Check className='mr-2 h-7 w-7 shrink-0 text-purple-color' />
						Справочная информация о фазах схваток и родах
					</li>
					<li className='mb-3 flex text-base font-medium leading-5'>
						<Check className='mr-2 h-7 w-7 shrink-0 text-purple-color' />
						Рекомендации во время схваток
					</li>
					<li className='mb-3 flex text-base font-medium leading-5'>
						<Check className='mr-2 h-7 w-7 shrink-0 text-purple-color' />
						Редактирование схваток
					</li>
					<li className='mb-3 flex text-base font-medium leading-5'>
						<Check className='mr-2 h-7 w-7 shrink-0 text-purple-color' />
						Отправка истории схваток на электронную почту
					</li>
				</ul>

				<PriceButton
					price={1.99}
					textTime='1 неделя'
					oldPrice={3.98}
					isSale
					onClick={() => handlePrice(0)}
				/>

				<PriceButton
					price={5.99}
					textTime='Раз и навсегда'
					onClick={() => handlePrice(1)}
				/>

				<Button
					variant='default'
					onClick={handleClick}
					className='mb-3 mt-8 w-full rounded-full bg-purple-color p-5 font-medium text-white hover:bg-purple-color/80'
				>
					Продолжить
				</Button>
				<InfoLinks />
			</div>
		</div>
	)
}
