import { Info, Settings } from 'lucide-react'
import type { FC } from 'react'

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar'

import { cn } from '@/lib/utils'

import type { IClassName } from '@/@types/className.interface'

interface Props extends IClassName {}

export const Header: FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex items-center justify-between', className)}>
			<h1 className='mx-auto text-lg font-semibold'>Схватки</h1>
			<Menubar className='flex items-center justify-center gap-4 border-none shadow-none'>
				<MenubarMenu>
					<MenubarTrigger className='p-0'>
						<Info className='text-purple-color' />
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>

				<MenubarMenu>
					<MenubarTrigger className='p-0'>
						<Settings className='text-purple-color' />
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							Undo <MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Find</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Search the web</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Find...</MenubarItem>
								<MenubarItem>Find Next</MenubarItem>
								<MenubarItem>Find Previous</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</div>
	)
}
