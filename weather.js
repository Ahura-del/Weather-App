class Weather{
    constructor(city){
        this.key = '2ae5cc1a189e4199acb88486412a4d94';
        this.city = city;
    }

    async getWeather(){
        let responseWeather = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.key}`)
        let weatherData = await responseWeather.json();
        return weatherData;
    }

    getCity(city){
       this.city = city
    }
}