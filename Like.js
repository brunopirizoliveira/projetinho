import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Foto from './Foto';

export default class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {foto: this.props}
    }                

    like() {        
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        
        this.setState({ foto: fotoAtualizada })
    }

    carregaIcone(likeada) {
        if(likeada) {
            return require('./images/s2-check.png')
        }
        else {
            return require('./images/s2-uncheck.png')
        }
    }

    render()
    {         
        const style = StyleSheet.create({
            width: 25,
            height: 25
        });

        return(
            <View>
                <TouchableOpacity onPress={ this.like.bind(this) }>
                    <Image style={style} source={this.carregaIcone(this.state.foto.likeada)} />                        
                </TouchableOpacity>                
            </View>
            
        )
    }
}