export default function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  // Innehåller plats för väder samt en informationsrad
  footer.innerHTML = `
      <div id="weather"></div>  
    <p>Håll ut, fler godissorter kommer inom kort</p>

  `;

  return footer;
}
