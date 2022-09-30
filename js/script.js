const apiKey = "34ef722f9693ef4a86146c2ab474f4f5";
const apiCountryURL = "https://countryflagsapi.com/png/";


const cityInput = document.querySelector("#input-cidade");
const pesquisa = document.querySelector("#pesquisar");


const cityElement = document.querySelector("#cidade");
const tempElement = document.querySelector("#temperatura span");
const descriptionlement = document.querySelector("#descricao");
const weatherIconElement = document.querySelector("#weather-icon");
const PaisElement = document.querySelector("#pais");
const umidadeElement = document.querySelector("#umidade");
const windElement = document.querySelector("#wind span");


const getWeatherData = async(cidade)=>{
    const apiWeathrURL = 'https://api.openweathermap.org/data/3.0/onecall?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_bt';
    
}


const showWeatherData = (cidade)=>{

}



pesquisa.addEventListener("click",(e)=>{
    e.preventDefault;
    

    const cidade = cityInput.value;

    console.log(cidade);
})