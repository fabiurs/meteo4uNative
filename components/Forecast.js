import react, {Component} from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../style';
import CurrentDayForecast from './CurrentDayForecast';
import NextDaysWeather from './NextDaysForecast';

class Forecast extends Component {

  constructor(){
      super();
      this.state={
          cityInputName: '',
          dayWeather: '',
          nextDaysWeather: ''
      }
  }

  componentDidMount(){
     this.setState({dayWeather: this.props.weather["current"]});
     this.setState({nextDaysWeather: this.props.weather["daily"]});
  }

  render(){
    return (
        <View style={styles.forecastContainer}> 
          <CurrentDayForecast weather={this.state.dayWeather}/>
          {/* {<NextDaysWeather weather={this.state.nextDaysWeather} />} */}
        </View>
      );
  }
}

export default Forecast;