import React, { Component } from 'react';
import Movies from '../../components/Movies';
import * as moviesActions from '../../store/actions/movies';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class MoviesContainer extends Component {
    render() {
        let props = this.props;
        return <Movies {...props} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        modal: state.modal,
    };
}

export default connect(
    mapStateToProps,
    {
        ...moviesActions,
    },
)(withNavigation(MoviesContainer));
