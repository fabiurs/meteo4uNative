import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from 'react-native';
import styles from '../style';

function CurrentDayForecast(props) {
//    console.log(props.weather["weather"]);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    let temperature = props.weather["temp"];
    let textToShow = '';

    if(temperature > 30){
        textToShow = "Avoid, as much as possible, prolonged exposure to the sun between 11.00 and 18.00. Consume 1.5 to 2.5 liters of water daily"
    }else if(temperature > 20){
        textToShow = "Enjoy the weather! \n Consume 1.5 to 2.5 liters of water daily.";
        if(temperature < 25){
          textToShow+="\nIt's a great time for a workout!"
        }
    }else if(props.weather["weather"][0]["main"] === 'Rain' || props.weather["weather"][0]["main"] === 'Thunderstorm'){
        textToShow = "Do not forget your umbrella!"
        if(props.weather["weather"][0]["main"] === 'Thunderstorm'){
          textToShow += "Pay attention to the surroundings!"
        }
    }

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false 
        }
      ).start();
    }, [fadeAnim]);

    let date = new Date(props.weather["dt"] * 1000).toDateString();
    let weatherImg = "http://openweathermap.org/img/wn/" + props.weather["weather"][0]["icon"] + "@2x.png";
    //console.log(date.toString());
    return (
        <Animated.View style={{...styles.currentDayContainer, opacity: fadeAnim}}> 
            <View style={styles.currentDayContainer}>
              <Text style={styles.whiteText}>{date}</Text>
              <Text style={styles.whiteTextMainWeather}>{props.weather["weather"][0]["main"]}</Text>
              <Image style={styles.weatherIcon} source={{uri: weatherImg}}/>
              <Text style={styles.whiteText}>Temp {props.weather["temp"]} &#8451;</Text>
              <Text style={styles.whiteText}>Feels like {props.weather["feels_like"]} &#8451;</Text>
              <Text style={styles.whiteTexttoShow}> {textToShow}</Text>
           </View>
        </Animated.View>
    );
}

export default CurrentDayForecast;