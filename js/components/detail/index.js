import React, { Component } from "react";
import { Image, View,ScrollView,Dimensions } from "react-native";
import Swiper from 'react-native-swiper';
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


const {width} = Dimensions.get('window')
const stylest = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}
const Slider = props => ( <View style={stylest.container}>

        <Image style={stylest.image} source={props.uri}/>

    </View>

)

const SECTIONS = [
  {
    title: 'Cephe',
    propertySize:'3/4',
    content: 'asdasdasd',
  },
  {
    title: 'İç Özellikler',
    propertySize:'22/51',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Dış Özellikler',
    propertySize:'6/20',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Engelliye Uygun',
    propertySize:'Belirtilmemiş',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Yakınlık',
    propertySize:'19/22',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Ulaşım',
    propertySize:'9/18',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Manzara',
    propertySize:'1/6',
    content: 'ikinci Accordion açıldı',
  }
  ,
  {
    title: 'Konut Tipi',
    propertySize:'3/10',
    content: 'ikinci Accordion açıldı',
  }
];

class Detail extends Component {

  constructor(props) {
      super(props);

      this.state = {
          position: 0,
          imagesSlider: [
              require('./img/1.jpg'),
              require('./img/2.jpg'),
              require('./img/3.jpg')
          ]
      };
  }


/*Accordion*/
  _renderHeader(section, index, isActive) {
    return (
      <Grid style={styles.expandedBand}>
        <Col>
          <Text style={styles.expandedLeft}>{section.title}</Text>
        </Col>
        <Col>
          <Text style={styles.expandedRight}>{section.propertySize}</Text>
        </Col>
      </Grid>

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
              <Swiper
              height={160}
              bounces={true}
              activeDotColor="white">
                    {
                        this.state.imagesSlider.map((item, i) => <Slider
                        uri={item}
                        key={i}
                      />)
                    }
            </Swiper>
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
          <Text style={styles.propertiesText}>Özellikler</Text>
            <Accordion
              sections={SECTIONS}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              underlayColor="transparent"
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
