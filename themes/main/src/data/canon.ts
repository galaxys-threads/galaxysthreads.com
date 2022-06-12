export enum CanonType {
	skywalkerSagaFilm = 'Skywalker Saga',
	film = 'Film',
	game = 'Video Game',
	show = 'TV Show',
	book = 'Book',
}

export enum CanonEra {
	highRepublic = 'High Republic',
	republic = 'Republic',
	empire = 'Empire',
	newRepublic = 'New Republic',
	firstOrder = 'First Order',
}

export interface CanonEntry {
	name: string;
	type: CanonType;
	era: CanonEra;
	disneyPlus?: string;
	wookieepedia: string;
	released: Date | null;
	timeline: number;
}

export function formatTimeline(timeline: number): string {
	if (timeline < 1 && timeline > -1) {
		timeline = 0;
	}

	if (timeline < 0) {
		return `${Math.ceil(timeline) * -1} BBY`;
	}

	if (timeline > 0) {
		return `${Math.floor(timeline)} ABY`;
	}

	return '0 BBY / 0 ABY';
}

const Canon: CanonEntry[] = [
	{
		name: 'The Phantom Menace',
		era: CanonEra.republic,
		type: CanonType.skywalkerSagaFilm,
		timeline: -32,
		released: new Date('1999-05-19'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_I_The_Phantom_Menace',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-phantom-menace-episode-i/2ezYynkgW1AH',
	},
	{
		name: 'Attack of the Clones',
		era: CanonEra.republic,
		type: CanonType.skywalkerSagaFilm,
		timeline: -22.8,
		released: new Date('2002-05-16'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_II_Attack_of_the_Clones',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-attack-of-the-clones-episode-ii/mgpYHGnzZW6N',
	},
	{
		name: 'Revenge of the Sith',
		era: CanonEra.republic,
		type: CanonType.skywalkerSagaFilm,
		timeline: -19.9,
		released: new Date('2005-05-19'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_III_Revenge_of_the_Sith',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-revenge-of-the-sith-episode-iii/4WvbqLFumNvi',
	},
	{
		name: 'A New Hope',
		era: CanonEra.empire,
		type: CanonType.skywalkerSagaFilm,
		timeline: 0,
		released: new Date('1977-05-25'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IV_A_New_Hope',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
	},
	{
		name: 'The Empire Strikes Back',
		era: CanonEra.empire,
		type: CanonType.skywalkerSagaFilm,
		timeline: 3,
		released: new Date('1980-05-12'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_V_The_Empire_Strikes_Back',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl',
	},
	{
		name: 'Return of the Jedi',
		era: CanonEra.empire,
		type: CanonType.skywalkerSagaFilm,
		timeline: 4,
		released: new Date('1983-05-25'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VI_Return_of_the_Jedi',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8',
	},
	{
		name: 'The Force Awakens',
		era: CanonEra.firstOrder,
		type: CanonType.skywalkerSagaFilm,
		timeline: 34.1,
		released: new Date('2015-12-18'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VII_The_Force_Awakens',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-force-awakens-episode-vii/1LEKJPDPeMr7',
	},
	{
		name: 'The Last Jedi',
		era: CanonEra.firstOrder,
		type: CanonType.skywalkerSagaFilm,
		timeline: 34.5,
		released: new Date('2017-12-15'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VIII_The_Last_Jedi',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-last-jedi-episode-viii/1nCWFK1pmAI0',
	},
	{
		name: 'The Rise of Skywalker',
		era: CanonEra.firstOrder,
		type: CanonType.skywalkerSagaFilm,
		timeline: 35,
		released: new Date('2019-12-20'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IX_The_Rise_of_Skywalker',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-rise-of-skywalker-episode-ix/5e8JThYwCYgw',
	},
	{
		name: 'Rogue One',
		era: CanonEra.empire,
		type: CanonType.film,
		timeline: -0.5,
		released: new Date('2016-12-15'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Rogue_One:_A_Star_Wars_Story',
		disneyPlus: 'https://www.disneyplus.com/movies/rogue-one-a-star-wars-story/14CV6eSbygOA',
	},
	{
		name: 'Solo',
		era: CanonEra.empire,
		type: CanonType.film,
		timeline: -10,
		released: new Date('2018-05-25'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Solo:_A_Star_Wars_Story',
		disneyPlus: 'https://www.disneyplus.com/movies/solo-a-star-wars-story/7ks3IYr1eU2P',
	},
	{
		name: 'The Clone Wars',
		era: CanonEra.republic,
		type: CanonType.film,
		timeline: -22.7,
		released: new Date('2008-08-14'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars_(film)',
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-clone-wars/AVmv1ulT1nQW',
	},
	{
		name: 'The Mandalorian',
		era: CanonEra.newRepublic,
		type: CanonType.show,
		timeline: 9,
		released: new Date('2019-11-12'),
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Mandalorian',
		disneyPlus: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
	},
	{
		name: 'The Book of Boba Fett',
		era: CanonEra.newRepublic,
		type: CanonType.show,
		timeline: 9.5,
		released: new Date('2021-12-29'),
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Book_of_Boba_Fett',
		disneyPlus: 'https://www.disneyplus.com/series/the-book-of-boba-fett/57TL7zLNu2wf',
	},
	{
		name: 'Obi-Wan Kenobi',
		era: CanonEra.empire,
		type: CanonType.show,
		timeline: -9.5,
		released: new Date('2022-05-27'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Obi-Wan_Kenobi_(television_series)',
		disneyPlus: 'https://www.disneyplus.com/series/obi-wan-kenobi/2JYKcHv9fRJb',
	},
	{
		name: 'Andor',
		era: CanonEra.empire,
		type: CanonType.show,
		timeline: -5.1,
		released: new Date('2022-08-31'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Andor_(television_series)',
	},
	{
		name: 'Ahsoka',
		era: CanonEra.newRepublic,
		type: CanonType.show,
		timeline: 9.7,
		released: null,
		wookieepedia: 'https://starwars.fandom.com/wiki/Ahsoka_(television_series)',
	},
	{
		name: 'The Acolyte',
		era: CanonEra.highRepublic,
		type: CanonType.show,
		timeline: -132,
		released: null,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Acolyte',
	},
	{
		name: 'Skeleton Crew',
		era: CanonEra.newRepublic,
		type: CanonType.show,
		timeline: 9.8,
		released: null,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Skeleton_Crew',
	},
	{
		name: 'The Clone Wars',
		era: CanonEra.republic,
		type: CanonType.show,
		timeline: -22.6,
		released: new Date('2008-10-03'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars',
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-the-clone-wars/1wYXzjabXGVZ',
	},
	{
		name: 'Rebels',
		era: CanonEra.empire,
		type: CanonType.show,
		timeline: -5,
		released: new Date('2014-10-13'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Rebels',
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-rebels/64MCZgAzY0Zw',
	},
	{
		name: 'Resistance',
		era: CanonEra.firstOrder,
		type: CanonType.show,
		timeline: 34,
		released: new Date('2018-10-07'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Resistance',
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-resistance/FQwsUthRSbnp',
	},
	{
		name: 'The Bad Batch',
		era: CanonEra.empire,
		type: CanonType.show,
		timeline: -19.5,
		released: new Date('2021-05-04'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Bad_Batch',
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-the-bad-batch/4gMliqFxxqXC',
	},
	{
		name: 'Jedi: Fallen Order',
		era: CanonEra.empire,
		type: CanonType.game,
		timeline: -14,
		released: new Date('2019-11-15'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Fallen_Order',
	},
	{
		name: 'Jedi: Survivor',
		era: CanonEra.empire,
		type: CanonType.game,
		timeline: -9,
		released: null,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Survivor',
	},
	{
		name: 'Squadrons',
		era: CanonEra.newRepublic,
		type: CanonType.game,
		timeline: 4.9,
		released: new Date('2020-10-02'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Squadrons',
	},
	{
		name: 'Battlefront II',
		era: CanonEra.newRepublic,
		type: CanonType.game,
		timeline: 4.5,
		released: new Date('2017-11-09'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Battlefront_II',
	},
	{
		name: 'Vader Immortal',
		era: CanonEra.empire,
		type: CanonType.game,
		timeline: -2,
		released: new Date('2019-05-21'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Vader_Immortal:_A_Star_Wars_VR_Series_%E2%80%93_Episode_I',
	},
	{
		name: "Tales from the Galaxy's Edge",
		era: CanonEra.firstOrder,
		type: CanonType.game,
		timeline: 34.6,
		released: new Date('2020-11-19'),
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Tales_from_the_Galaxy%27s_Edge',
	},
	{
		name: 'Into the Dark',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Into_the_Dark',
		timeline: -232.5,
		released: new Date('2021-02-02'),
	},
	{
		name: 'Light of the Jedi',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Light_of_the_Jedi',
		timeline: -232,
		released: new Date('2021-01-05'),
	},
	{
		name: 'The Rising Storm',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_The_Rising_Storm',
		timeline: -231.7,
		released: new Date('2021-06-29'),
	},
	{
		name: 'Out of the Shadows',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Out_of_the_Shadows',
		timeline: -231.5,
		released: new Date('2021-07-27'),
	},
	{
		name: 'Tempest Runner',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Tempest_Runner_(script)',
		timeline: -231,
		released: new Date('2022-03-15'),
	},
	{
		name: 'Midnight Horizon',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Midnight_Horizon',
		timeline: -230,
		released: new Date('2022-02-01'),
	},
	{
		name: 'The Fallen Star',
		era: CanonEra.highRepublic,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_The_Fallen_Star',
		timeline: -230.5,
		released: new Date('2022-01-04'),
	},
];

// https://starwars.fandom.com/wiki/List_of_books#Canon

export default Canon;
