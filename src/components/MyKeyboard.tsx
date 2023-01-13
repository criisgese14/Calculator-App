import Button from "./Button";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

export const MyKeyboard = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState<Number | null>(null);

    const handleNumberPress = (buttonValue : string) => {
        if (firstNumber.length < 10) {
            setResult(null);
            setFirstNumber(firstNumber + buttonValue);
        }
    }

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
        setResult(null);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [styles.screenFirstNumber, styles.result] : [styles.screenFirstNumber, styles.result, {fontSize: 50},]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
      };

    const getResult = () => {
        switch (operation) {
            case '+':
                clear();
                setResult(Number(secondNumber) + Number(firstNumber));
                break;
            case '-':
                clear();
                setResult(Number(secondNumber) - Number(firstNumber));
                break;
            case '*':
                clear();
                setResult(Number(secondNumber) / Number(firstNumber));
                break;
            case '/':
                clear();
                setResult(Number(secondNumber) / Number(firstNumber));
                break;
            case '%':
                clear();
                setResult(Number(secondNumber) % Number(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        };
    };

    return (
        <View style={styles.viewBottom}>
      <View style={styles.screen}>
        <Text style={styles.screenSecondNumber}>
          {secondNumber}
          <Text style={styles.screenOperation}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="⌫" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))}  />
        <Button title="%" isGray onPress={() => handleOperationPress("%")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="" onPress={() => {}}/>
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
    )
};

const styles = StyleSheet.create({
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: '#747477',
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: '#747477',
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenOperation : { 
    color: "#4B5EFC", 
    fontSize: 50, 
    fontWeight: '500' 
  },
  screen: {
    height: 120,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  result: {
    color: '#FFFFFF',
  }
})