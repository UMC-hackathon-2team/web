import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainPage from './pages/MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { AITextModalProvider } from './contexts/AITextModalContext'
import { TextModalProvider } from './contexts/TextModalContext'
import OnboardingPage from '@/pages/onboarding/OnboardingPage'
import MemoryListPage from './pages/MemoryListPage'
import BottleFlowPage from './pages/motions/BottleFlowPage'
import BottleOpenPage from './pages/motions/BottleOpenPage'
import WritePage from '@/pages/write/WritePage'
import AiMessage from '@/pages/aiMessage/AiMessage'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 3,
		},
	},
})

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/onboarding',
				element: <OnboardingPage />,
			},
			{
				path: '/memory',
				element: <MemoryListPage />,
			},
			{
				path: '/motion',
				element: <BottleFlowPage />,
			},
			{
				path: '/bottle-open',
				element: <BottleOpenPage />,
			},
			{
				path: '/write',
				element: <WritePage />,
			},
			{
				path: '/aimessage',
				element: <AiMessage />,
			},
		],
	},
])

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AITextModalProvider>
					<TextModalProvider>
						<RouterProvider router={router} />
					</TextModalProvider>
				</AITextModalProvider>
			</QueryClientProvider>
		</>
	)
}

export default App
