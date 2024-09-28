import type { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { SubscriptionPage, WelcomePage } from '@/pages'

interface Props {
	className?: string
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
	},
	{
		path: '/subscription',
		element: <SubscriptionPage />,
	},
])

export const IndexRoutes: FC<Props> = () => <RouterProvider router={router} />
