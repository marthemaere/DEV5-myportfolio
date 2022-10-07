export default class Weather{
    constructor(api_key){
        this.apiKey = api_key;

        if(localStorage.getItem("weather") && Date.now() - localStorage.getItem("weather__timestamp") < 600000){
            // get weather from localstorage
            const weatherData= JSON.parse(localStorage.getItem("weather"));
            this.displayWeather(weatherData);
            } else{
        this.getLocation();
    }
}

    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        }
        else{
            alert("Geolocation is not supported by this browser.");
        }
    }
       

    getWeather(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            // save to localstorage
            localStorage.setItem("weather", JSON.stringify(data));
            //save timestamp
            localStorage.setItem("weather_timestamp", Date.now());
            this.displayWeather(data);
        });
    }

        displayWeather(data){
        const temp = data.current.temp_c;
        document.querySelector(".weather__temp").innerText = temp +"°C";

        const weather = data.current.condition.text;
        document.querySelector(".weather__summary").innerText = weather;

        // add location
        const location = data.location.name;
        document.querySelector(".weather__location").innerText = location;

        const icon = data.current.condition.icon;
        //create an image element
        const img = document.createElement("img");
        img.src = icon;
        document.querySelector(".weather__icon").appendChild(img);

        if(weather.toLowerCase().includes("sunny")){
            this.getCharmander();
            document.querySelector(".charmander").classList.remove("hidden");}
            else if(weather.toLowerCase().includes("cloudy")){
            this.getSwablu();
            document.querySelector(".swablu").classList.remove("hidden");}
            else if(weather.toLowerCase().includes("rainy")){
            this.getWooper();
            document.querySelector(".wooper").classList.remove("hidden");}
            else if(weather.toLowerCase().includes("snow")){
            this.getCubchoo();
            document.querySelector(".cubchoo").classList.remove("hidden");}
            else if (weather.toLowerCase().includes("clear")){
            this.getSnorlax();
            document.querySelector(".snorlax").classList.remove("hidden");}

    };

    getWooper() {
        const url =`https://pokeapi.co/api/v2/pokemon/wooper`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.displayPokemon(data);
            console.log(data.name);
        });
    }

    getCharmander() {
        const url =`https://pokeapi.co/api/v2/pokemon/charmander`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.displayPokemon(data);
            console.log(data.name);
        });
    }

    getCubchoo() {
        const url =`https://pokeapi.co/api/v2/pokemon/cubchoo`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.displayPokemon(data);
            console.log(data.name);
        });
    }

    getSwablu() {
        const url =`https://pokeapi.co/api/v2/pokemon/swablu`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.displayPokemon(data);
            console.log(data.name);
        });
    }

    getSnorlax() {
        const URL =`https://pokeapi.co/api/v2/pokemon/snorlax`;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.displayPokemon(data);
            console.log(data.name);
        });
    }    

     displayPokemon(data){
         let name = data.name;
         document.querySelector(".pokemon__name").innerText = name;
         console.log(name);
    }
}