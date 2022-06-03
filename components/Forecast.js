import {Component} from 'react';
import { View } from 'react-native';
import styles from '../style';
import CurrentDayForecast from './CurrentDayForecast';
import NextDaysWeather from './NextDaysForecast';

class Forecast extends Component {

  constructor(){
      super();
      this.state={
          cityInputName: '',
          dayWeather: '',
          nextDaysWeather: undefined,
          infoLoaded: false,
          showNextDays: false
        }
  }

  componentDidMount(){
     this.setState({dayWeather: this.props.weather["current"]});
     this.setState({nextDaysWeather: this.props.weather["daily"]});
     this.setState({infoLoaded: true});
     setTimeout(() => {
       this.setState({showNextDays: true})
     }, 700);
  }

  render(){
    return (
      <View style={styles.forecastContainer}> 
        {
          this.state.infoLoaded ?
          <>
            <CurrentDayForecast weather={this.state.dayWeather}/>
           {
             this.state.showNextDays ?  
               <NextDaysWeather  weather={this.props.weather["daily"]} /> : <></>
           }
          </>
          : <></>
        }
      </View>
    );
  }
}

export default Forecast;