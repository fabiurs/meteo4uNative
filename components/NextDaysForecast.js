
import react, {Component} from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../style';
import DailyWeatherCard from './DailyWeatherCard';

class NextDaysWeather extends Component {

    constructor(){
        super();
        this.state = {
            days: '',
            infoLoaded: false
        }
    }

    

    render(){
        let daysArray = this.props.weather.map((dailyWeather, index) => 
            {<DailyWeatherCard
                key={index}
                weather={dailyWeather}/>}
        );
        return (
            <View style={styles.nextDaysContainer}> 
                {
                    this.state.infoLoaded ?
                    daysArray : <></>
                }
            </View>
        );
    }
}

export default NextDaysWeather;