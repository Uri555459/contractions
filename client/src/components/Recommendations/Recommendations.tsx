import type { FC } from 'react'

import { Switch } from '@/components/ui/switch'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

interface Props extends IClassName {}

export const Recommendations: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex items-center rounded-2xl bg-purple-red-gradient p-4',
				className,
			)}
		>
			<span className='text-white'>Показывать рекомендации</span>
			<Switch
				id='airplane-mode'
				className='!peer/span:bg-black ml-auto !bg-white/30'
			/>
		</div>
	)
}
