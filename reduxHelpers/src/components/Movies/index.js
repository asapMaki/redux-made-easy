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

    componentDidMount() {
        this.props.getTopTen(1, 'movie');
        console.tron.log('Props: ', this.props);
    }

    render() {
        let {
            topMovies: {
                //response: { results: movies },
                response,
            },
        } = this.props;
        console.tron.log(response);
        let movies = getList(response);
        console.tron.log('Movies: ', movies);

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Poster movie={movies[0]} />
                    <Poster movie={movies[1]} />
                </View>
            </View>
        );
    }
}
