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
            execute: () => {
                props.flatListRef();
            },
        },
        {
            text: 'Search',
            icon: require('../../../assets/btn-images/uparrow.png'),
            name: 'bt_top',
            position: 0,
            execute: () => {
                console.tron.log('Search');
            },
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
