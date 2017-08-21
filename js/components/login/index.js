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

class Login extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
<Image source={launchscreenLogo} style={styles.logo} />
</View>


							<Form>

								<Item floatingLabel>
									<Label style={{color:"#fff"}}>Username</Label>
									<Input style={{color:"#fff"}} />
								</Item>
								<Item floatingLabel>
									<Label style={{color:"#fff"}}>Password</Label>
									<Input secureTextEntry={true} />
								</Item>
							</Form>


							<Button block success style={{ margin: 15 }}
							onPress={() => this.props.navigation.navigate("Pages")}
							>
								<Text>Giriş Yap</Text>
							</Button>

							<Button block info style={{ margin: 15 }}
							onPress={() => this.props.navigation.navigate("Pages")}
							>
								<Text>Giriş Yap</Text>
							</Button>


				</Image>

			</Container>
		);
	}
}

export default Login;
