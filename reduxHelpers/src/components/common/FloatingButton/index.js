import React from 'react';
import { View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

export const FloatingButton = (props) => {
    let actions = [
        {
            text: 'Scroll to top',
            icon: require('../../../assets/btn-images/uparrow.png'),
            name: 'btn_top',
            position: 0,
        },
        {
            text: 'Search',
            icon: require('../../../assets/btn-images/search-icon-png-27.png'),
            name: 'btn_search',
            position: 0,
        },
    ];

    doActions = (key) => {
        func = null;
        switch (key) {
            case 'btn_top':
                props.flatListRef();
                break;

            default:
                break;
        }
    };

    return (
        <FloatingAction
            actions={actions}
            onPressItem={(name) => {
                switch (name) {
                    case 'btn_top':
                        props.flatListRef();
                        break;
                    case 'btn_search':
                        props.openSearch();
                        break;
                    default:
                        break;
                }
            }}
            onPressBackdrop={() => {
                console.tron.log('Test');
            }}
        />
    );
};
