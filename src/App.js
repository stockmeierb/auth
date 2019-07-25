import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBhH-6tUA1mwxBxg4rfBI1BE_J5Bd2laiE",
      authDomain: "auth-9f3c0.firebaseapp.com",
      databaseURL: "https://auth-9f3c0.firebaseio.com",
      projectId: "auth-9f3c0",
      storageBucket: "",
      messagingSenderId: "919179840531",
      appId: "1:919179840531:web:5b3bc080758036d8"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication!!!" />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;
