import React, {setState} from 'react'; 
import {SafeAreaView, TextInput, StyleSheet, Image, Button, View, Alert} from 'react-native';
import HomePage from './HomePage'

const pushPage = (props) =>{
  props.pushPage = ({HomePage});
};

const LoginPage = () => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder=" Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=" Password"
          keyboardType="numeric"
        />
      <View>
        <Button
          style = {styles.container}
          title ="Login"
          onPress = {props.pushPage}
        />
      </View>

      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 5,
    },
  });

export default LoginPage;