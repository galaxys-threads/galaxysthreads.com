interface ArchiveEntry {
	matcher: RegExp;
	disneyPlus?: string;
	wookieepedia?: string;
}

const ArchiveDatabank: ArchiveEntry[] = [
	{
		matcher: /A New Hope/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IV_A_New_Hope',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
	},
	{
		matcher: /The Empire Strikes Back/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_V_The_Empire_Strikes_Back',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl',
	},
	{
		matcher: /Return of the Jedi/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VI_Return_of_the_Jedi',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8',
	},
	{
		matcher: /Jedi: Fallen Order/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Fallen_Order',
	},
	{
		matcher: /Purge Trooper(s)?/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Purge_Trooper',
	},
	{
		matcher: /Tera Sinube/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/Tera_Sinube',
	},
	{
		matcher: /T-47/g,
		wookieepedia: 'https://starwars.fandom.com/wiki/T-47_airspeeder',
	},
];

export default class Archive {
	public static replace(): void {
		const contents = document.querySelectorAll('.content');
		for (let i = 0; i < contents.length; i++) {
			const content = contents[i];
			for (const archiveEntry of ArchiveDatabank) {
				content.innerHTML = content.innerHTML.replaceAll(archiveEntry.matcher, function (foundText: string): string {
					let disneyPlusIcon = '';
					if (archiveEntry.disneyPlus) {
						disneyPlusIcon = `
                            <a href="${archiveEntry.disneyPlus}" target="_blank" title="Watch on Disney+">
                                <i class="fa-solid fa-circle-play"></i>
                            </a>
                        `;
					}
					return `<a href='${archiveEntry.wookieepedia}' target="_blank" title="View on Wookieepedia">${foundText}${disneyPlusIcon}</a>`;
				});
			}
		}
	}
}
