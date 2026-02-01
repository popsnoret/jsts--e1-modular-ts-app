// Skapar och visar ett kvitto baserat på valt godis
export default function kvitto(valtGodis: HTMLUListElement) {
  const popup = document.createElement("div");
  popup.className = "kvitto-popup";

  const box = document.createElement("div");
  box.className = "kvitto-box";

  // butikens namn och datum
  const butik = document.createElement("p");
  butik.textContent = "Godispåsen";
  box.appendChild(butik);

  const datum = document.createElement("p");
  datum.textContent = new Date().toLocaleString();
  box.appendChild(datum);

  const linje1 = document.createElement("hr");
  box.appendChild(linje1);

  // rubrik
  const rubrik = document.createElement("h2");
  rubrik.textContent = "Kvitto";
  box.appendChild(rubrik);

  // öista med valt godis
  const lista = document.createElement("ul");
  let totaltAntal = 0;

  valtGodis.querySelectorAll("li").forEach((rad) => {
    const li = document.createElement("li");
    li.textContent = rad.textContent || "";
    lista.appendChild(li);

    // plockar ut siffran efter "x"
    const delar = rad.textContent?.split(" x ");
    if (delar && delar[1]) {
      totaltAntal += Number(delar[1]);
    }
  });

  box.appendChild(lista);

  const linje2 = document.createElement("hr");
  box.appendChild(linje2);

  // totalt antal
  const totalText = document.createElement("p");
  totalText.textContent = `Totalt antal: ${totaltAntal} st`;
  box.appendChild(totalText);

  // avslutande text
  const tack = document.createElement("p");
  tack.textContent = "Tack för ditt köp!";
  box.appendChild(tack);

  // stänger popupen
  const stängBtn = document.createElement("button");
  stängBtn.textContent = "Stäng";
  stängBtn.onclick = () => popup.remove();

  box.appendChild(stängBtn);
  popup.appendChild(box);
  document.body.appendChild(popup);
}
