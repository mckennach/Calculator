
import { StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as calculate from '../actions/calcFunctions';
import { Text, View } from './Themed';

const { parseAction } = calculate;

const onButtonPress = (value: any, actionType: string, action: string, props: any) => {
  parseAction(value, actionType, action, props)
}

const Buttons = (props: any) => {
    const { buttons, lastOperator } = props;
    const keys = Object.keys(buttons);
  
    return keys.map(key => {
      const { text, value, backgroundColor, color, stretch, action, actionType } = buttons[key];
      const selected = lastOperator === action ? styles.selected : '';
      const width = stretch ? '50%' : '25%';
      return (
        <TouchableOpacity 
            key={key}
            style={[styles.button, {width}]}
            onPress={() => onButtonPress(value, actionType, action, props)}
            >
          <View style={[styles.textContainer, {backgroundColor}, selected]}>
            <Text style={[styles.buttonTxt, {color}]}>{text}</Text>
          </View>
        </TouchableOpacity>
      )
    })
}


const styles = StyleSheet.create({
  button: {
    width: '25%',
    height: 100,
    padding: 5
  },
  textContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 100,
  },
  buttonTxt: {
    fontSize: 25
  },
  selected: {
    borderColor: '#C85520',
    borderWidth: 2
  }
});
  

export default Buttons;




