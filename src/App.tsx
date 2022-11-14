import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import CanonGuide from './Pages/CanonGuide'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Links from './Data/links'

export function App() {
	return (
		<BrowserRouter>
			<Header />
			<Navigation />
			<div id="body">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={Links.CanonGuide} element={<CanonGuide />} />
					<Route path={Links.Landing} element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}
