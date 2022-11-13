import '@kyberbits/prism'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './index.css'

import { App } from './App'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
