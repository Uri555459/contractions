import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

import { ROUTES } from '@/constants'

interface Props extends IClassName {}

const dataLinks = [
	{
		name: 'Условия',
		link: ROUTES.conditions,
	},
	{
		name: 'Приватность',
		link: ROUTES.private,
	},
	{
		name: 'Восстановить',
		link: ROUTES.restore,
	},
]

export const InfoLinks: FC<Props> = ({ className }) => {
	return (
		<ul className={cn('flex items-center justify-center gap-4', className)}>
			{dataLinks.map(({ name, link }) => (
				<li key={link}>
					<Link
						to={link}
						className='text-[11px] text-gray-color hover:text-purple-color'
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	)
}
