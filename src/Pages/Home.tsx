import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../Data/links'

export default function App() {
	return (
		<div className="container">
			<h1>Hello there.</h1>
			<p>
				Welcome! This website is still a work in progress and we will be adding
				more soon. But for now, checkout our{' '}
				<Link to={Links.Landing}>Star Wars Canon Guide</Link> and other fun
				things listed below:
			</p>
			<h2>Aurebesh Things</h2>
			<ul>
				<li>
					<a href={Links.Etsy} target="_blank">
						Aurebesh Shirts
					</a>{' '}
					(Our Etsy Store)
				</li>
				<li>
					<a href={Links.AurebeshMode} target="_blank">
						Aurebesh Mode
					</a>{' '}
					(Aurebesh In Google Chrome)
				</li>
				<li>Aurebesh Code (Monospaced Aurebesh Font) (Coming Soon)</li>
			</ul>
			<h2>Talk To Us</h2>
			<ul>
				<li>
					<a href={Links.Discord} target="_blank">
						Discord Server
					</a>
				</li>
				<li>
					<a href={Links.Mail} target="_blank">
						contact@galaxysthreads.com
					</a>
				</li>
			</ul>
		</div>
	)
}
