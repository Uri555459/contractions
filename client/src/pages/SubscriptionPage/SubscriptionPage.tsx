import { X as CloseIcon, Crown } from 'lucide-react'
import type { FC } from 'react'

import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const SubscriptionPage: FC<Props> = ({ className }) => {
	return (
		<div className={cn('bg-purple-gradient relative pt-36', className)}>
			<CloseIcon className='text-light-gray-color absolute right-5 top-5 h-7 w-7' />

			<div>
				<Badge>
					<Crown className='h-24 w-24 text-white' />
					Премиум
				</Badge>
			</div>
		</div>
	)
}
