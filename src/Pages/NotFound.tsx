import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div className="container">
			<p>
				This isn't the page you are looking for...{' '}
				<Link to="/">Move along</Link>.
			</p>
		</div>
	)
}
