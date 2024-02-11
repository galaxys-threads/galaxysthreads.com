import Links from "@/data/links"
import Link from "next/link"

export default function Page() {
	return (
		<article>
			<h1>Hello there!</h1>
			<p>
				Welcome! This website is still a work in progress and we will be adding
				more soon. But for now, checkout our Star Wars{" "}
				<Link href={Links.CanonGuide}>Canon Guide</Link> and other fun things
				listed below:
			</p>
			<h2>Aurebesh Things</h2>
			<ul>
				<li>Aurebesh Shirts (Our Etsy Store)</li>
				<li>Aurebesh Mode (Aurebesh In Google Chrome)</li>
			</ul>
			<h2>Talk To Us</h2>
			<ul>
				<li>
					<a href={Links.Discord} target="_blank" rel="noreferrer">
						Discord Server
					</a>
				</li>
				<li>
					<a href={Links.Mail}>Email</a>
				</li>
			</ul>
		</article>
	)
}
