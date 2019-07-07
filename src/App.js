import React,{ Component } from 'react';
import Weather from './Weather/Weather';
import Titles from './Titles/Titles';
import Forms from './Forms/Forms';
import './App.css';



const Api_Key = "2363e20d9b1f432850321d9b45caedc7";


class App extends Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    const celsius = Math.round((response.main.temp) - 273) ;

    const fahrenheit = Math.floor(celsius * (9/5) + 32);
    console.log();



    if(city && country){
      this.setState({
        temperatureF: fahrenheit,
        temperatureC : celsius,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })


    }else{
      this.setState({
        error: "Please enter correct search values..."
      })
    }


    }

  render() {


    return (


        <div>

              <div className="container">
                <div className="row">

                <Titles />
                </div>

              <Forms loadWeather={this.getWeather} />


                <div className="card"><Weather
                      temperatureF={this.state.temperatureF}
                      temperatureC ={this.state.temperatureC}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}/></div>





                  </div>
                </div>




    )
  }
}
export default App;
