import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, Card, CardItem } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };
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
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardItem>
              <Button>Log out</Button>
            </CardItem>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View syle={styles.spinnerStyle}>
            <Spinner size={"large"} />
          </View>
        );
    }
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

const styles = {
  spinnerStyle: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default App;
