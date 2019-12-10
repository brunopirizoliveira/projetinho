import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import Grid from './Grid';

export default class App extends Component {
  
  render() {  
    const width = Dimensions.get('screen').width;
    const fotos =[
      {id: 1, nome: 'Tata 1', src: "./images/Tata.jpeg"},
      {id: 2, nome: 'Tata 2', src: "./images/Tata.jpeg"},
      {id: 3, nome: 'Tata 3', src: "./images/Tata.jpeg"},
      {id: 4, nome: 'Tata 4', src: "./images/Tata.jpeg"},
    ];

    return (

      <FlatList
        style = {{margin: 20}}
        keyExtractor = {item => item.id.toString()}
        data = {fotos}
        renderItem = { ({item}) => 
          <View key={item.id}>
            <Grid name={item.nome} />
            <Image 
              source={ require("./images/Tata.jpeg") } 
              style={{width: width, height: width+100}}
            />
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
