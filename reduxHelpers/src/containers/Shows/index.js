import React, { Component } from 'react';
import Shows from '../../components/Shows';
import { connect } from 'react-redux';
import * as showsActions from '../../store/actions/shows';
import { withNavigation } from 'react-navigation';

class ShowsContainer extends Component {
    render() {
        let props = this.props;
        return <Shows {...props} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        modal: state.modal,
        topShows: state.shows.topTen,
    };
}

export default connect(
    mapStateToProps,
    {
        ...showsActions,
    },
)(withNavigation(ShowsContainer));
