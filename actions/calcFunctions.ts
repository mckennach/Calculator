
export const parseAction = (value: any, actionType: string, action: string, props: any) => {
    const { setCurrentActions, currentActions } = props;
    const oldActions = [...currentActions];
    const newAction = {
        action,
        actionType
    }
    
    setCurrentActions(arr => [...arr, newAction]);
    switch(actionType) {
        case 'int':
            getNumber(value, props);
            break;
        case 'operator':
            operator(action, props);
            break;
        case 'clear':
            clear(props);
            break;
        case 'result':
            getResult(props, false);
            break;
    }
}

export const getResult = (props: any, action: any) => {
    let result;
    const { currentValue, previousValue, setLastOperator, lastOperator } = props;  
    const actionToUse = action ? action : lastOperator;
    switch (actionToUse) {
        case 'add':
            result = previousValue + currentValue;
            break;
        case 'subtract':
            result = previousValue - currentValue;
            break; 
        case 'divide':
            result = previousValue / currentValue;
            break;
        case 'multiply':
            result = previousValue * currentValue;
            break;
        case 'percentage':
            result = Math.pow(currentValue, -1);
            break;
        case 'sign':
            result = Math.sign(currentValue) === -1 ?   Math.abs(currentValue) * 1 : Math.abs(currentValue) * -1;
            break;
        default:
            result = currentValue;

    }
    setLastOperator(false);
    display(result, props, true);
}

export const operator = (action: string, props: any) => {
    const { setLastOperator, setInput, input, setCurrentValue, currentValue, setPreviousValue, previousValue, currentActions } = props; 
    setLastOperator(action);
    setPreviousValue(currentValue);
    setInput(`${currentValue}`);
    setCurrentValue(previousValue);
    if(action === 'sign' || action === 'percentage') {
        getResult(props, action);    
    }
}



export const getNumber = (value: any, props: any) => {
    const { input, setInitialState, initialState, currentActions } = props;
    const prevValue = `${input}`;
    const lastAction = currentActions.length > 0 ? currentActions[currentActions.length - 1] : {actionType: ''};
    const result = lastAction.actionType === 'operator' ? 
                                            `${value}` :
                                            initialState ? `${value}` : 
                                            prevValue.concat(`${value}`);
    

    (initialState ? setInitialState(false) : false);
    display(result, props, false);
 
}


export const display = (result: any, props: any, setPrevious: boolean) => {
    const { setInput, setCurrentValue, setPreviousValue, currentValue } = props;
    setInput(result);
    setCurrentValue(parseFloat(result));
    (setPrevious ? setPreviousValue(parseFloat(result)) : false);   
}



export const clear = (props: any) => {
    const { setInput, setCurrentActions, setCurrentValue, setPreviousValue, setInitialState, setLastOperator } = props;
    setInput(0);
    setCurrentValue(0);
    setInitialState(true);
    setLastOperator(false);
    setCurrentActions([]); 
}


   