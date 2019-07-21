import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

export default class CardsComponent extends Component {
    state = {};

    /*onRefresh = () => {
        this.setState({ isFetching: true }, function() {
            setTimeout(()=>{
                this.setState({ isFetching: false })
            },2000)
        });
    };*/

    /*
    handleLoadMore = (info) => {
        //here load data from your backend
        console.warn("asdas");
    };
*/

    render() {
        return <View />;
    }
}
