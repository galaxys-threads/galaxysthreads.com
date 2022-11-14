import React from 'react'
import Links from '../Data/links'

export default function Footer() {
	return (
		<div id="footer">
			<div className="container">
				<hr />
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
				<div>
					<a href="https://www.buymeacoffee.com/GalaxysThreads" target="_blank">
						<img
							src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
							alt="Buy Me A Coffee"
							className="bmac"
						/>
					</a>
				</div>
				<p>
					Please Note: Galaxy's Threads fan-run organization and is NOT
					affiliated with Lucasfilm Ltd. or The Walt Disney Company.
				</p>
				<p>Galaxy's Threads {new Date().getFullYear()} ©</p>
			</div>
		</div>
	)
}
