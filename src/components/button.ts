// Återanvändbar knapp-komponent med valfri klick-funktion
export default function Button(text: string, onClick?: () => void) {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.type = "button";
  btn.textContent = text;

  if (onClick) {
    btn.onclick = () => {
      console.log("Button: klick registrerat"); // debug
      onClick();
    };
  } else {
    btn.onclick = () => console.log("Button: klick, ingen callback");
  }

  return btn;
}
