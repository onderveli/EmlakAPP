import React, { Component } from "react";
import { Image, View, StatusBar,TextInput } from "react-native";

import {
	 Container,
   Header,
	 H3,
   Title,
   Content,
   Button,
   Item,
   Label,
   Input,
   Body,
   Left,
   Right,
   Icon,
   Form,
   Text
  } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");

class NHRegister extends Component {
		render() {
			return (
				<Container style={styles.container}>
					<StatusBar barStyle="light-content" />
					<Image source={launchscreenBg} style={styles.imageContainer}>
								<Form>
									<Item floatingLabel>
										<Label style={{color:"#fff"}}>Kullanıcı Adı</Label>
										<Input style={{color:"#fff"}} />
									</Item>
									<Item floatingLabel>
										<Label style={{color:"#fff"}}>Parola</Label>
										<Input secureTextEntry={true} />
									</Item>
									<Item floatingLabel>
										<Label style={{color:"#fff"}}>Parola-Tekrar</Label>
										<Input secureTextEntry={true} />
									</Item>
									<Item floatingLabel>
										<Label style={{color:"#fff"}}>E-Mail</Label>
										<Input style={{color:"#fff"}} />
									</Item>
								</Form>


								<Button block success style={{ margin: 15 }}
								onPress={() => this.props.navigation.navigate("Login")}
								>
									<Text>Kayıt Ol</Text>
								</Button>

					</Image>

				</Container>
			);
		}

}

export default NHRegister;
