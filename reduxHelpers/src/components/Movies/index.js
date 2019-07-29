import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import { renderRow } from '../common/Row';
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

    list = [];

    componentDidMount() {
        this.props.getTopTen(1, 'movie');
        console.tron.log('Props: ', this.props);
    }

    render() {
        let {
            topMovies: {
                topMovies: { response: movies },
            },
        } = this.props;
        console.tron.log(movies);
        this.list = getList(movies);

        return (
            <View style={styles.container}>
                <FlatList data={this.list} renderItem={({ item, index }) => renderRow({ index, item, list: this.list })} />
            </View>
        );
    }
}
