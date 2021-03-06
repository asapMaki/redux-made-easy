import React, { Component } from 'react';
import { FlatList, View, ImageBackground, Text } from 'react-native';
import styles from './style';

export default class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        const {
            item: { poster_path: imageURI, title, vote_average: score, name },
        } = this.props;
        const { container, textContainer, textStyle, titleStyle, scoreStyle, imageStyle } = styles;
        return (
            <View style={container}>
                <ImageBackground style={imageStyle} source={{ uri: imageURI }} resizeMode='contain' />
                <View style={textContainer}>
                    <Text style={[textStyle, titleStyle]}>{!name ? title : name}</Text>
                    <View style={scoreStyle}>
                        <Text style={[textStyle]}>{score}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
