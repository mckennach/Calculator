

import { StyleSheet, TouchableOpacity, Button } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Input } from 'react-native-elements';



const InputContainer = (props: any) => {
    const { input } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{input}</Text>
        </View>        
    )
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 15
  },
  text: {
    fontSize: 70
  }
});
  

export default InputContainer;




