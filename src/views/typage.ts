// View som visas efter att formuläret har skickats
import button from "../components/button.ts";
import home from "../pages/home.ts";
import { cartCount } from "../store/store.ts";

export function thankYouView(): HTMLElement {
  const container = document.createElement("section");
  container.classList.add("thank-you-message");

  const title = document.createElement("h2");
  title.textContent = "Ditt meddelande är skickat!";

  const text = document.createElement("p");
  text.textContent = "Tack för att du hör av dig, vi återkommer så snart vi kan!";

  const countText = document.createElement("p");
  countText.textContent = `Antal skickade meddelanden: ${cartCount()}`;
  container.appendChild(countText);

  // Knapp som tar användaren tillbaka till startsidan
  const tillbakaKnapp = button("Tillbaka");

  tillbakaKnapp.addEventListener("click", () => {
    const main = document.querySelector("main");
    if (!main) return;

    main.innerHTML = "";
    main.appendChild(home());
  });

  container.append(title, text, countText, tillbakaKnapp);
  return container;
}
