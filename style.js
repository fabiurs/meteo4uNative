import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#003147",
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

  forecastContainer: {
    padding: 20,
  },

  nextDaysContainer: {
    padding: 0
  },

  currentDayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20
  },

  weatherIcon : {
    width: 100, 
    height: 100,
    alignSelf: 'center'
  },

  cityHeaderName: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center'
  }
});