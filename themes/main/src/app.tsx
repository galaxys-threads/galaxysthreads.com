import Archive from "./scripts/archive";
import EasterEggs from "./scripts/easter-egg"
import ReactDOM from "react-dom/client";
import CanonGuide from "./pages/CanonGuide";

import "./styles/app.css"

interface App {
    Element: JSX.Element,
    Selector: string,
}

const apps: App[] = [
    {
        Selector: '.canon-guide',
        Element: <CanonGuide />
    },
];

document.addEventListener("DOMContentLoaded", function () {
    EasterEggs.print();
    Archive.replace();

    // Render the react apps
    for (const app of apps) {
        const elements = document.querySelectorAll(app.Selector)
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const root = ReactDOM.createRoot(element)
            root.render(app.Element)
        }
    }
});
