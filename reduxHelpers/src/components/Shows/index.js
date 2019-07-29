import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { getList } from '../../service/helpers';
import { renderRow } from '../common/Row';

export default class CardsComponent extends Component {
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
        this.props.getTopTenShows(1, 'tv');
    }

    handleLoadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            const { currentPage } = this.state;
            let newPage = currentPage + 1;

            this.setState({ currentPage: newPage }, () => {
                const { currentPage } = this.state;
                this.props.getTopTenShows(currentPage, 'tv');
            });

            this.onEndReachedCalledDuringMomentum = true;
            setTimeout(() => {
                this.onEndReachedCalledDuringMomentum = false;
            }, 1000);
        }
    };

    render() {
        let {
            topShows: { response },
        } = this.props;
        list = getList(response);

        return (
            <View>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => renderRow({ index, item, list })}
                    //refreshing={this.state.isFetching}
                    //onRefresh={this.onRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollBegin={() => {
                        this.onEndReachedCalledDuringMomentum = false;
                    }}
                />
            </View>
        );
    }
}
