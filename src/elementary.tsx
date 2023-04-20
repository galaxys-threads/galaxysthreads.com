import CanonGuide from './Components/CanonGuide'
import { createRoot } from 'react-dom/client'

import './styles.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const actions = [
	{
		selector: '#canon-guide',
		func: (target) => {
			const router = createBrowserRouter([
				{
					path: '*',
					element: <CanonGuide />,
				},
			])

			const root = createRoot(target)
			root.render(
				<div>
					<RouterProvider router={router} />
				</div>,
			)
		},
	},
]

document.addEventListener('DOMContentLoaded', () => {
	for (const action of actions) {
		const targets = document.querySelectorAll(action.selector)
		targets.forEach((target) => {
			try {
				action.func(target)
			} catch (e) {
				console.error(e)
			}
		})
	}
})
