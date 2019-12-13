import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: { ...this.props }
        }
    }

    exibeComments(item, styles) {        
        if(item.comentario) {
            return  <View style={styles.rowComments}>
                        <Text style={styles.userComment}>{item.loginUsuario}</Text>
                        <Text>{item.comentario}</Text>
                    </View>
            
        }
    }

    render()
    {
        const styles = StyleSheet.create({
            rowComments: {flexDirection: 'row'},
            userComment: {fontWeight: 'bold', marginRight: 5}
        });

        return(
            <View>                            
                {this.exibeComments(this.state.foto.item, styles)}
            </View>
        )
    }
}