import CanonGuide from './Components/CanonGuide'
import { createRoot } from 'react-dom/client'

import './styles.scss'

const actions = [
	{
		selector: '#canon-guide',
		func: (target) => {
			const root = createRoot(target)
			root.render(<CanonGuide />)
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
