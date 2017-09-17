import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import {
	Content,
	Text,
	Title,
	Subtitle,
	Body,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");

const infos = [
	{
		name: "Ana Sayfa",
		route: "Pages",
		icon: "clipboard",

	},
	{
		name: "Bana Özel",
		route: "Pages",
		icon: "person",

	},
	{
		name: "İlan Ver",
		route: "Login",
		icon: "paper-plane",

	}
];

const datas = [
	{
		name: "Emlak",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Pages",
		icon: "home",
		bg: "#C5F442",
	},
	{
		name: "Vasıta",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Actionsheet",
		icon: "car",
		bg: "#C5F442",
	},
	{
		name: "Yedek Parça",
		subtitle:"Konut, İşyeri, Arsa, Projeler, Bina",
		route: "Header",
		icon: "settings",
		bg: "#477EEA",
		types: "8",
	},
	{
		name: "İkinci El",
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
const stabiles = [
	{
		name: "Hakkımızda",
		route: "About",
		icon: "attach",

	},
	{
		name: "Sorun ve Görüş Bildirimi",
		route: "PSupport",
		icon: "flame",

	},
	{
		name: "Yardım/İşlem Rehberi",
		route: "HSupport",
		icon: "bulb",

	}
	,
	{
		name: "İletişim",
		route: "CSupport",
		icon: "call",
	}
];
class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>

					<List
						dataArray={infos}
						renderRow={info =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(info.route)}>
								<Left>
									<Icon active name={info.icon} style={{ color: "#fff", fontSize: 26, width: 30 }} />
									<Text style={styles.text,{color:"#fff"}}>
										{info.name}
									</Text>
								</Left>
								<Right>
	                 <Icon name="arrow-forward" style={{ color: "#fff" }} />
	              </Right>
							</ListItem>}
					/>

					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<View>
										<Left>
											<Title style={{ color: "#777", fontSize: 15, }}>{data.name}</Title>
											<Subtitle style={{ color: "#777", fontSize: 10, }}>{data.subtitle}</Subtitle>
										</Left>
									</View>
								</Left>
							</ListItem>}
					/>
					<View style={{backgroundColor:"#f3f3f3"}}>
					<List
						dataArray={stabiles}
						renderRow={stabil =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(stabil.route)}>
								<Left>
									<Icon active name={stabil.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text,{color:"#777"}}>
										{stabil.name}
									</Text>
								</Left>
								<Right>
									 <Icon name="arrow-forward" style={{ color: "#777" }} />
								</Right>
							</ListItem>}
					/>
					</View>

				</Content>
			</Container>
		);
	}
}

export default SideBar;
