import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import { renderRow } from '../common/Row';
import { getList } from '../../service/helpers';
import { FloatingButton } from '../common/FloatingButton';
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
    onEndReachedCalledDuringMomentum = null;

    componentDidMount() {
        this.props.getTopTen(1, 'movie');
        console.tron.log('Props movie: ', this.props);
    }

    handleLoadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            const { currentPage } = this.state;
            let newPage = currentPage + 1;

            this.setState({ currentPage: newPage }, () => {
                const { currentPage } = this.state;
                this.props.getTopTen(currentPage, 'movie');
            });

            this.onEndReachedCalledDuringMomentum = true;
            setTimeout(() => {
                this.onEndReachedCalledDuringMomentum = false;
            }, 1000);
        }
    };

    render() {
        let {
            topMovies: {
                topMovies: { response: movies },
            },
        } = this.props;
        this.list = getList(movies);

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.list}
                    renderItem={({ item, index }) => renderRow({ index, item, list: this.list })}
                    //refreshing={this.state.isFetching}
                    //onRefresh={this.onRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollBegin={() => {
                        this.onEndReachedCalledDuringMomentum = false;
                    }}
                />
                <FloatingButton />
            </View>
        );
    }
}
