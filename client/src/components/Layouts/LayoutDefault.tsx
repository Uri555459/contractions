import type { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const LayoutDefault: FC<Props> = ({ className }) => {
	return <div className={cn(className)}></div>
}
