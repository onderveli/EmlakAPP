import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Toast
} from "native-base";

import styles from "./styles";

class HSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Toast</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
            <Text>Yardım Destek</Text>
        </Content>
      </Container>
    );
  }
}

export default HSupport;
