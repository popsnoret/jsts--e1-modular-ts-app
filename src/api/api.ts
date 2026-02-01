// Hämtar väderdata från Open-Meteo API och uppdaterar DOM med aktuell temperatur i Stockholm
export async function getWeather(): Promise<void> {
  const url = "https://api.open-meteo.com/v1/forecast" + "?latitude=59.3293" + "&longitude=18.0686" + "&current=temperature_2m" + "&timezone=Europe/Stockholm";

  const response = await fetch(url);
  const data = await response.json();

  const weatherEl = document.getElementById("weather");
  if (!weatherEl) return;

  const temp = Math.round(data.current.temperature_2m);

  weatherEl.textContent = `Stockholm: ${temp} °C`;
}
