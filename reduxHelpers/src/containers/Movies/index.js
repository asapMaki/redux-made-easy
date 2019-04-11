import React, { Component }                                               from 'react';
import MoviesComponent                                                    from "../../components/Movies/index";
import { connect }                                                        from "react-redux";
import { setModal }                                                       from "../../store/actions";
import {withNavigation}                                                   from 'react-navigation';

class MoviesContainer extends Component {
    render() {
        let props = this.props;
        return (
            <MoviesComponent {...props}/>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
        modal: state.modal
    }
}

export default connect( mapStateToProps, {
    setModal,
} )(withNavigation(MoviesContainer));