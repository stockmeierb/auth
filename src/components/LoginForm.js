import React, { Component } from "react";
import { TextInput } from "react-native";
import { Button, Card, CardItem } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardItem>
        <CardItem>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardItem>

        <CardItem>
          <Button>Log In</Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
