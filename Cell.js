import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';

export default class Cell extends Component {

    render() {
        return(
            <View>
                <Text>{this.props.value}</Text>
            </View>
        )        
    }

}