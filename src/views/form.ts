// Form-view där användaren kan skicka synpunkter eller frågor
import { thankYouView } from "./typage";
import { addToCart } from "../store/store";

export default function form() {
  const form = document.createElement("form");
  form.classList.add("form");

  const rubrik = document.createElement("h2");
  rubrik.textContent = "Synpunkter eller frågor?";
  form.appendChild(rubrik);

  const textruta = document.createElement("textarea");
  textruta.placeholder = "Skriv dina synpunkter här...";
  form.appendChild(textruta);

  const skickaBtn = document.createElement("button");
  skickaBtn.type = "submit";
  skickaBtn.textContent = "Skicka";
  form.appendChild(skickaBtn);

  // Hanterar formulärets submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Sparar att formuläret har skickats
    addToCart("kontaktmeddelande");

    // Byter innehåll i main till tack-sida
    const main = document.querySelector("main");
    if (!main) return;

    main.innerHTML = "";
    main.appendChild(thankYouView());
  });

  return form;
}
