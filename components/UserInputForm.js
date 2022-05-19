import react, {Component} from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../style';

class UserInputForm extends Component {

    constructor(){
        super();
        this.state={
            cityInputName: '',
        }
    }

    handleInputCity = (e) => {
        if(this.state.cityInputName.length > 0)
            this.props.searchForCity(this.state.cityInputName);
    }


  render(){
    return (
        <View style={styles.inputContainer}> 
          <Text style={styles.whiteText}>Search for a city</Text>
          <TextInput 
            style={styles.userInput}
            onSubmitEditing={() => this.handleInputCity()}
            onChangeText={newText => this.setState({cityInputName: newText})}
          />
        </View>
      );
  }
}

export default UserInputForm;