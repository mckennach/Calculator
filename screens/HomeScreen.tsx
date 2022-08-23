import { useState, useEffect, useRef } from 'react';
import { RootTabScreenProps } from '../types';
import { View } from '../components/Themed';
import InputContainer from '../components/Input';
import Buttons from '../components/Buttons';
import CalculatorObj from '../constants/CalculatorObj';
import Layout from '../constants/Layout';

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [input, setInput] = useState(currentValue);
  const [initialState, setInitialState] = useState(true);
  const [currentActions, setCurrentActions] = useState([]);
  const [lastOperator, setLastOperator] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log('no here');
   return () => {
      console.log('here');
   }
  }, [result]);


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputContainer 
          input={input} />
      </View>
      <View style={styles.buttonContainer}>
        <Buttons 
          input={input} 
          setInput={setInput} 
          initialState={initialState}
          setInitialState={setInitialState}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          previousValue={previousValue}
          setPreviousValue={setPreviousValue}
          currentActions={currentActions}
          setCurrentActions={setCurrentActions}
          lastOperator={lastOperator}
          setLastOperator={setLastOperator}
          buttons={CalculatorObj} />
      </View>
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    paddingVertical: 20,
    height: Layout.window.height
  },
  inputContainer: {
    height: '30%'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    height: '70%'
  }
};


export default HomeScreen;
