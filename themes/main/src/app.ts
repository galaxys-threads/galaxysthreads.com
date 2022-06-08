import Archive from "./scripts/archive";
import EasterEggs from "./scripts/easter-egg"

import "./styles/app.css"

document.addEventListener("DOMContentLoaded", function () {
    EasterEggs.print();
    Archive.replace();
});
