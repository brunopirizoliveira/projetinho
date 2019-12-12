import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Header extends Component {

    constructor() {
        super();
    }

    render() 
    {
        const { item } = this.props;
        const style = StyleSheet.create({
            cabecalho: {margin: 10, flexDirection: 'row', alignItems: 'center'},
            avatar: {marginRight: 15, borderRadius: 20, width: 40, height: 40, marginTop: 10}
        });

        return(

            <View style={style.cabecalho}>
                <Image 
                    source={{ uri: item.urlPerfil }} 
                    style={style.avatar}
                />
                <Text>{ item.loginUsuario }</Text>                
            </View>

        )
    }

}