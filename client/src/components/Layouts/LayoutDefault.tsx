import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

interface Props extends IClassName {
	children: ReactNode
}

export const LayoutDefault: FC<Props> = ({ className, children }) => {
	return <div className={cn('relative px-4 py-10', className)}>{children}</div>
}
