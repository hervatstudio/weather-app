import React, { Component } from 'react';
import Title from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
// import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import Count from './components/Count';
import Users from './components/Users';
import Control from './components/Control';


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

    // const reducer = (state={}, action) => {
    //   if(action.type === 'A'){
    //     return {
    //       ...state,
    //       A: 'I am A'
    //     }
    //   }
    //   if(action.type === 'B'){
    //     return {
    //       ...state,
    //       B: 'I am B'
    //     }
    //   }
    //   return state
    // }

    // const store = createStore(reducer)

    // // For data handeling
    // store.subscribe(()=>{
    //   console.log(store.getState().A);
    // })

    // store.subscribe(()=>{
    //   console.log(store.getState().B);
    // })

    // // For event handeling
    // store.dispatch({type: 'B'})
    // store.dispatch({type: 'Something'})
    // store.dispatch({type: 'A'})
    // store.dispatch({type: 'Something'})

    // Store (Object) -> Will hold all of our application data/state (Store can be only one for any React App)
    // Reducer (Function (Pure function) return a Object) -> A function who returns a specific amount of state or data (Reducer can be multiple)
    // Actions -> Event occurs -> { type: 'Something' payload: '' }
    // Dispatch -> মানে হচ্ছে reducer কল হবে, এবং reducer এর মধ্যে কোন ডেটা Add, Edit, Update হবে এবং store এ গিয়ে হিট করবে
    // Subscriber -> child component গুলো store এর সাথে subscribe করে রাখবে, dom event, action এর সাথে listener add করা

    // Notes: Reducer state রিটার্ট করবে, current state, next state
    // প্রতিবার কোন একশান হলে reducer ডেটা reduce/dispatch করে


    // React will be responsible for view layer
    // Redux will be responsible for data layer
    // React redux


    return (
      <Provider store={store}>
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
          <Count/>
          <Control/>
          {/* <Users/> */}
        </div>
      </Provider>
     );
  }
}
 
export default App;