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
    backgroundColor:"#f8f8f8",
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
   backgroundColor: 'white',
 },
 expandedBand:{
   borderBottomWidth:1,
   borderColor:"#f2f2f2",
   padding:10,
   marginLeft:10,
   marginRight:10,
   margin:5,
   justifyContent: 'center',
 },
 expandedLeft:{
   color:"black",
   fontWeight: 'bold',
   textAlign:"left"
 },
 expandedRight:{
   color:"grey",
   textAlign:"right"
 },
 expandedDetail:{
   padding:10,
   justifyContent: 'center',
   backgroundColor:"#f1f1f1"
 },
 propertiesText:{
   color:"black",
   fontWeight: 'bold',
   borderBottomWidth:2,
   borderColor:"orange",
   marginLeft:10,
   marginRight:10,
   marginBottom:5,
   padding:10,
 }
};
