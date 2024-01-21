const apiKey="2a8db7031d1b4bf5e5d483cfb22e1b55";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//using openweather api

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
   

   
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
//error message displays on 404 error (invalid input)
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".lat").innerHTML= data.coord.lat ;
        document.querySelector(".lon").innerHTML= data.coord.lon ;
    
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
    
        let weatherIcon= document.querySelector(".weatherIcon");
    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }

    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
//error message doesn't display on valid input
      
};
}
   
     
    const searchBtn=document.querySelector(".searchBtn");
    searchBtn.addEventListener("click", function(){
       const searchText= document.querySelector(".searchText");
       checkWeather(searchText.value);


    });

