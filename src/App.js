import React, { Component } from 'react';
import Title from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';

const API_KEY = "62f6c9fe05273f285ad08642409f5e2a";

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
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY+'&units=metric');
    const data = await api_call.json();

    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      })
    }
  }

  state = {  }
  render() { 
    return ( 
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
     );
  }
}
 
export default App;