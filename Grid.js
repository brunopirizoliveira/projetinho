import React, { Component } from 'react';
import { View } from 'react-native';
import Cell from './Cell';

export default class Grid extends Component {
    
    constructor(props) {
        super(props);
        this.state = {titulo: 'Rei'};
    }
    
    render() {
        return(
            <View>
                <Cell value={this.state.titulo}></Cell>
                <Cell value={this.props.name}></Cell>                
            </View>
        )
    }
    
}