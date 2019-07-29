import React, { Component } from "react";
import { Button, Card, CardItem, Input, Spinner } from "./common";
import { Text } from "react-native";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication failed." });
          });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeholder="user@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
          />
        </CardItem>
        <CardItem>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardItem>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>{this.renderButton()}</CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: { fontSize: 20, alignSelf: "center", color: "red" }
};

export default LoginForm;
