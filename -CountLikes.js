import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CountLikes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: {...this.props.item }
        }        
    }

    exibeLikes(likers) {
        console.log(this.state.foto);
        if(likers.length > 0) {
            return <Text>{likers.length} {likers.length > 1 ? "curtidas" : "curtida"} </Text>
        }        
    }

    render()
    {
        return(
            <View>                            
                {this.exibeLikes(this.state.foto.likers)}
            </View>
        )
    }
}