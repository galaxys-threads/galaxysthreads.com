import dynamic from "next/dynamic"
const CanonGuide = dynamic(() => import("@/components/CanonGuide"), {
	ssr: false,
})

export default function Page() {
	return (
		<article>
			<h1>Canon Guide</h1>
			<h2>What is this?</h2>
			<p>
				This is a simple reference chart to all (most) Star Wars Canon media.
				It&apos;s not meant to be exhaustive list, instead it&apos;s meant to be
				quick reference for the high level overview of the majority of content
				out there.
			</p>
			<hr />
			<CanonGuide />
			<hr />
			<h2>Other Resources</h2>
			<p>
				The <a href="https://a.co/d/3Ayzvxd">Star Wars Timelines</a> book is a
				really good reference, put out by Lucasfilm, that covers all Star Wars
				Canon stories at the time of printing. But it&apos;s not clear which
				media the story comes from.
			</p>
			<p>
				<a href="https://youtini.com/timelines/canon">Youtini</a> offers
				update-to-date information on all Star Wars content. They specialize in
				reading material, but have information on other media as well. Totally
				worth checking out for a deeper dive than what is offered here.
			</p>
			<p>
				<a href="https://starwars.fandom.com/wiki/Timeline_of_canon_media">
					Wookieepedia
				</a>
				, maintained by a community of fans, has a much more extensive list of
				Star Wars Canon media. But can be a bit overwhelming.
			</p>
		</article>
	)
}
