import dummyData from './dummyData.js';

class WeatherApp {
    constructor() {
        this.baseUri = 'openweathermap.org/';
        // this.appKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        this.town = 'London';
        this.newTown = '';
        this.displayedLocation = '';
        this.description = '';
        this.icon = '';
        this.values = {
            currentTemp: '',
            minTemp: '',
            maxTemp: '',
        };
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.dummyData = dummyData.values;
    }

    formatTemperature = temperature => Math.round(temperature);

    formatTown = town => town.toLowerCase().replace(' ', '+');

    getWeather = async townName => {
        try {
            // const result = await fetch(`https://api.${this.baseUri}data/2.5/weather?q=${townName}&units=metric&appid=${this.appKey}`);
            // const data = await result.json();

            // Using dummy data taken on 8th Feb 2021 to allow the app to run without an api key
            const data = this.dummyData[townName];

            this.displayedLocation = data.name;
            this.description = data.weather[0].description;
            this.icon = data.weather[0].icon;
            this.values.currentTemp = this.formatTemperature(data.main.temp);
            this.values.minTemp = this.formatTemperature(data.main.temp_min);
            this.values.maxTemp = this.formatTemperature(data.main.temp_max);
        } catch (error) {
            console.log(error);
            document.querySelector('h1').textContent = 'Sorry, couldn\'t find this town';
        }
    }

    getDateToday = () => {
        const dateToday = new Date();
        return `${this.days[dateToday.getDay()]} ${dateToday.getDate()} ${this.months[dateToday.getMonth()]}`;
    }

    addDataToDom = () => {
        const townName = this.newTown  !== '' ? this.newTown : this.town;

        this.getWeather(this.formatTown(this.town)).then(() => {
            document.querySelector('.town').textContent = this.displayedLocation;
            document.querySelector('.icon').src = `https://${this.baseUri}img/wn/${this.icon}@2x.png`;
            document.querySelector('.current-temp').textContent = this.values.currentTemp;
            document.querySelector('.description').textContent = this.description;
            document.querySelector('.date-today').textContent = this.getDateToday();
            document.querySelector('.min-temp').textContent = this.values.minTemp;
            document.querySelector('.max-temp').textContent = this.values.maxTemp;
        });
    }

    newLocation = event => {
        event.preventDefault();

        this.town = document.querySelector('#new-location').value;

        this.addDataToDom();
    }

    init = () => {
        this.addDataToDom();

        document.querySelector('.new-location-form').addEventListener('submit', this.newLocation);
    }
}

window.addEventListener('load', () => {
    const weather = new WeatherApp();
    weather.init();
});
