function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    temperatureElement.innerHTML=response.data.temperature.current;
}

function searchCity (city){
   let apiKey="7707b06c4614a73o5b83t0498f30e5af";
   //let apiUrl=  ' https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey} ' ;
    let apiUrl=    'https://api.shecodes.io/weather/v1/current?query=${city}&key=7707b06c4614a73o5b83t0498f30e5af&units=metric"'
    axios.get(apiUrl).then(refreshWeather);
}


function handlesearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
   let cityElement=document.querySelector("#city");
   cityElement.innerHTML=searchInput.value;
   searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesearchSubmit);