const apiKey = "a1ca72b28e4bd5a5104e3a8ba9add82a"; 
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("errorMsg");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    buscarClima(city);
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

async function buscarClima(cidade) {
  loading.classList.remove("hidden");
  errorMsg.classList.add("hidden");
  weatherResult.classList.add("hidden");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();
    exibirClima(data);

  } catch (error) {
    errorMsg.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}

  {function exibirClima(data) {
  document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("feelsLike").textContent = `Sensação térmica: ${Math.round(data.main.feels_like)}°C`;
  document.getElementById("humidity").textContent = `Umidade: ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Vento: ${data.wind.speed} m/s`;

  const iconCode = data.weather[0].icon;

  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  atualizarFundo(iconCode);

  weatherResult.classList.remove("hidden");
}

}
const unsplashKey = "_l2l-a_eRetq8w3oxjBihyhkJNrTpvkHNpbtdx30gy0";

const climaKeywords = {
  "01": "sunny-sky",
  "02": "partly-cloudy-sky",
  "03": "cloudy-sky",
  "04": "overcast-sky",
  "09": "rain-drizzle",
  "10": "rainy-day",
  "11": "thunderstorm",
  "13": "snow-landscape",
  "50": "foggy-morning"
};

async function atualizarFundo(codigo) {
  const prefixo = codigo.substring(0, 2);
  const keyword = climaKeywords[prefixo] || "sky";

  const url = `https://api.unsplash.com/photos/random?query=${keyword}&orientation=portrait&client_id=${unsplashKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const imagemUrl = data.urls.regular;

    document.body.style.backgroundImage = `url('${imagemUrl}')`;
  } catch (error) {
    console.log("Erro ao carregar imagem de fundo:", error);
  }}