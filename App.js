import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';

export default class App extends Component {

  constructor() 
  {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount()
  {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}));
  }

  render() 
  {
    const style = StyleSheet.create({
      container: {margin: 20},
    });    

    return (

      <FlatList
        style = {style.container}
        keyExtractor = {item => item.id.toString()}
        data = {this.state.fotos}
        renderItem = { ({item}) => 
          <Post item={item} />       
        }
      />

    );
    
  }

}

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