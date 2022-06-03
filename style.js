import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
//    backgroundColor: "#003147",
    backgroundColor: "#245978",
    padding: 20,
  },

  inputContainer: {
    paddingTop: 40,
    paddingBottom: 30
  },

  userInput: {
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center"
  },

  whiteText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },

  whiteTextMainWeather: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },

  whiteTexttoShow: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20
  },

  forecastContainer: {
    padding: 20,
  },

  nextDaysContainer: {
    padding: 0
  },

  currentDayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0, 49, 71, 0.5)",
    marginBottom: 40,
  },  

  weatherIcon : {
    width: 120, 
    height: 120,
    alignSelf: 'center'
  },

  cityHeaderName: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center'
  },

  dailyWeatherCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1',
    padding: 10,
    width: "50%"
  },

  dayText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },

  dayTextDate: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: 'bold'
  },

  dayTextMain: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },

  containerDays: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  dayImage: {
    width: 80, 
    height: 80,
    alignSelf: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 50
  }
});