
import  {Component} from 'react';
import {  View } from 'react-native';
import styles from '../style';
import DailyWeatherCard from './DailyWeatherCard';

class NextDaysWeather extends Component {

    constructor(){
        super();
        this.state = {
            days: <></>,
        }
    }

    componentDidMount(){
        let daysArray = this.props.weather.map((dailyWeather, index) => 
            { return <DailyWeatherCard key={index} weather={dailyWeather} number={index}/>}
        );
        daysArray.shift()
    //    console.log(daysArray);
        this.setState({days: daysArray});
    }

    render(){
        return (
            <View style={styles.containerDays}> 
                    {this.state.days}
            </View>
        );
    }
}

export default NextDaysWeather;