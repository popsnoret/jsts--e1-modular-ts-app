// Importerar data, typdefinition och knapp-komponent
import { godisLista } from "../data/godis";
import type { GodisType } from "./types";
import Button from "./button";

// Skapar och returnerar en lista med godis som går att lägga till i valtGodis
export default function GodisLista(valtGodis: HTMLUListElement, totalText: HTMLParagraphElement) {
  const lista = document.createElement("ul");
  lista.className = "godislista";

  // Loopar igenom all godisdata
  godisLista.forEach((godis: GodisType) => {
    const li = document.createElement("li");
    li.className = "godis-rad";

    // Visar godisnamn
    const text = document.createElement("span");
    text.textContent = godis.name;
    text.style.marginRight = "8px";
    li.appendChild(text);

    // Knapp som lägger till godis
    const knapp = Button("Lägg till", () => {
      // Kollar om godiset redan finns i listan
      const redanValt = valtGodis.querySelector<HTMLLIElement>(`li[data-id="${godis.id}"]`);
      if (redanValt) {
        // ökar siffran om godis redan finns
        const current = Number(redanValt.dataset.count || "0");
        const nySiffra = current + 1;

        redanValt.dataset.count = String(nySiffra);
        redanValt.textContent = `${godis.name} x ${nySiffra}`;
      } else {
        // skapa ny rad om godis inte finns
        const nytt = document.createElement("li");
        nytt.dataset.id = String(godis.id);
        nytt.dataset.count = "1";
        nytt.textContent = `${godis.name} x 1`;
        valtGodis.appendChild(nytt);
      }

      // Räknar totalt antal godisar i valtGodis
      const total = Array.from(valtGodis.querySelectorAll("li")).reduce((sum, li) => sum + Number(li.dataset.count || 0), 0);

      // Uppdaterar texten med totalen
      totalText.textContent = `Totalt antal godisar i påsen: ${total}`;
    });

    li.appendChild(knapp);
    lista.appendChild(li);
  });

  return lista;
}
