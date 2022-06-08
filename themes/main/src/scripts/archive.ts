interface ArchiveEntry {
    matcher: RegExp;
    disneyPlus?: string;
    wookieepedia?: string;
}


const ArchiveDatabank: ArchiveEntry[] = [
    {
        matcher: /Jedi: Fallen Order/g,
        wookieepedia: "https://starwars.fandom.com/wiki/Star_Wars_Jedi:_Fallen_Order",
    },
    {
        matcher: /Purge Trooper(s)?/g,
        wookieepedia: "https://starwars.fandom.com/wiki/Purge_Trooper",
    },
    {
        matcher: /Tera Sinube/g,
        wookieepedia: "https://starwars.fandom.com/wiki/Tera_Sinube",
    },
    {
        matcher: /T-47/g,
        wookieepedia: "https://starwars.fandom.com/wiki/T-47_airspeeder",
    },
];

export default class Archive {
    public static replace(): void {
        const contents = document.querySelectorAll('.content');
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i];
            for (const archiveEntry of ArchiveDatabank) {
                content.innerHTML = content.innerHTML.replaceAll(archiveEntry.matcher, function (foundText: string): string {
                    return `<a href='${archiveEntry.wookieepedia}'>${foundText}</a>`;
                });
            }
        }
    }
}
