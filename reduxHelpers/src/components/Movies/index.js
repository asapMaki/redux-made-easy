import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            query: '',
            modalIsOpen: false,
            currentPage: 1,
        };
    }

    componentDidMount() {
        this.props.getTopTen(1, this.state.toggle);
    }

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
        console.tron.log(this.props);
        return <View />;
    }
}
