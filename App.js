import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, View, Dimensions, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Grid from './Grid';

export default class App extends Component {

  constructor() {
    super();
    this.openPopup = () => {
      Alert.alert('Curtiu a foto');
    }
  }

  render() {  

    const width = Dimensions.get('screen').width;
    const fotos =[
      {id: 1, nome: 'Tata 1', src: "./images/Tata.jpeg"},
      {id: 2, nome: 'Tata 2', src: "./images/Tata.jpeg"},
      {id: 3, nome: 'Tata 3', src: "./images/Tata.jpeg"},
      {id: 4, nome: 'Tata 4', src: "./images/Tata.jpeg"},
    ];

    const style = StyleSheet.create({
      container: {margin: 20},
      cabecalho: {margin: 10, flexDirection: 'row', alignItems: 'center'},
      avatar: {marginRight: 15, borderRadius: 20, width: 40, height: 40, marginTop: 10},
      foto: {width: width, height: width+100}
    });    

    return (

      <FlatList
        style = {style.container}
        keyExtractor = {item => item.id.toString()}
        data = {fotos}
        renderItem = { ({item}) => 
          <View key={item.id}>
            <View style={style.cabecalho}>
              <Image 
                source={ require("./images/Tata.jpeg") } 
                style={style.avatar}
              />
              <Grid name={item.nome} />
            </View>
            <TouchableOpacity onPress={this.openPopup}> 
              <Image 
                source={ require("./images/Tata.jpeg") } 
                style={style.foto}
              />
            </TouchableOpacity>
          </View>          
        }
      />

      // <ScrollView style={{marginTop:20}}>
      //     {fotos.map(n => 

      //       <View key={n.id}>
      //         <Grid name={n.nome} />
      //         <Image 
      //           source={ require("./images/Tata.jpeg") } 
      //           style={{width: width, height: width+100}}
      //         />
      //       </View>

      //     )}
      // </ScrollView>
    );
    
  }

}
