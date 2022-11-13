export enum CanonType {
	skywalkerSagaFilm = 'Skywalker Saga',
	film = 'Film',
	game = 'Video Game',
	show = 'TV Show',
	book = 'Book',
	bookYoungReader = 'Young Reader Book',
}

export enum CanonEra {
	highRepublic = 'High Republic',
	republic = 'Republic',
	empire = 'Empire',
	newRepublic = 'New Republic',
	firstOrder = 'First Order',
}
export interface MediaLinkResult {
	iconClass: string
	tooltipText: string
}

export interface CanonEntry {
	name: string
	type: CanonType
	era: CanonEra
	mediaLink: string | null
	wookieepedia: string
	released: Date | null
	timeline: number
}

export function formatTimeline(timeline: number): string {
	if (timeline < 1 && timeline > -1) {
		timeline = 0
	}

	if (timeline < 0) {
		return `${Math.ceil(timeline) * -1} BBY`
	}

	if (timeline > 0) {
		return `${Math.floor(timeline)} ABY`
	}

	return '0 BBY / 0 ABY'
}

export function getMediaLinkResult(mediaLink: string): MediaLinkResult {
	if (mediaLink.includes('disneyplus.com')) {
		return {
			iconClass: 'fa-solid fa-tv',
			tooltipText: 'Watch on Disney+',
		}
	}

	if (mediaLink.includes('xbox.com')) {
		return {
			iconClass: 'fa-brands fa-xbox',
			tooltipText: 'Play on Xbox',
		}
	}

	if (mediaLink.includes('oculus.com')) {
		return {
			iconClass: 'fa-solid fa-vr-cardboard',
			tooltipText: 'Play on Meta Quest',
		}
	}

	if (mediaLink.includes('audible.com')) {
		return {
			iconClass: 'fa-brands fa-audible',
			tooltipText: 'Listen on Audible',
		}
	}

	if (mediaLink.includes('amazon.com')) {
		return {
			iconClass: 'fa-brands fa-amazon',
			tooltipText: 'Read on Amazon',
		}
	}

	throw 'Unmapped Media Link: ' + mediaLink
}

const Canon: CanonEntry[] = [
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-phantom-menace-episode-i/2ezYynkgW1AH',
		era: CanonEra.republic,
		name: 'The Phantom Menace',
		released: new Date('1999-05-19 10:00:00Z'),
		timeline: -32,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_I_The_Phantom_Menace',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-attack-of-the-clones-episode-ii/mgpYHGnzZW6N',
		era: CanonEra.republic,
		name: 'Attack of the Clones',
		released: new Date('2002-05-16 10:00:00Z'),
		timeline: -22.8,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_II_Attack_of_the_Clones',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-revenge-of-the-sith-episode-iii/4WvbqLFumNvi',
		era: CanonEra.republic,
		name: 'Revenge of the Sith',
		released: new Date('2005-05-19 10:00:00Z'),
		timeline: -19.9,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_III_Revenge_of_the_Sith',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
		era: CanonEra.empire,
		name: 'A New Hope',
		released: new Date('1977-05-25 10:00:00Z'),
		timeline: 0,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IV_A_New_Hope',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl',
		era: CanonEra.empire,
		name: 'The Empire Strikes Back',
		released: new Date('1980-05-12 10:00:00Z'),
		timeline: 3,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_V_The_Empire_Strikes_Back',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8',
		era: CanonEra.empire,
		name: 'Return of the Jedi',
		released: new Date('1983-05-25 10:00:00Z'),
		timeline: 4,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VI_Return_of_the_Jedi',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-force-awakens-episode-vii/1LEKJPDPeMr7',
		era: CanonEra.firstOrder,
		name: 'The Force Awakens',
		released: new Date('2015-12-18 10:00:00Z'),
		timeline: 34.1,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VII_The_Force_Awakens',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-last-jedi-episode-viii/1nCWFK1pmAI0',
		era: CanonEra.firstOrder,
		name: 'The Last Jedi',
		released: new Date('2017-12-15 10:00:00Z'),
		timeline: 34.5,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VIII_The_Last_Jedi',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-rise-of-skywalker-episode-ix/5e8JThYwCYgw',
		era: CanonEra.firstOrder,
		name: 'The Rise of Skywalker',
		released: new Date('2019-12-20 10:00:00Z'),
		timeline: 35,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IX_The_Rise_of_Skywalker',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/rogue-one-a-star-wars-story/14CV6eSbygOA',
		era: CanonEra.empire,
		name: 'Rogue One',
		released: new Date('2016-12-15 10:00:00Z'),
		timeline: -0.5,
		type: CanonType.film,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Rogue_One:_A_Star_Wars_Story',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/solo-a-star-wars-story/7ks3IYr1eU2P',
		era: CanonEra.empire,
		name: 'Solo',
		released: new Date('2018-05-25 10:00:00Z'),
		timeline: -10,
		type: CanonType.film,
		wookieepedia: 'https://starwars.fandom.com/wiki/Solo:_A_Star_Wars_Story',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/movies/star-wars-the-clone-wars/AVmv1ulT1nQW',
		era: CanonEra.republic,
		name: 'The Clone Wars (Movie)',
		released: new Date('2008-08-14 10:00:00Z'),
		timeline: -22.7,
		type: CanonType.film,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars_(film)',
	},
	{
		mediaLink: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
		era: CanonEra.newRepublic,
		name: 'The Mandalorian',
		released: new Date('2019-11-12 10:00:00Z'),
		timeline: 9,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Mandalorian',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/series/the-book-of-boba-fett/57TL7zLNu2wf',
		era: CanonEra.newRepublic,
		name: 'The Book of Boba Fett',
		released: new Date('2021-12-29 10:00:00Z'),
		timeline: 9.5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Book_of_Boba_Fett',
	},
	{
		mediaLink: 'https://www.disneyplus.com/series/obi-wan-kenobi/2JYKcHv9fRJb',
		era: CanonEra.empire,
		name: 'Obi-Wan Kenobi',
		released: new Date('2022-05-27 10:00:00Z'),
		timeline: -9.5,
		type: CanonType.show,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Obi-Wan_Kenobi_(television_series)',
	},
	{
		era: CanonEra.empire,
		mediaLink: 'https://www.disneyplus.com/series/andor/3xsQKWG00GL5',
		name: 'Andor',
		released: new Date('2022-09-21 10:00:00Z'),
		timeline: -5.1,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Andor_(television_series)',
	},
	{
		era: CanonEra.newRepublic,
		mediaLink: null,
		name: 'Ahsoka',
		released: null,
		timeline: 9.7,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Ahsoka_(television_series)',
	},
	{
		era: CanonEra.highRepublic,
		name: 'The Acolyte',
		released: null,
		mediaLink: null,
		timeline: -132,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Acolyte',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Skeleton Crew',
		released: null,
		mediaLink: null,
		timeline: 9.8,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Skeleton_Crew',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/series/star-wars-the-clone-wars/1wYXzjabXGVZ',
		era: CanonEra.republic,
		name: 'The Clone Wars',
		released: new Date('2008-10-03 10:00:00Z'),
		timeline: -22.6,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/series/star-wars-rebels/64MCZgAzY0Zw',
		era: CanonEra.empire,
		name: 'Rebels',
		released: new Date('2014-10-13 10:00:00Z'),
		timeline: -5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Rebels',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/series/star-wars-resistance/FQwsUthRSbnp',
		era: CanonEra.firstOrder,
		name: 'Resistance',
		released: new Date('2018-10-07 10:00:00Z'),
		timeline: 34,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Resistance',
	},
	{
		mediaLink:
			'https://www.disneyplus.com/series/star-wars-the-bad-batch/4gMliqFxxqXC',
		era: CanonEra.empire,
		name: 'The Bad Batch',
		released: new Date('2021-05-04 10:00:00Z'),
		timeline: -19.5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Bad_Batch',
	},
	{
		era: CanonEra.empire,
		mediaLink: 'https://www.xbox.com/en-US/games/star-wars-jedi-fallen-order',
		name: 'Jedi: Fallen Order',
		released: new Date('2019-11-15 10:00:00Z'),
		timeline: -14,
		type: CanonType.game,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Fallen_Order',
	},
	{
		era: CanonEra.empire,
		name: 'Jedi: Survivor',
		released: null,
		timeline: -9,
		mediaLink: null,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Survivor',
	},
	{
		era: CanonEra.newRepublic,
		mediaLink: 'https://www.xbox.com/en-US/games/star-wars-squadrons',
		name: 'Squadrons',
		released: new Date('2020-10-02 10:00:00Z'),
		timeline: 4.9,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Squadrons',
	},
	{
		era: CanonEra.newRepublic,
		mediaLink: 'https://www.xbox.com/en-US/games/star-wars-battlefront-ii',
		name: 'Battlefront II',
		released: new Date('2017-11-09 10:00:00Z'),
		timeline: 4.5,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Battlefront_II',
	},
	{
		era: CanonEra.empire,
		name: 'Vader Immortal',
		mediaLink: 'https://www.oculus.com/vader-immortal/',
		released: new Date('2019-05-21 10:00:00Z'),
		timeline: -2,
		type: CanonType.game,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Vader_Immortal:_A_Star_Wars_VR_Series_%E2%80%93_Episode_I',
	},
	{
		era: CanonEra.firstOrder,
		mediaLink: 'https://www.oculus.com/star-wars-tales-from-the-galaxys-edge/',
		name: "Tales from the Galaxy's Edge",
		released: new Date('2020-11-19 10:00:00Z'),
		timeline: 34.6,
		type: CanonType.game,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Star_Wars:_Tales_from_the_Galaxy%27s_Edge',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Into the Dark',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-The-High-Republic-Into-the-Dark-Audiobook/0593291018',
		released: new Date('2021-02-02 10:00:00Z'),
		timeline: -232.5,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_Into_the_Dark',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Light of the Jedi',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Light-of-the-Jedi-Audiobook/0593215508',
		released: new Date('2021-01-05 10:00:00Z'),
		timeline: -232,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_Light_of_the_Jedi',
	},
	{
		era: CanonEra.highRepublic,
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-The-Rising-Storm-The-High-Republic-Audiobook/0593396820',
		name: 'The Rising Storm',
		released: new Date('2021-06-29 10:00:00Z'),
		timeline: -231.7,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_The_Rising_Storm',
	},
	{
		era: CanonEra.highRepublic,
		mediaLink:
			'https://www.audible.com/pd/Out-of-the-Shadows-Audiobook/1368075347',
		name: 'Out of the Shadows',
		released: new Date('2021-07-27 10:00:00Z'),
		timeline: -231.5,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_Out_of_the_Shadows',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Tempest Runner',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Tempest-Runner-Audiobook/059345586X',
		released: new Date('2022-03-15 10:00:00Z'),
		timeline: -231,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_Tempest_Runner_(script)',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Midnight Horizon',
		mediaLink:
			'https://www.audible.com/pd/Midnight-Horizon-Audiobook/B09RKV4WP9',
		released: new Date('2022-02-01 10:00:00Z'),
		timeline: -230,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_Midnight_Horizon',
	},
	{
		era: CanonEra.highRepublic,
		name: 'The Fallen Star',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-The-Fallen-Star-The-High-Republic-Audiobook/0593558170',
		released: new Date('2022-01-04 10:00:00Z'),
		timeline: -230.5,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/The_High_Republic:_The_Fallen_Star',
	},
	{
		era: CanonEra.republic,
		name: 'Master & Apprentice',
		mediaLink:
			'https://www.audible.com/pd/Master-Apprentice-Star-Wars-Audiobook/B07FTDBKGZ',
		released: new Date('2019-04-16 10:00:00Z'),
		timeline: -40,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Master_%26_Apprentice',
	},
	{
		era: CanonEra.republic,
		name: "Queen's Peril",
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Queens-Peril-Audiobook/0593207696',
		released: new Date('2020-06-02 10:00:00Z'),
		timeline: -32.8,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Peril',
	},
	{
		era: CanonEra.republic,
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Queens-Shadow-Audiobook/B07M8YJFCH',
		name: "Queen's Shadow",
		released: new Date('2019-03-05 10:00:00Z'),
		timeline: -28,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Shadow',
	},
	{
		era: CanonEra.republic,
		name: 'Dooku: Jedi Lost',
		mediaLink:
			'https://www.audible.com/pd/Dooku-Jedi-Lost-Star-Wars-Audiobook/0593102819',
		released: new Date('2019-10-01 10:00:00Z'),
		timeline: -32.9,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Dooku:_Jedi_Lost_(script)',
	},
	{
		era: CanonEra.republic,
		mediaLink: 'https://www.audible.com/pd/Queens-Hope-Audiobook/B09VQQ3P6Z',
		name: "Queen's Hope",
		released: new Date('2022-01-25 10:00:00Z'),
		timeline: -22.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Hope',
	},
	{
		era: CanonEra.republic,
		name: 'Brotherhood',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Brotherhood-Audiobook/B09HR33QHH',
		released: new Date('2022-05-10 10:00:00Z'),
		timeline: -22.4,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Brotherhood',
	},
	{
		era: CanonEra.republic,
		name: 'Catalyst',
		mediaLink:
			'https://www.audible.com/pd/Catalyst-Star-Wars-Audiobook/B01J6GNS9I',
		released: new Date('2016-11-15 10:00:00Z'),
		timeline: -21,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Catalyst:_A_Rogue_One_Novel',
	},
	{
		era: CanonEra.republic,
		name: 'Dark Disciple',
		mediaLink:
			'https://www.audible.com/pd/Dark-Disciple-Star-Wars-Audiobook/B00ZAURNZA',
		released: new Date('2015-07-07 10:00:00Z'),
		timeline: -19.2,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Dark_Disciple',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Chaos Rising',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Thrawn-Ascendancy-Audiobook/0593215389',
		released: new Date('2020-09-01 10:00:00Z'),
		timeline: -19,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Chaos_Rising',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Greater Good',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Thrawn-Ascendancy-Book-II-Greater-Good-Audiobook/059339688X',
		released: new Date('2021-04-27 10:00:00Z'),
		timeline: -18.5,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Greater_Good',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Lesser Evil',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Thrawn-Ascendancy-Book-III-Lesser-Evil-Audiobook/0593460618',
		released: new Date('2021-11-16 10:00:00Z'),
		timeline: -18.4,
		type: CanonType.book,
		wookieepedia:
			'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Lesser_Evil',
	},
	{
		era: CanonEra.empire,
		name: 'Ahsoka (Book)',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Ahsoka-Audiobook/B01M0YKIZA',
		released: new Date('2017-10-03 10:00:00Z'),
		timeline: -18,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Ahsoka_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Thrawn',
		mediaLink:
			'https://www.audible.com/pd/Thrawn-Star-Wars-Audiobook/B01MTYYPKY',
		released: new Date('2017-04-11 10:00:00Z'),
		timeline: -16,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Lords of the Sith',
		mediaLink:
			'https://www.audible.com/pd/Lords-of-the-Sith-Star-Wars-Audiobook/B00VQO3GPU',
		released: new Date('2015-04-28 10:00:00Z'),
		timeline: -14.4,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Lords_of_the_Sith',
	},
	{
		era: CanonEra.empire,
		name: 'Tarkin',
		mediaLink:
			'https://www.audible.com/pd/Tarkin-Star-Wars-Audiobook/B00O4IDJDE',
		released: new Date('2014-11-04 10:00:00Z'),
		timeline: -14.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Tarkin_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Most Wanted',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Most-Wanted-Audiobook/B07BL4DSD6',
		released: new Date('2018-05-25 10:00:00Z'),
		timeline: -13,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Most_Wanted',
	},
	{
		era: CanonEra.empire,
		name: 'Rebel Rising',
		mediaLink:
			'https://www.audible.com/pd/Star-Wars-Rebel-Rising-Audiobook/B06XT8G4NB',
		released: new Date('2017-05-02 10:00:00Z'),
		timeline: -13.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Rebel_Rising',
	},
	{
		era: CanonEra.empire,
		name: 'A New Dawn',
		mediaLink:
			'https://www.audible.com/pd/A-New-Dawn-Star-Wars-Audiobook/B00M0OZZTK',
		released: new Date('2014-09-02 10:00:00Z'),
		timeline: -11,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/A_New_Dawn_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Lost Stars',
		released: new Date('2015-09-04 10:00:00Z'),
		timeline: -11.1,
		mediaLink:
			'https://www.amazon.com/Journey-Star-Wars-Force-Awakens-ebook/dp/B00YB2HK42/ref=tmm_kin_swatch_0',
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Lost_Stars',
	},
	{
		era: CanonEra.empire,
		name: 'Leia, Princess of Alderaan',
		mediaLink:
			'https://www.audible.com/pd/Journey-to-Star-Wars-The-Last-Jedi-Leia-Princess-of-Alderaan-Audiobook/B074CMXKJ4',
		released: new Date('2017-09-01 10:00:00Z'),
		timeline: -3,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Leia,_Princess_of_Alderaan',
	},
	{
		era: CanonEra.empire,
		name: 'Thrawn: Alliances',
		mediaLink:
			'https://www.audible.com/pd/Thrawn-Alliances-Star-Wars-Audiobook/B077Y7PLS4',
		released: new Date('2018-07-24 10:00:00Z'),
		timeline: -1,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn:_Alliances',
	},
	{
		era: CanonEra.empire,
		name: 'Thrawn: Treason',
		mediaLink: 'https://www.audible.com/pd/Thrawn-Treason-Audiobook/1984889966',
		released: new Date('2019-07-23 10:00:00Z'),
		timeline: -0.9,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn:_Treason',
	},
	{
		era: CanonEra.empire,
		name: 'Heir to the Jedi',
		mediaLink:
			'https://www.audible.com/pd/Heir-to-the-Jedi-Star-Wars-Audiobook/B00RDN6628',
		released: new Date('2015-03-03 10:00:00Z'),
		timeline: 0.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Heir_to_the_Jedi',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Alphabet Squadron',
		mediaLink:
			'https://www.audible.com/pd/Alphabet-Squadron-Star-Wars-Audiobook/1984889931',
		released: new Date('2019-06-11 10:00:00Z'),
		timeline: 4.4,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Alphabet_Squadron_(novel)',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Aftermath',
		mediaLink:
			'https://www.audible.com/pd/Aftermath-Star-Wars-Audiobook/B011PVXPO0',
		released: new Date('2015-09-04 10:00:00Z'),
		timeline: 4.6,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Aftermath_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Shadow Fall',
		mediaLink:
			'https://www.audible.com/pd/Shadow-Fall-Star-Wars-Audiobook/0593215354',
		released: new Date('2020-06-23 10:00:00Z'),
		timeline: 5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Shadow_Fall',
	},
]

// https://starwars.fandom.com/wiki/List_of_books#Canon

export default Canon
