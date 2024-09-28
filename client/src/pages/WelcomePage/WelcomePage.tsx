import type { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { ROUTES } from '@/constants'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const WelcomePage: FC<Props> = ({ className }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(ROUTES.subscription)
	}

	return (
		<div className={cn(className)}>
			<div className='bg-light-purple-color pt-24'>
				<img
					src='/images/first-screen.png'
					className='h-full w-full object-cover'
					alt='Изображение приветствия'
				/>
			</div>

			<div className='bg-light-color p-6 text-center'>
				<h1 className='mb-6 text-2xl font-bold'>Добро пожаловать!</h1>
				<p className='mb-8 text-lg'>
					Мы поможем вам замерить схватки и подскажем на какой стадии родов вы
					находитесь
				</p>
				<Button
					variant='default'
					onClick={handleClick}
					className='bg-purple-color mb-3 w-full rounded-full p-5 font-medium text-white'
				>
					Продолжить
				</Button>
				<p className='text-gray-color'>
					Нажав “Продолжить”, вы соглашаетесь с
					<Link
						className='underline'
						to='#'
					>
						нашими правилами
					</Link>
					и
					<Link
						className='underline'
						to='#'
					>
						политикой конфиденциальности
					</Link>
				</p>
			</div>
		</div>
	)
}
