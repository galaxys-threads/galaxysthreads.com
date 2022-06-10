export enum CanonType {
    skywalkerSagaFilm = "Skywalker Saga Film",
    film = "Film",
    game = "Video Game",
    show = "TV Show",
    book = "Novel",
}

export enum CanonEra {
    highRepublic = "The High Republic",
    republic = "The Republic",
    empire = "The Empire",
    newRepublic = "The New Republic",
    firstOrder = "The First Order",
}

export interface CanonEntry {
    name: string,
    type: CanonType,
    disneyPlus?: string,
    wookieepedia: string,
    released: Date,
    timeline: number,
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

    return "0 BBY / 0 ABY"
}

const Canon: CanonEntry[] = [
    {
        name: "The Phantom Menace",
        type: CanonType.skywalkerSagaFilm,
        timeline: -32,
        released: new Date("1999-05-19"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_I_The_Phantom_Menace",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-the-phantom-menace-episode-i/2ezYynkgW1AH",
    },
    {
        name: "Attack of the Clones",
        type: CanonType.skywalkerSagaFilm,
        timeline: -22,
        released: new Date("2002-05-16"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_II_Attack_of_the_Clones",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-attack-of-the-clones-episode-ii/mgpYHGnzZW6N",
    },
    {
        name: "Revenge of the Sith",
        type: CanonType.skywalkerSagaFilm,
        timeline: -19,
        released: new Date("1999-05-19"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_III_Revenge_of_the_Sith",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-revenge-of-the-sith-episode-iii/4WvbqLFumNvi",
    },
    {
        name: "A New Hope",
        type: CanonType.skywalkerSagaFilm,
        timeline: 0,
        released: new Date("1977-05-25"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_IV_A_New_Hope",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ",
    },
    {
        name: "The Empire Strikes Back",
        type: CanonType.skywalkerSagaFilm,
        timeline: 3,
        released: new Date("1980-05-12"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_V_The_Empire_Strikes_Back",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl",
    },
    {
        name: "Return of the Jedi",
        type: CanonType.skywalkerSagaFilm,
        timeline: 4,
        released: new Date("1983-05-25"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_VI_Return_of_the_Jedi",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8",
    },
    {
        name: "The Force Awakens",
        type: CanonType.skywalkerSagaFilm,
        timeline: 34,
        released: new Date("2015-12-18"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_VII_The_Force_Awakens",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-the-force-awakens-episode-vii/1LEKJPDPeMr7",
    },
    {
        name: "The Last Jedi",
        type: CanonType.skywalkerSagaFilm,
        timeline: 34.5,
        released: new Date("2017-12-15"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_VIII_The_Last_Jedi",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-the-last-jedi-episode-viii/1nCWFK1pmAI0",
    },
    {
        name: "The Rise of Skywalker",
        type: CanonType.skywalkerSagaFilm,
        timeline: 35,
        released: new Date("2019-12-20"),
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars:_Episode_IX_The_Rise_of_Skywalker",
        disneyPlus: "https://www.disneyplus.com/movies/star-wars-the-rise-of-skywalker-episode-ix/5e8JThYwCYgw",
    },
    {
        name: "Rogue One",
        type: CanonType.film,
        timeline: -0.5,
        released: new Date("2016-12-15"),
        wookieepedia: "https://starwars.fandom.com/wiki/Rogue_One:_A_Star_Wars_Story",
        disneyPlus: "https://www.disneyplus.com/movies/rogue-one-a-star-wars-story/14CV6eSbygOA",
    },
];

export default Canon
