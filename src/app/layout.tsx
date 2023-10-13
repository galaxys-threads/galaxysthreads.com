import type { Metadata } from 'next'
import { LayoutStandard } from '@aaronellington/standard-ui'
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

const mainMenu: StandardUIMenu.TopLevelEntry[] = [
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
]

const footerMenu: StandardUIMenu.TopLevelEntry[] = [
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
]

export default function Layout(props: Props) {
	return (
		<html lang="en">
			<body>
				<LayoutStandard
					renderMenuFunc={nextLinkRenderFunc}
					mainMenu={mainMenu}
					footerMenu={footerMenu}
					brand={
						<Link href="/" style={{ display: 'block' }}>
							<Logo />
						</Link>
					}
					footer={
						<>
							<p>
								Please Note: Galaxy&apos;s Threads fan-run organization and is
								NOT affiliated with Lucasfilm Ltd. or The Walt Disney Company.
							</p>
							<br />
							<p>Galaxy&apos;s Threads © {new Date().getFullYear()}</p>
						</>
					}
				>
					{props.children}
				</LayoutStandard>
			</body>
		</html>
	)
}
