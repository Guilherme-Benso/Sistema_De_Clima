const apiKey = "34ef722f9693ef4a86146c2ab474f4f5";
const apiCountryURL = "https://countryflagsapi.com/png/";


const cityInput = document.querySelector("#cidade");
const pesquisa = document.querySelector("#pesquisar");


const cityElement = document.querySelector("#cidade");
const tempElement = document.querySelector("#temperatura span");
const descriptionlement = document.querySelector("#descricao");
const weatherIconElement = document.querySelector("#weather-icon");
const PaisElement = document.querySelector("#pais");
const umidadeElement = document.querySelector("#umidade");
const windElement = document.querySelector("#wind span");


const getWeatherData = async(cidade)=>{
    const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br';
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
}


const showWeatherData = (cidade)=>{
    apiWeatherURL(cidade);
}



pesquisa.addEventListener("click",(e)=>{
    e.preventDefault;
    const cidade = cityInput.value;

})