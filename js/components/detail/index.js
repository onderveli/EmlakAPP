import React, { Component } from "react";
import { Image, View,ScrollView } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { Grid, Col } from "react-native-easy-grid";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
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

const SECTIONS = [
  {
    title: 'First',
    content: 'İlk Accordion açıldı',
  },
  {
    title: 'Second',
    content: 'ikinci Accordion açıldı',
  }
];

class Detail extends Component {

  constructor(props) {
      super(props);

      this.state = {
          position: 1
      };
  }

  componentWillMount() {
    this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  _renderHeader(section, index, isActive) {
    return (
      <Animatable.View>
        <Text style={styles.expandedBand}>

        {section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View>
        <Animatable.Text style={styles.expandedDetail}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
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
              <Title style={{fontSize:15}}>İLAN DETAYLARI</Title>
            </Body>
            <Right>
              <Button transparent><Icon name="contact" /></Button>
              <Button transparent><Icon name="share" /></Button>
            </Right>
          </Header>
          <View style={styles.titleBand}>
            <Text style={{color:"white",fontSize:15,textAlign:'center'}}>İlan Başlığı Burada Görüntülenecek</Text>
          </View>
          <ScrollView>
          <View style={styles.container}>
              <ImageSlider
                  images={[
                      `http://www.dailymobile.net/wp-content/uploads/wallpapers/android-640x480-wallpapers/android-640x480-wallpaper-4582.jpg`,
                      `http://tremendouswallpapers.com/wp-content/uploads/2015/07/Fresh-atmosphere-computers-desktop-wallpaper-640x480.jpg`,
                      `http://www.dailymobile.net/wp-content/uploads/wallpapers/android-640x480-wallpapers/Horizon.jpg`,
                  ]}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}/>
          </View>
          <View style={styles.infoBand}>
            <Text style={{color:"#570219",fontSize:13,textAlign:'center'}}>Emlak-Konut-Sahibinden-Kiralık</Text>
            <Text style={{color:"#570219",fontSize:13,textAlign:'center'}}>Konya, Selçuklu, Cumhuriyet Mah.</Text>
          </View>
          <View style={styles.propertiesBand}>
            <Grid>
              <Col>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Fiyat</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>İlan Tarihi</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>İlan No</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Emlak Tipi</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>m2</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Oda Sayısı</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Bina Yaşı</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Bulunduğu Kat</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Kat Sayısı</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Isıtma</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Banyo Sayısı</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Eşyalı</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Kullanım Durumu</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Site İçerisinde</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Aidat (TL)</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Krediye Uygun</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Kimden</Text>
                <Text style={{color:"grey",fontSize:16,textAlign:'left'}}>Takas</Text>
              </Col>
              <Col>
                <Text style={{color:"blue",fontSize:16,textAlign:'right'}}>₺ 149.000</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>29.08.2017</Text>
                <Text style={{color:"red",fontSize:16,textAlign:'right'}}>470834800</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Satılık Daire</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>110</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>2+1</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>0</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>1</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>6</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Doğalgaz (Kombi)</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>1</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Hayır</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Boş</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Hayır</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Belirtilmemiş</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Evet</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>İnşaat Firmasından</Text>
                <Text style={{color:"black",fontSize:16,textAlign:'right'}}>Hayır</Text>
              </Col>
            </Grid>
          </View>

          <Accordion
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />

          </ScrollView>
          <Footer style={styles.footer}>
            <Grid>
              <Col>
                <Button full info style={styles.footerButton}><Text>Açıklama</Text></Button>
              </Col>
              <Col>
                <Button full info style={styles.footerButton}><Text>Konumu</Text></Button>
              </Col>
            </Grid>
          </Footer>
          </Container>

      );
  }
}

export default Detail;
