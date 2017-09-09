const React = require("react-native");

const { StyleSheet } = React;

export default {
  titleBand:
  {
    height:50,
    backgroundColor:'#64001c',
    padding:10,
    justifyContent: 'center',

  },
  infoBand:
  {
    height:50,
    backgroundColor:'#c70039',
    padding:10,
    justifyContent: 'center',
      opacity:0.9

  },
  propertiesBand:
  {
    flex:1,
    backgroundColor:'white',
    padding:15,
    justifyContent: 'center',
  },
  footer:{
    backgroundColor:"white",
    borderTopWidth:1,
  borderColor:"lightgrey",
  },
  footerButton:
  {
margin:5,
backgroundColor:"#c70039",
  },

  container: {
   flex: 1,
   backgroundColor: '#F5FCFF',
 },
 expandedBand:{
   backgroundColor:"#4a0521",
   margin:5,
   color:"white",
   padding:10,
   justifyContent: 'center',
 },
 expandedDetail:{
   padding:10,
   justifyContent: 'center',
 }
};
