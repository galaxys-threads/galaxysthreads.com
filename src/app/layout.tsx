import type { Metadata } from 'next'
import {
	LayoutCarbon,
	Menu,
	Header,
	Footer,
	Page,
	OneLiner,
} from '@aaronellington/standard-ui'
import {
	FaBook,
	FaChrome,
	FaShoppingBag,
	FaDiscord,
	FaEnvelope,
	FaHome,
	FaGithub,
} from 'react-icons/fa'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import Links from '@/data/links'

export const metadata: Metadata = {
	title: `Galaxy's Threads`,
	description: 'The website for Aaron Ellington.',
}

const nextLinkRenderFunc = (
	children: JSX.Element,
	target: string,
	className: string,
): JSX.Element => {
	return (
		<Link href={target} className={className}>
			{children}
		</Link>
	)
}

interface Props {
	children: JSX.Element
}

const mainMenu = new Menu.Menu([
	{
		to: '/',
		content: (
			<OneLiner>
				<FaHome />
				Home
			</OneLiner>
		),
	},
	{
		to: Links.CanonGuide,
		content: (
			<OneLiner>
				<FaBook />
				Canon Guide
			</OneLiner>
		),
	},
	{
		content: (
			<OneLiner>
				<FaChrome />
				Aurebesh Mode
			</OneLiner>
		),
		to: Links.AurebeshMode,
	},
	{
		content: (
			<OneLiner>
				<FaShoppingBag />
				Shop
			</OneLiner>
		),
		to: Links.Etsy,
	},
])

const footerMenu = new Menu.Menu([
	{
		content: (
			<OneLiner>
				<FaEnvelope />
				Email
			</OneLiner>
		),
		to: Links.Mail,
	},
	{
		content: (
			<OneLiner>
				<FaDiscord />
				Discord Server
			</OneLiner>
		),
		to: Links.Discord,
	},
	{
		content: (
			<OneLiner>
				<FaShoppingBag />
				Shop
			</OneLiner>
		),
		to: Links.Etsy,
	},
	{
		content: (
			<OneLiner>
				<FaChrome />
				Aurebesh Mode
			</OneLiner>
		),
		to: Links.AurebeshMode,
	},
	{
		content: (
			<OneLiner>
				<FaGithub />
				Github
			</OneLiner>
		),
		to: Links.Github,
	},
])

mainMenu.RenderFunc = nextLinkRenderFunc
footerMenu.RenderFunc = nextLinkRenderFunc

export default function Layout(props: Props) {
	return (
		<html lang="en">
			<body>
				<LayoutCarbon
					header={
						<Header
							brand={{
								content: (
									<OneLiner>
										<h1>
											<Logo />
											<div>Galaxy&apos;s Threads</div>
										</h1>
									</OneLiner>
								),
								to: '/',
							}}
							menu={mainMenu}
						/>
					}
					footer={
						<Footer menu={footerMenu}>
							<>
								<small>
									Please Note: Galaxy&apos;s Threads fan-run organization and is
									NOT affiliated with Lucasfilm Ltd. or The Walt Disney Company.
								</small>
								<small>
									Galaxy&apos;s Threads © {new Date().getFullYear()}
								</small>
							</>
						</Footer>
					}
				>
					<Page>{props.children}</Page>
				</LayoutCarbon>
			</body>
		</html>
	)
}
