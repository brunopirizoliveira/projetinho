import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions, Alert } from 'react-native';

export default class Foto extends Component {

    constructor() {
        super();
        this.openPopup = () => {
            Alert.alert('Curtiu a foto');
        }            
    }

    render()
    {
        const { item } = this.props;
        const width  = Dimensions.get('screen').width;
        const height = width + 10;
        const style = StyleSheet.create({            
            foto: {width: width, height: height}
        });

        
        return(
            
            <TouchableOpacity onPress={this.openPopup}> 
                <Image 
                    source={{ uri: item.urlFoto }} 
                    style={style.foto}
                />
            </TouchableOpacity>

        )
    }

}
