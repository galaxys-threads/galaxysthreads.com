import React from 'react'
import Links from '../Data/links'

export default function Footer() {
	return (
		<div id="footer">
			<div className="container">
				<div className="social-menu">
					<a href={Links.Etsy} target="_blank">
						<i className="fa-brands fa-etsy"></i>
					</a>
					<a href={Links.Discord} target="_blank">
						<i className="fa-brands fa-discord"></i>
					</a>
					<a href={Links.Reddit} target="_blank">
						<i className="fa-brands fa-reddit"></i>
					</a>
					<a href={Links.Github} target="_blank">
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
				<p>Galaxy's Threads {new Date().getFullYear()} ©</p>
				<p>
					Please Note: Galaxy's Threads fan run organization and is NOT
					affiliated with Lucasfilm Ltd. or The Walt Disney Company.
				</p>
			</div>
		</div>
	)
}
