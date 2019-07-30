import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: false };
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBhH-6tUA1mwxBxg4rfBI1BE_J5Bd2laiE",
      authDomain: "auth-9f3c0.firebaseapp.com",
      databaseURL: "https://auth-9f3c0.firebaseio.com",
      projectId: "auth-9f3c0",
      storageBucket: "",
      messagingSenderId: "919179840531",
      appId: "1:919179840531:web:5b3bc080758036d8"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return <Button>Log out</Button>;
    }
    return <LoginForm />;
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication!!!" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
