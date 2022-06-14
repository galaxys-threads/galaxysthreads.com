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
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-phantom-menace-episode-i/2ezYynkgW1AH',
		era: CanonEra.republic,
		name: 'The Phantom Menace',
		released: new Date('1999-05-19'),
		timeline: -32,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_I_The_Phantom_Menace',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-attack-of-the-clones-episode-ii/mgpYHGnzZW6N',
		era: CanonEra.republic,
		name: 'Attack of the Clones',
		released: new Date('2002-05-16'),
		timeline: -22.8,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_II_Attack_of_the_Clones',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-revenge-of-the-sith-episode-iii/4WvbqLFumNvi',
		era: CanonEra.republic,
		name: 'Revenge of the Sith',
		released: new Date('2005-05-19'),
		timeline: -19.9,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_III_Revenge_of_the_Sith',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
		era: CanonEra.empire,
		name: 'A New Hope',
		released: new Date('1977-05-25'),
		timeline: 0,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IV_A_New_Hope',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl',
		era: CanonEra.empire,
		name: 'The Empire Strikes Back',
		released: new Date('1980-05-12'),
		timeline: 3,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_V_The_Empire_Strikes_Back',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8',
		era: CanonEra.empire,
		name: 'Return of the Jedi',
		released: new Date('1983-05-25'),
		timeline: 4,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VI_Return_of_the_Jedi',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-force-awakens-episode-vii/1LEKJPDPeMr7',
		era: CanonEra.firstOrder,
		name: 'The Force Awakens',
		released: new Date('2015-12-18'),
		timeline: 34.1,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VII_The_Force_Awakens',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-last-jedi-episode-viii/1nCWFK1pmAI0',
		era: CanonEra.firstOrder,
		name: 'The Last Jedi',
		released: new Date('2017-12-15'),
		timeline: 34.5,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_VIII_The_Last_Jedi',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-rise-of-skywalker-episode-ix/5e8JThYwCYgw',
		era: CanonEra.firstOrder,
		name: 'The Rise of Skywalker',
		released: new Date('2019-12-20'),
		timeline: 35,
		type: CanonType.skywalkerSagaFilm,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Episode_IX_The_Rise_of_Skywalker',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/rogue-one-a-star-wars-story/14CV6eSbygOA',
		era: CanonEra.empire,
		name: 'Rogue One',
		released: new Date('2016-12-15'),
		timeline: -0.5,
		type: CanonType.film,
		wookieepedia: 'https://starwars.fandom.com/wiki/Rogue_One:_A_Star_Wars_Story',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/solo-a-star-wars-story/7ks3IYr1eU2P',
		era: CanonEra.empire,
		name: 'Solo',
		released: new Date('2018-05-25'),
		timeline: -10,
		type: CanonType.film,
		wookieepedia: 'https://starwars.fandom.com/wiki/Solo:_A_Star_Wars_Story',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/movies/star-wars-the-clone-wars/AVmv1ulT1nQW',
		era: CanonEra.republic,
		name: 'The Clone Wars',
		released: new Date('2008-08-14'),
		timeline: -22.7,
		type: CanonType.film,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars_(film)',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
		era: CanonEra.newRepublic,
		name: 'The Mandalorian',
		released: new Date('2019-11-12'),
		timeline: 9,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Mandalorian',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/the-book-of-boba-fett/57TL7zLNu2wf',
		era: CanonEra.newRepublic,
		name: 'The Book of Boba Fett',
		released: new Date('2021-12-29'),
		timeline: 9.5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Book_of_Boba_Fett',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/obi-wan-kenobi/2JYKcHv9fRJb',
		era: CanonEra.empire,
		name: 'Obi-Wan Kenobi',
		released: new Date('2022-05-27'),
		timeline: -9.5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Obi-Wan_Kenobi_(television_series)',
	},
	{
		era: CanonEra.empire,
		name: 'Andor',
		released: new Date('2022-08-31'),
		timeline: -5.1,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Andor_(television_series)',
	},
	{
		era: CanonEra.newRepublic,
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
		timeline: -132,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_Acolyte',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Skeleton Crew',
		released: null,
		timeline: 9.8,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Skeleton_Crew',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-the-clone-wars/1wYXzjabXGVZ',
		era: CanonEra.republic,
		name: 'The Clone Wars',
		released: new Date('2008-10-03'),
		timeline: -22.6,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Clone_Wars',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-rebels/64MCZgAzY0Zw',
		era: CanonEra.empire,
		name: 'Rebels',
		released: new Date('2014-10-13'),
		timeline: -5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Rebels',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-resistance/FQwsUthRSbnp',
		era: CanonEra.firstOrder,
		name: 'Resistance',
		released: new Date('2018-10-07'),
		timeline: 34,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Resistance',
	},
	{
		disneyPlus: 'https://www.disneyplus.com/series/star-wars-the-bad-batch/4gMliqFxxqXC',
		era: CanonEra.empire,
		name: 'The Bad Batch',
		released: new Date('2021-05-04'),
		timeline: -19.5,
		type: CanonType.show,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_The_Bad_Batch',
	},
	{
		era: CanonEra.empire,
		name: 'Jedi: Fallen Order',
		released: new Date('2019-11-15'),
		timeline: -14,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Fallen_Order',
	},
	{
		era: CanonEra.empire,
		name: 'Jedi: Survivor',
		released: null,
		timeline: -9,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Survivor',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Squadrons',
		released: new Date('2020-10-02'),
		timeline: 4.9,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Squadrons',
	},
	{
		era: CanonEra.newRepublic,
		name: 'Battlefront II',
		released: new Date('2017-11-09'),
		timeline: 4.5,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars_Battlefront_II',
	},
	{
		era: CanonEra.empire,
		name: 'Vader Immortal',
		released: new Date('2019-05-21'),
		timeline: -2,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Vader_Immortal:_A_Star_Wars_VR_Series_%E2%80%93_Episode_I',
	},
	{
		era: CanonEra.firstOrder,
		name: "Tales from the Galaxy's Edge",
		released: new Date('2020-11-19'),
		timeline: 34.6,
		type: CanonType.game,
		wookieepedia: 'https://starwars.fandom.com/wiki/Star_Wars:_Tales_from_the_Galaxy%27s_Edge',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Into the Dark',
		released: new Date('2021-02-02'),
		timeline: -232.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Into_the_Dark',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Light of the Jedi',
		released: new Date('2021-01-05'),
		timeline: -232,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Light_of_the_Jedi',
	},
	{
		era: CanonEra.highRepublic,
		name: 'The Rising Storm',
		released: new Date('2021-06-29'),
		timeline: -231.7,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_The_Rising_Storm',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Out of the Shadows',
		released: new Date('2021-07-27'),
		timeline: -231.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Out_of_the_Shadows',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Tempest Runner',
		released: new Date('2022-03-15'),
		timeline: -231,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Tempest_Runner_(script)',
	},
	{
		era: CanonEra.highRepublic,
		name: 'Midnight Horizon',
		released: new Date('2022-02-01'),
		timeline: -230,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_Midnight_Horizon',
	},
	{
		era: CanonEra.highRepublic,
		name: 'The Fallen Star',
		released: new Date('2022-01-04'),
		timeline: -230.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/The_High_Republic:_The_Fallen_Star',
	},
	{
		era: CanonEra.republic,
		name: 'Master & Apprentice',
		released: new Date('2019-04-16'),
		timeline: -40,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Master_%26_Apprentice',
	},
	{
		era: CanonEra.republic,
		name: "Queen's Peril",
		released: new Date('2020-06-02'),
		timeline: -32.8,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Peril',
	},
	{
		era: CanonEra.republic,
		name: "Queen's Shadow",
		released: new Date('2019-03-05'),
		timeline: -28,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Shadow',
	},
	{
		era: CanonEra.republic,
		name: 'Dooku: Jedi Lost',
		released: new Date('2019-10-01'),
		timeline: -32.9,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Dooku:_Jedi_Lost_(script)',
	},
	{
		era: CanonEra.republic,
		name: "Queen's Hope",
		released: new Date('2022-01-25'),
		timeline: -22.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Queen%27s_Hope',
	},
	{
		era: CanonEra.republic,
		name: 'Brotherhood',
		released: new Date('2022-05-10'),
		timeline: -22.4,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Brotherhood',
	},
	{
		era: CanonEra.republic,
		name: 'Catalyst',
		released: new Date('2016-11-15'),
		timeline: -21,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Catalyst:_A_Rogue_One_Novel',
	},
	{
		era: CanonEra.republic,
		name: 'Dark Disciple',
		released: new Date('2015-07-07'),
		timeline: -19.2,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Dark_Disciple',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Chaos Rising',
		released: new Date('2020-09-01'),
		timeline: -19,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Chaos_Rising',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Greater Good',
		released: new Date('2021-04-27'),
		timeline: -18.5,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Greater_Good',
	},
	{
		era: CanonEra.republic,
		name: 'Thrawn Ascendancy: Lesser Evil',
		released: new Date('2021-11-16'),
		timeline: -18.4,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn_Ascendancy:_Lesser_Evil',
	},
	{
		era: CanonEra.empire,
		name: 'Ahsoka',
		released: new Date('2017-10-03'),
		timeline: -18,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Ahsoka_(novel)',
	},
	{
		era: CanonEra.empire,
		name: 'Thrawn',
		released: new Date('2017-04-11'),
		timeline: -16,
		type: CanonType.book,
		wookieepedia: 'https://starwars.fandom.com/wiki/Thrawn_(novel)',
	},
];

// {
// 	era: CanonEra.empire,
// 	name: '',
// 	released: new Date(''),
// 	timeline: 0,
// 	type: CanonType.book,
// 	wookieepedia: '',
// },

// https://starwars.fandom.com/wiki/List_of_books#Canon

export default Canon;
