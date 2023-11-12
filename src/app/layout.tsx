import type { Metadata } from 'next'
import {
	LayoutCarbon,
	Menu,
	Header,
	Footer,
	Page,
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
import { StandardUIMenu } from '@aaronellington/standard-ui/src/types'
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
		Children: null,
		Icon: <FaHome />,
		Label: `Home`,
		To: '/',
	},
	{
		Children: null,
		Icon: <FaBook />,
		Label: `Canon Guide`,
		To: Links.CanonGuide,
	},
	{
		Children: null,
		Icon: <FaChrome />,
		Label: 'Aurebesh Mode',
		To: Links.AurebeshMode,
	},
	{
		Children: null,
		Icon: <FaShoppingBag />,
		Label: 'Shop',
		To: Links.Etsy,
	},
])

const footerMenu = new Menu.Menu([
	{
		Icon: <FaEnvelope />,
		Label: 'Email',
		To: Links.Mail,
		Children: null,
	},
	{
		Icon: <FaDiscord />,
		Label: 'Discord Server',
		To: Links.Discord,
		Children: null,
	},
	{
		Children: null,
		Icon: <FaShoppingBag />,
		Label: 'Shop',
		To: Links.Etsy,
	},
	{
		Children: null,
		Icon: <FaChrome />,
		Label: 'Aurebesh Mode',
		To: Links.AurebeshMode,
	},
	{
		Icon: <FaGithub />,
		Label: 'Github',
		To: Links.Github,
		Children: null,
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
								Icon: <Logo />,
								Label: "Galaxy's Threads",
								To: '/',
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
