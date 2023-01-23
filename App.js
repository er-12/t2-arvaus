import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Alert, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [input, setInput] = useState('');
  const [text, setText] = useState('Guess a number between 1-100');
  const [count, setCount] = useState(1);

  const checkGuess = () => {
    setCount(count + 1);
    setText(compare(input, number));
  };

  function win() {
    Alert.alert("You guessed the number in " + String(count) + " guesses!");
    setCount(1);
    setNumber(Math.floor(Math.random() * 100) + 1);
    setText('Guess a number between 1-100');
    setInput('');
  }

  function compare(input, number) {
    const guess = Number(input);
    if (guess < number) return ("Your guess " + String(input) + " is too low");
    if (guess > number) return ("Your guess " + String(input) + " is too high");
    if (guess === number) return win;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {/* <Text style={{fontSize:18}}>{number}</Text>
      <Text style={{fontSize:18}}>{count}</Text> */}
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input => setInput(input)}
      value={input}
      />
      <Button onPress={checkGuess} title= 'Make a Guess'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 25,
    borderColor: 'gray',
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    padding: 10
  }
});
