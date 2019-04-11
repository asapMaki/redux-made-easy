import React, { Component } from "react";
import { Text }             from "react-native";
import {connect}            from "react-redux";

import getTranslations      from "../languages/index"

class TitleLabel extends Component{
    render(){
        let {keyName, focused, user} = this.props;

        let customLabelStyle = {
            color        : "white",
            letterSpacing:0.4,
            fontSize: 16,
            fontWeight: 'bold',
            //paddingBottom:4,
            textAlign:"center"
        };
        return <Text style={customLabelStyle}>
            {getTranslations(keyName, "es")}
        </Text>;
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(TitleLabel);