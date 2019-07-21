import React, { Component } from 'react';
import Shows from '../../components/Shows';
import { connect } from 'react-redux';
import { setModal } from '../../store/actions';
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
    };
}

export default connect(
    mapStateToProps,
    {
        setModal,
    },
)(withNavigation(ShowsContainer));
