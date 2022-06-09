import Archive from "./scripts/archive";
import EasterEggs from "./scripts/easter-egg"
import ReactDOM from "react-dom/client";
import CanonGuide from "./pages/CanonGuide";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./styles/app.css"


document.addEventListener("DOMContentLoaded", function () {
    EasterEggs.print();
    Archive.replace();

    const app = document.getElementById("app");
    if (app) {
        const root = ReactDOM.createRoot(app);
        root.render(
            <BrowserRouter>
                <Routes>
                    <Route path="/guides/canon-guide/" element={<CanonGuide />} />
                </Routes>
            </BrowserRouter>
        );
    }
});
