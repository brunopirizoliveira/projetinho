import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Foto from './Foto';
import Like from './Like';
import Comments from './Comments';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props
        }
    }

    render() 
    {
        const { foto } = this.state;

        return(

            <View key={ foto.keyValue }>
                <Header item={ foto.item } />
                <Foto item={ foto.item } />
                <Like item={ foto.item } />
                <Comments item={ foto.item } />
            </View> 
        )
    }

}