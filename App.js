/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase';


export default class App extends Component {
  state= {
    email:'',
    password:'',
    isAuthenticated: false,
  };

  login = async() =>{
    const {email, password} = this.state;

    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
      console.log(user);

    }catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Digite o e-email"
        value={this.state.email}
        onChangeText={email => this.setState({ email })} 
        />

        <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={this.state.password}
        onChangeText={password => this.setState({ password })} />

        <TouchableOpacity style={styles.button} onPress={this.login}>
        <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {this.state.isAuthenticated ? <Text style={styles.welcome}>Bem vindo ao repositorio da DDM LATAM</Text> : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    borderWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color:'#FFF',
    fontWeight: 'bold',
  },
  welcome:{
    color:'#FFF'
  },
});
