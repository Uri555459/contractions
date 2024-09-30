import type { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { HomePage, SubscriptionPage, WelcomePage } from '@/pages'

interface Props {
	className?: string
}

const router = createBrowserRouter([
	{
		path: '/welcome',
		element: <WelcomePage />,
	},
	{
		path: '/subscription',
		element: <SubscriptionPage />,
	},
	{
		path: '/',
		element: <HomePage />,
	},
])

export const IndexRoutes: FC<Props> = () => <RouterProvider router={router} />
