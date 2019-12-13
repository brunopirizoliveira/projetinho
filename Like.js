import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: {...this.props.item, likers:[{}]}
        };        
    }                

    like() {        

        let novaLista = [];
        if(!this.state.foto.likeada) {
            novaLista = this.state.foto.likers.concat({login: 'meuUser'});
        } else {
            novaLista = this.state.foto.likers.filter(liker => {
                return liker.login != 'meuUser';
            })
        }

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada,
            likers: novaLista
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

    exibeLikes(likers) {        
        if(likers.length > 0) {
            return <Text>{likers.length} {likers.length > 1 ? "curtidas" : "curtida"} </Text>
        }        
    }    

    render()
    {         
        const style = StyleSheet.create({
            width: 25,
            height: 25,
            marginTop: 5,
            marginBottom: 2
        });

        return(
            <View>

                <View>
                    <TouchableOpacity onPress={ this.like.bind(this) }>
                        <Image style={style} source={this.carregaIcone(this.state.foto.likeada)} />                        
                    </TouchableOpacity>                
                </View>
                <View>                            
                    {this.exibeLikes(this.state.foto.likers)}
                </View>

            </View>

        )
    }
}