import React, { Component } from "react";
import { Text }             from "react-native";
import {connect}            from "react-redux";

import getTranslations      from "../languages/index"

class Label extends Component{
    render(){
        let {keyName, focused} = this.props;
        let customLabelStyle = {
            color        : "white",
            letterSpacing:0.4,
            fontSize: 12,
            paddingBottom:4,
            textAlign:"center"
        };
        return <Text style={customLabelStyle}>{getTranslations(keyName, this.props.user.locale)}</Text>;
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Label);