import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Foto from './Foto';

export default class Post extends Component {

    constructor() {
        super();
    }

    render() 
    {
        return(

            <View key={this.props.keyValue}>
                <Header item={this.props.foto} />
                <Foto item={this.props.foto} />
            </View> 
        )
    }

}