import React, { Component } from "react";
import { Image, View,ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Item,
  Input,
  H1,
  H3,
  ActionSheet,
  Thumbnail,
  List,
  ListItem,
  Button,
  Icon,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Subtitle,
  Body
} from "native-base";

import styles from "./styles";

const sankhadeep = require("../../../img/contacts/1.png");
const supriya = require("../../../img/contacts/2.png");
const himanshu = require("../../../img/contacts/3.png");

const datas = [
  {
    img: sankhadeep,
    text: "Emlak Deneme",
    note: "Emlak deneme deneme deneme"
  },
  {
    img: supriya,
    text: "Emlak Deneme",
    note: "Emlak deneme deneme deneme"
  },
  {
    img: himanshu,
    text: "Emlak Deneme",
    note: "Emlak deneme deneme deneme"
  }
];



const cardOne = require("../../../img/swiper-1.png");
const cardTwo = require("../../../img/swiper-2.png");
const cardThree = require("../../../img/swiper-3.png");
const cardFour = require("../../../img/swiper-4.png");
const cards = [
	{
		text: "Card One",
		name: "One",
		image: cardOne,
	},
	{
		text: "Card Two",
		name: "Two",
		image: cardTwo,
	},
	{
		text: "Card Three",
		name: "Three",
		image: cardThree,
	},
	{
		text: "Card Four",
		name: "Four",
		image: cardFour,
	},
];

const infos = [
	{
		name: "Konut",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Pages",
		icon: "home",
		bg: "#C5F442",
	},
	{
		name: "İşyeri",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Actionsheet",
		icon: "car",
		bg: "#C5F442",
	},
	{
		name: "Arsa",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Header",
		icon: "settings",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "Projeler",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Footer",
		icon: "basket",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "Badge",
		route: "NHBadge",
		icon: "notifications",
		bg: "#4DCAE0",
	},
	{
		name: "Button",
		route: "NHButton",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
	},
	{
		name: "Card",
		route: "NHCard",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "Check Box",
		route: "NHCheckbox",
		icon: "checkmark-circle",
		bg: "#EB6B23",
	},
	{
		name: "Deck Swiper",
		route: "NHDeckSwiper",
		icon: "swap",
		bg: "#3591FA",
		types: "2",
	},
	{
		name: "Fab",
		route: "NHFab",
		icon: "help-buoy",
		bg: "#EF6092",
		types: "2",
	},
	{
		name: "Form & Inputs",
		route: "NHForm",
		icon: "call",
		bg: "#EFB406",
		types: "12",
	},
	{
		name: "Icon",
		route: "NHIcon",
		icon: "information-circle",
		bg: "#EF6092",
	},
	{
		name: "Layout",
		route: "NHLayout",
		icon: "grid",
		bg: "#9F897C",
		types: "5",
	},
	{
		name: "List",
		route: "NHList",
		icon: "lock",
		bg: "#5DCEE2",
		types: "7",
	},
	{
		name: "ListSwipe",
		route: "ListSwipe",
		icon: "swap",
		bg: "#C5F442",
		types: "2",
	},
	{
		name: "Picker",
		route: "NHPicker",
		icon: "arrow-dropdown",
		bg: "#F50C75",
	},
	{
		name: "Radio",
		route: "NHRadio",
		icon: "radio-button-on",
		bg: "#6FEA90",
	},
	{
		name: "SearchBar",
		route: "NHSearchbar",
		icon: "search",
		bg: "#29783B",
	},
	{
		name: "Segment",
		route: "Segment",
		icon: "menu",
		bg: "#0A2C6B",
		types: "2",
	},
	{
		name: "Spinner",
		route: "NHSpinner",
		icon: "navigate",
		bg: "#BE6F50",
	},
	{
		name: "Tabs",
		route: "NHTab",
		icon: "home",
		bg: "#AB6AED",
		types: "3",
	},
	{
		name: "Thumbnail",
		route: "NHThumbnail",
		icon: "image",
		bg: "#cc0000",
		types: "2",
	},
	{
		name: "Toast",
		route: "Toast",
		icon: "albums",
		bg: "#C5F442",
	},
	{
		name: "Typography",
		route: "NHTypography",
		icon: "paper",
		bg: "#48525D",
	},
];
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
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
        <Content style={styles.container}>
        <View searchBar style={styles.searchBar}>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Button
            transparent
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Filtreleme Seçenekleri"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}
            >
            <Icon active name="attach" /></Button>
          </Item>
        </View>


        <ScrollView style={styles.container}>
        <View style={styles.card}>
        <List
          dataArray={infos}
          renderRow={info =>
            <ListItem button noBorder onPress={() => this.props.navigation.navigate(info.route)}>
              <Left>
                <Icon active name={info.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
                <View>
                  <Left>
                    <Title style={{ color: "#777", fontSize: 15, }}>{info.name}</Title>
                    <Subtitle style={{ color: "#777", fontSize: 10, }}>{info.subtitle}</Subtitle>
                  </Left>
                </View>
              </Left>
            </ListItem>}
        />
        </View>

<View style={styles.card,{height:500}}>
  <View style={{ flex: 1, padding: 12 }}>
    <DeckSwiper
      dataSource={cards}
      looping={true}
      renderItem={item =>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={item.image} />
              <Body>
                <Text>
                  {item.text}
                </Text>
                <Text note>NativeBase</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "cover",
                width: null,
                flex: 1,
                height: 300,
              }}
              source={item.image}
            />
          </CardItem>
          <CardItem>
            <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
            <Text>
              {item.name}
            </Text>
          </CardItem>
        </Card>}
    />
  </View>
</View>
<View style={styles.card}>
          <H1 style={styles.mb10}>Son Eklenen</H1>
                    <List
                      dataArray={datas}
                      renderRow={data =>
                        <ListItem thumbnail button onPress={() => this.props.navigation.navigate("Detail")}>
                          <Left>
                            <Thumbnail square size={55} source={data.img} />
                          </Left>
                          <Body>
                            <Text>{data.text}</Text>
                            <Text numberOfLines={1} note>{data.note}</Text>
                          </Body>
                        </ListItem>}
                    />
                    </View>
        </ScrollView>
</Content>

      </Container>
    );
  }
}

export default Pages;
