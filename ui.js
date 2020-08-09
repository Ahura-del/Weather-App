class UI{
    constructor(){
        this.W_location = document.querySelector("#location");
        this.W_condition = document.querySelector("#condition");
        this.W_image = document.querySelector(".image-icon");
        this.W_temp = document.querySelector("#temp");
        this.W_visiblity = document.querySelector("#visiblity");
        this.W_humidity = document.querySelector("#humidity");
        this.W_feels = document.querySelector("#feels-like");
        this.W_wind = document.querySelector("#wind-spd");
    }


    getData(weatherData){
        this.W_location.textContent = `${weatherData.data[0].city_name}`;
        this.W_condition.textContent = `${weatherData.data[0].weather.description}`;
        this.W_image.setAttribute('src' , `https://www.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`);
        this.W_temp.textContent = `Temp : ${weatherData.data[0].temp} \u00b0C`;
        this.W_wind.textContent = `Wind Speed : ${weatherData.data[0].wind_spd} m/s`
        this.W_visiblity.textContent = `Visibility : ${weatherData.data[0].vis} KM`
        this.W_humidity.textContent = `Humidity : ${weatherData.data[0].rh} %`;
        this.W_feels.textContent = `Feels Temp : ${weatherData.data[0].app_temp}\u00b0C`;
    }

    
}