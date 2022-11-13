import React, { useEffect } from 'react'
import NavLink from '../Components/NavLink'

import { useLocation } from 'react-router-dom'
import Links from '../Data/links'

export default function Navigation() {
	let location = useLocation()

	useEffect(() => {
		const focusedElement = document.querySelector(
			':focus',
		) as HTMLAnchorElement | null
		if (focusedElement) {
			focusedElement.blur()
		}
	}, [location])

	return (
		<div id="navigation">
			<div className="container">
				<NavLink to="/">Home</NavLink>
				<NavLink to={Links.CanonGuide}>Canon Guide</NavLink>
				<NavLink to={Links.AurebeshMode}>Aurebesh Mode</NavLink>
				<NavLink to={Links.Etsy}>Shop</NavLink>
			</div>
		</div>
	)
}
