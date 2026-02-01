// Importerar styling, pages, views och API-logik
import "./style.css";
import home from "./pages/home";
import header from "./views/header";
import footer from "./views/footer";
import { getWeather } from "./api/api";

// Root-element för hela applikationen
const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  // Main-element för sidans huvudinnehåll
  const main = document.createElement("main");

  app.appendChild(header()); // header
  app.appendChild(main); // main läggs i DOM
  app.appendChild(footer()); // footer
  main.appendChild(home()); // home visas INUTI main
  getWeather(); // API
}
