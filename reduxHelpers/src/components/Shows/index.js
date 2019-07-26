import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

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

    componentDidMount() {
        this.props.getTopTenShows(1, 'tv');
        console.tron.log('Props: ', this.props);
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
        return (
            <View>
                {/*<FlatList
                    data={[
                        {key: 'a'}, {key: 'b'}, {key: '2'}, {key: '3'}, {key: '1'}, {key: '9'}, {key: 'bd'},
                        {key: 'aa'}, {key: 'ba'}, {key: '2a'}, {key: '3a'}, {key: '1a'}, {key: 'a9'}, {key: 'bda'}
                    ]}
                    renderItem={({item}) => <CardComponent props={this.props} item={item}/>}
                    refreshing={this.state.isFetching}
                    onRefresh={this.onRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={1}
                />*/}
            </View>
        );
    }
}
