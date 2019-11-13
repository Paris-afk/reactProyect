import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import { WEATHER_KEY , BABLACAR_KEY} from "./keys";
import MyMapComponent from "./components/Map";
import BlablacarInfo from "./components/BlablacarInfo";
class App extends Component {

  state = {
      temperature : '',
      description : '',
      humidity : '',
      wind_speed : '',
      city : '',
      country : '',
      error : null, 
      datos : undefined
  }

  

  getWeather = async e => {
    e.preventDefault();
   /*  console.log(e.target.elements) */
   const {city , country , arrival , depart , dateDepart} = e.target.elements;
   const cityValue = arrival.value;
   /* const countryValue = country.value; */
   const arrivalValue = arrival.value;
   const departValue = depart.value;
   const dateDepartValue = dateDepart.value;

   /* console.log(cityValue,countryValue) */
    
   if(cityValue && departValue){
     const moneda = 'EUR'
    const API_BLABLACAR = `https://public-api.blablacar.com/api/v2/trips?key=${BABLACAR_KEY}&fn=${departValue}&tn=${arrivalValue}&cur=${moneda}&db=${dateDepartValue}`
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${
      cityValue
    }&appid=${WEATHER_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    

    const respuesta = await fetch (API_BLABLACAR);
    const datos = await  respuesta.json();
    console.log(datos)
    console.log(`Esta es la fecha de partida ${dateDepartValue}`)

    
    
   /*  console.log(API_URL)
    console.log(data);  */
    /* console.log(this.state) */

    this.setState({
      temperature : data.main.temp,
      description : data.weather[0].description,
      humidity    : data.main.humidity,
      wind_speed : data.wind.speed,
      city : data.name,
      country : data.sys.country,
      datos : datos
    },)

   }else {
     this.setState({error : 'Ecrivez un ville et un pays'})
   }
   
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
        {/* col-md-4 mx-auto */}
          <div className="col-md-4 ">
            <WeatherForm
             getWeather={this.getWeather}
            />
            <WeatherInfo {...this.state}/>
            <MyMapComponent />
          </div>
          <div className="col-md-6">
            <BlablacarInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
