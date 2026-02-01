import home from "../pages/home";
import form from "../views/form";

export default function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
    <h1>Godispåsen</h1>
    
  `;

  const nav = document.createElement("nav");

  const hem = document.createElement("a");
  hem.href = "#";
  hem.textContent = "Home";

  const kontakt = document.createElement("a");
  kontakt.href = "#";
  kontakt.textContent = "Kontakt";

  nav.appendChild(hem);
  nav.appendChild(kontakt);
  header.appendChild(nav);

  hem.addEventListener("click", (click) => {
    click.preventDefault();
    const main = document.querySelector("main");
    if (!main) return;

    main.innerHTML = "";
    main.appendChild(home());
  });

  kontakt.addEventListener("click", (click) => {
    click.preventDefault();
    const main = document.querySelector("main");
    if (!main) return;

    main.innerHTML = "";
    main.appendChild(form());
  });

  return header;
}
