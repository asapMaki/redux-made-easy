import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import Poster from '../common/Poster';
import { getList } from '../../service/helpers';
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            query: '',
            modalIsOpen: false,
            toggle: 'false',
            currentPage: 1,
        };
    }

    movies = [];

    componentDidMount() {
        this.props.getTopTen(1, 'movie');
        console.tron.log('Props: ', this.props);
    }

    renderRow = ({ item, index }) => {
        if (index % 2 != 0) return;

        return (
            <View style={styles.row}>
                <Poster movie={item} />
                <Poster movie={this.movies[index + 1]} />
            </View>
        );
    };

    render() {
        let {
            topMovies: {
                //response: { results: movies },
                response,
            },
        } = this.props;
        this.movies = getList(response);

        return (
            <View style={styles.container}>
                <FlatList data={this.movies} renderItem={this.renderRow} />
            </View>
        );
    }
}
