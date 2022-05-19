import react, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './style';

import UserInputForm from './components/UserInputForm.js';
import Forecast from './components/Forecast';

const apiForWeather = {
  key: "b35a515c553dadf34292da5798253cbf",
  base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

class App extends Component {

  constructor(){
    super();
    this.state={
      infoRequested: false,
      infoLoaded: false,
      cityName: '',
      cityFound: false,
      weather: undefined,
    }
  }


  searchForCity = async (location) => {

    this.setState({infoLoaded: false});
    this.setState({infoRequested: true});

    //get coordinates(lat, long) of the city
    let locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiForWeather.key}`)
        .then(result => {
            return result.json();
        })
        .catch(err => {
            console.log(err);
        });
      
    // get lat and long from the result
    if(Object.keys(locationData).length !== 0){
        let locationLat = locationData[0]["lat"].toFixed(2);
        let locationLong = locationData[0]["lon"].toFixed(2); 

        this.setState({cityName: locationData[0]["name"]});

        //get weather for provided coodrinates(lat, long)
        this.getWeatherForGivenCoordinates(locationLat, locationLong).then();
    }else{
        this.setState({cityName: "No city was found with this name.."});
        this.setState({cityFound: false})
        this.setState({infoLoaded: true});
        this.setState({infoRequested: false});
    }
  };

  getWeatherForGivenCoordinates = async (locationLat, locationLong) =>{

    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&units=metric&appid=b35a515c553dadf34292da5798253cbf`)
        .then(result => {
            return result.json();
        })
        .catch(err => {
            console.log(err);
        });

//    console.log(JSON.stringify(weatherData));

    this.setState({cityFound: true})
    this.setState({weather: weatherData});

    if(weatherData["alerts"] !== undefined){
        this.setState({alert: weatherData["alerts"]});
    }
    else{
        this.setState({alert: undefined});
    }
    
    this.setState({weatherIconCode: weatherData["current"]["weather"][0]["icon"]});
    this.setState({infoLoaded: true});
    this.setState({infoRequested: false});

  };
  


  render(){
    return (
      <ScrollView style={styles.mainContainer}>
        <UserInputForm searchForCity={this.searchForCity}/>
        {
          this.state.infoLoaded ?
          <Text style={styles.cityHeaderName}>{this.state.cityName}</Text> : <></>
        }
        {
          this.state.infoRequested ?
          <Text style={styles.whiteText}>Loading...</Text> : <></>
        }
        {
          this.state.infoLoaded && this.state.cityFound ?
          <Forecast weather={this.state.weather}/> : <></>
        }
      </ScrollView>
    );
  }
}

export default App;