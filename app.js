
let storage = new Store();
let city = storage.getCityFromLS();
let weather = new Weather(city);
let ui = new UI();

document.addEventListener("DOMContentLoaded" , e =>{
    loadWeather()
})
document.querySelector("#save-change").addEventListener('click' , changeCity);

function loadWeather(){
    weather.getWeather().then(data =>{
        ui.getData(data)
    
    }).catch(err=>{console.log(err)})
}

function changeCity(){
    let city = document.querySelector('#city').value;
    weather.getCity(city.toLowerCase());
    loadWeather()
    $("#cityModal").modal('hide');
    storage.setCityFromLS(city)

}