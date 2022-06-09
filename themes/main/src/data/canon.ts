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
    if (timeline < 0) {
        return `${timeline * -1} BBY`
    }

    if (timeline > 0) {
        return `${timeline} ABY`
    }

    return "0 BBY / 0 ABY"
}

const Canon: CanonEntry[] = [
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
];

export default Canon
