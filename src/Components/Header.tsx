import React from 'react'
import { Link } from 'react-router-dom'
import LogoURL from '../Images/logo.svg'

export default function Header() {
	return (
		<div id="header">
			<div className="container">
				<Link to="/">
					<img src={LogoURL} alt="Galaxy's Threads Logo" />
				</Link>
			</div>
		</div>
	)
}
