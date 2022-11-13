import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	to: string
	children?: React.ReactNode
}
export default function NavLink(props: Props) {
	const content = (
		<div>
			<div className="aurebesh">{props.children}</div>
			<div className="english">{props.children}</div>
		</div>
	)
	let a = (
		<a href={props.to} target="_blank">
			{content}
		</a>
	)
	if (!props.to.startsWith('http')) {
		a = <Link to={props.to}>{content}</Link>
	}

	return <div className="nav-link">{a}</div>
}
