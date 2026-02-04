// Startsida som bygger upp layouten och kopplar ihop komponenter
import godisLista from "../components/godislista";
import Button from "../components/button";
import kvitto from "../components/kvitto";
import { cartCount } from "../store/store";

export default function home() {
  const div = document.createElement("div");

  // rubrik och info
  const title = document.createElement("h2");
  title.textContent = "Välkommen till Godispåsen!";
  div.appendChild(title);

  const info = document.createElement("p");
  info.textContent = "Välj ditt favoritgodis från listan till vänster och se ditt valda godis i kolumnen till höger. När du är redo kan du visa ditt kvitto!";
  div.appendChild(info);

  // wrapper med två kolumner
  const wrapper = document.createElement("div");
  wrapper.className = "kolumner";
  div.appendChild(wrapper);

  // VÄNSTER kolumn: valt godis
  const vänster = document.createElement("div");

  const subtitel = document.createElement("h3");
  subtitel.textContent = "Valt godis";
  vänster.appendChild(subtitel);

  const valtGodis = document.createElement("ul");
  valtGodis.id = "valt-godis";
  vänster.appendChild(valtGodis);

  // Knapp som visar kvitto i popup
  const visaKvittoBtn = Button("Visa kvitto", () => {
    console.log("kvitto(): anropad", valtGodis);
    console.log("kvitGodis innehåll:", valtGodis?.innerHTML);
    kvitto(valtGodis);
    visaKvittoBtn.classList.add("action-btn");
  });
  vänster.appendChild(visaKvittoBtn);

  // Knapp som rensar vald lista och återställer totalen
  const rensaBtn = Button("Rensa", () => {
    valtGodis.innerHTML = "";
    totalText.textContent = "Totalt antal godisar i påsen: 0";
  });

  rensaBtn.classList.add("rensa-btn");

  vänster.appendChild(rensaBtn);

  // HÖGER kolumn: tillgängligt godis
  const totalText = document.createElement("p");
  totalText.className = "total-godis";
  totalText.textContent = `Totalt antal godisar i påsen: ${cartCount()}`;
  div.appendChild(totalText);

  const höger = document.createElement("div");
  const lista = godisLista(valtGodis, totalText);
  höger.appendChild(lista);

  wrapper.appendChild(höger);
  wrapper.appendChild(vänster);

  return div;
}
