import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from 'react-native';
import styles from '../style';

function DailyWeatherCard(props) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
  // console.log(props.key)
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 700,
          useNativeDriver: false 
        }
      ).start();
    }, [fadeAnim]);
  
  //  console.log(props.weather);
    let dayDate = new Date(props.weather["dt"] * 1000).toDateString();
    let weatherImg = "http://openweathermap.org/img/wn/" + props.weather["weather"][0]["icon"] + "@2x.png";
    return (
        <View style={styles.dailyWeatherCard}>
            <Animated.View style={{ opacity: fadeAnim}}> 
              <Text style={styles.dayTextDate}>{dayDate}</Text>
              <Text style={styles.dayTextMain}>{props.weather["weather"][0]["main"]}</Text>
              <Text style={styles.dayText}>{props.weather["temp"]["min"].toFixed(1)} &#8451; to {props.weather["temp"]["max"].toFixed(1)} &#8451;</Text>
              <Image style={styles.dayImage} source={{uri: weatherImg,}}/>
          </Animated.View>
        </View>
    );
}

export default DailyWeatherCard;