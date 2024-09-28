import type { FC } from 'react'

import { Button } from '@/components/ui/button'

import { IClassName } from '@/@types/className.interface'

import { cn } from '@/lib/utils'

interface Props extends IClassName {}

export const priceButton: FC<Props> = ({ className }) => {
	return <Button className={cn(className)}>priceButton</Button>
}
