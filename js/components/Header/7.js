import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Subtitle,
  SearchBar
} from "native-base";

import styles from "./styles";

class Header7 extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("NHSearchbar")}><Icon name="search" /></Button>
            <Button transparent><Icon name="heart" /></Button>
            <Button transparent><Icon name="more" /></Button>
          </Right>

        </Header>

        <Content padder>
          <Text>
            Header with Title & Subtitle
          </Text>
        </Content>
      </Container>
    );
  }
}

export default Header7;
