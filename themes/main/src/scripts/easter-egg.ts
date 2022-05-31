export default class EasterEggs {
    private static style = `
        color:dodgerblue;
        font-size:50px;
        font-family: "Aurebeshh AF", sans-serif;
    `;

    public static print(): void {
        this.log("Hello there.")
        this.log("General Kenobi!")
    }

    private static log(message: string): void {
        console.log("%c%s", this.style, message);
    }
}
