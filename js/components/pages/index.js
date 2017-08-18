import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Item,
  Input,
  View,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Pages extends Component {

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
            <Title>Ana Sayfa</Title>
          </Body>
          <Right>
            <Button transparent><Icon name="contact" /></Button>
          </Right>

        </Header>

        <Content>
        <View searchBar rounded style={{ backgroundColor: "#f3f3f3", padding:10,}}>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search"  />
          </Item>
        </View>
        <View padder>
          <Text>
            Content goes here
          </Text>
        </View>
        </Content>
      </Container>
    );
  }
}

export default Pages;
