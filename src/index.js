function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city")
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windSpeedElement=document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date=new Date(response.data.time*1000);
    let iconElement=document.querySelector("#icon");





    iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`
     
     timeElement.innerHTML=formatDate(date);
      cityElement.innerHTML=response.data.city;
     descriptionElement.innerHTML=response.data.condition.description;
     humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
     windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
     temperatureElement.innerHTML= Math.round(temperature);
}

        function formatDate(date){
           
            let minutes=date.getMinutes();
            let hours=date.getHours();
             let days=[

               "Sunday" ,
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday",

        ];
    
           let day=days[date.getDay()];
         if (minutes<10)
         
        {
            minutes=`0${minutes}`;
        }

    return`${day} ${hours}:${minutes}`;
    }





function searchCity (city){
   let apiKey="7707b06c4614a73o5b83t0498f30e5af";
   let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
searchCity("Pretoria");