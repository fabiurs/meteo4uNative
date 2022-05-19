
import react, {Component} from 'react';
import { TextInput, Image, Text, View } from 'react-native';
import styles from '../style';

function CurrentDayForecast(props) {
    //console.log(JSON.stringify(props.weather["weather"]));

    let date = new Date(props.weather["dt"] * 1000).toDateString();
    //console.log(date.toString());
    return (
        <View style={styles.currentDayContainer}> 
            <Text style={styles.whiteText}>{date}</Text>
            <Text style={styles.whiteText}>Clouds</Text>
            <Image style={styles.weatherIcon} source={{uri: "http://openweathermap.org/img/wn/02d@2x.png"}}/>
            <Text style={styles.whiteText}>Min {props.weather["temp"]} &#8451;</Text>
            <Text style={styles.whiteText}>Feels like {props.weather["feels_like"]} &#8451;</Text>
        </View>
    );
}

export default CurrentDayForecast;