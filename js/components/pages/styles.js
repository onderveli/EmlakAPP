const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
      flex: 1,
      backgroundColor:"#f3f3f3"
    },
    mb: {
      margin: 5
    },
    searchBar:{
      marginBottom: 15,
      padding:10,
      backgroundColor:"#fff",
      borderWidth: 0.4,
      borderColor: '#999',

    },
    card:{
      marginBottom: 15,
      padding:10,
      backgroundColor:"#fff",
      borderWidth: 0.4,
      borderColor: '#999',
    },
    listText:{
      fontSize:13.75,
    },
    listSubText:{
      fontSize:13
    },
    listLeftText:
    {
      minWidth:150,
      textAlign:"left",
      fontSize:12
    }
    ,
    listRightText:
    {
      textAlign:"right",
      fontSize:12,
      color:"blue",
      fontWeight:"bold"
    }
};
